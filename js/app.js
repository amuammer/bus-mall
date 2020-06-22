function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

let products = [];
let roundsCount = 25;

const section =  document.getElementById("section");

function Product(name, url) {
  this.name = name;
  this.url = url;
  this.clicks = 0;
  this.shows = 0;
  this.index = products.push(this) - 1; // return new-length
}

Product.prototype.render = function (){
  // views
  this.shows++;
  const img = document.createElement("img");
  img.src = this.url;
  img["data-index"] = this.index;
  img.alt = this.name;
  const div = document.createElement("div");
  div.classList.add("responsive");
  div.classList.add("gallery");
  div.appendChild(img);
  section.appendChild(div);
}


function addObjects () {
  products = [];
  // set objects
  new Product("bag", "img/bag.jpg");
  new Product("banana", "img/banana.jpg");
  new Product("bathroom", "img/bathroom.jpg");
  new Product("boots", "img/boots.jpg");
  new Product("breakfast", "img/breakfast.jpg");
  new Product("bubblegum", "img/bubblegum.jpg");
  new Product("chair", "img/chair.jpg");
  new Product("cthulhu", "img/cthulhu.jpg");
  new Product("dog-duck", "img/dog-duck.jpg");
  new Product("dragon", "img/dragon.jpg");
  new Product("pen", "img/pen.jpg");
  new Product("pet-sweep", "img/pet-sweep.jpg");
  new Product("scissors", "img/scissors.jpg");
  new Product("shark", "img/shark.jpg");
  new Product("sweep", "img/sweep.png");
  new Product("tauntaun", "img/tauntaun.jpg");
  new Product("unicorn", "img/unicorn.jpg");
  new Product("usb", "img/usb.gif");
  new Product("water-can", "img/water-can.jpg");
  new Product("wine-glass", "img/wine-glass.jpg");
}


function clickListener(event) {
  const index = event.target["data-index"];
  if (index){
    products[index].clicks++;
    console.log(products[index]);
    roundsCount--;
    document.getElementById("currentRounds").innerText = roundsCount + " rounds";
    randomImages();
  }
}

function randomImages() {
  if (roundsCount !== 0){
    const index1 = randomBetween(0, 19);
    let index2 = index1; // default equals each others
    let index3 = index1;
    while(index2 === index1){
      index2 = randomBetween(0, 19);
    }
    while(index3 === index2 || index3 === index1){
      index3 = randomBetween(0, 19);
    }
    // empty old images
    section.innerHTML = "";
    products[index1].render();
    products[index2].render();
    products[index3].render();
  }

  if (roundsCount === 0) {
    // rmove listener and display results
    document.getElementById("section").removeEventListener("click", clickListener);
    // display results
    section.innerHTML = "";
    const ul = document.createElement("ul");
    for (var i = 0; i < products.length; i++) {
      const { name, clicks, shows } = products[i];
      if(shows) {
        const li = document.createElement("li");
        li.innerText = name +" had " + clicks + " votes and was shown " + shows + " times";
        ul.appendChild(li);
      }
    }
    section.appendChild(ul);
  }
}


// on load addEventListener
document.getElementById("section").addEventListener("click", clickListener);

// set counter
document.getElementById("roundsForm").addEventListener("submit", function(event) {
  event.preventDefault();
  roundsCount = parseInt(event.target.roundsCount.value);
  document.getElementById("allRounds").innerText = roundsCount + " rounds";
  document.getElementById("currentRounds").innerText = roundsCount + " rounds";
  // on set
  document.getElementById("section").addEventListener("click", clickListener);
  addObjects();
  randomImages();
});
