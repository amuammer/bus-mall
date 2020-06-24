function Product(name, url, clicks, shows) {
  this.name = name;
  this.url = url;
  this.clicks = clicks;
  this.shows = shows;
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

Product.prototype.reRenderListItem = function (){
  const content = `${this.name} had ${this.clicks} votes and was shown ${this.shows} times`;
  console.log(document.getElementById("resultList").childNodes);
  document.getElementById(this.index).innerText = content;
}

function resetProducts(){
  console.log("resetProducts()");
  products = [];
    // set objects
    new Product("bag", "img/bag.jpg", 0, 0);
    new Product("banana", "img/banana.jpg", 0, 0);
    new Product("bathroom", "img/bathroom.jpg", 0, 0);
    new Product("boots", "img/boots.jpg", 0, 0);
    new Product("breakfast", "img/breakfast.jpg", 0, 0);
    new Product("bubblegum", "img/bubblegum.jpg", 0, 0);
    new Product("chair", "img/chair.jpg", 0, 0);
    new Product("cthulhu", "img/cthulhu.jpg", 0, 0);
    new Product("dog-duck", "img/dog-duck.jpg", 0, 0);
    new Product("dragon", "img/dragon.jpg", 0, 0);
    new Product("pen", "img/pen.jpg", 0, 0);
    new Product("pet-sweep", "img/pet-sweep.jpg", 0, 0);
    new Product("scissors", "img/scissors.jpg", 0, 0);
    new Product("shark", "img/shark.jpg", 0, 0);
    new Product("sweep", "img/sweep.png", 0, 0);
    new Product("tauntaun", "img/tauntaun.jpg", 0, 0);
    new Product("unicorn", "img/unicorn.jpg", 0, 0);
    new Product("usb", "img/usb.gif", 0, 0);
    new Product("water-can", "img/water-can.jpg", 0, 0);
    new Product("wine-glass", "img/wine-glass.jpg", 0, 0);
}
