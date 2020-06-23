function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

// used in randomImages
const section =  document.getElementById("section");
// on load addEventListener
document.getElementById("section").addEventListener("click", clickListener);

// firstfull loadFromLocalStorage();
loadFromLocalStorage();
// render images
randomImages();

// renderResultList
renderResultList();

function clickListener(event) {
  const index = event.target["data-index"];
  if (index){
    const product = products[index];
    product.clicks++;
    console.log(products[index]);
    roundsCount--;
    document.getElementById("currentRounds").innerText = roundsCount + " rounds";
    const content = `${product.name} had ${product.clicks} votes and was shown ${product.shows} times`;
    document.getElementById(index).innerText = content;
    randomImages();
  }
}

function randomImages() {
  console.log("randomImages()");
  if (roundsCount !== 0){
    let index1 = randomBetween(0, 19);
    let index2 = randomBetween(0, 19);
    let index3 = randomBetween(0, 19);
    while(previousIndexes.includes(index1)){
      index1 = randomBetween(0, 19);
    }
    while(index2 === index1 || previousIndexes.includes(index2)){
      index2 = randomBetween(0, 19);
    }
    while(index3 === index2 || index3 === index1 || previousIndexes.includes(index3)){
      index3 = randomBetween(0, 19);
    }

    // store indexes for the next iteration
    previousIndexes = [];
    previousIndexes.push(index1);
    previousIndexes.push(index2);
    previousIndexes.push(index3);

    // empty old images
    section.innerHTML = "";
    products[index1].render();
    products[index2].render();
    products[index3].render();
  }

  if (roundsCount === 0) {
    // rmove listener and display results
    document.getElementById("section").removeEventListener("click", clickListener);
    // delete imgs
    section.innerHTML = "";
    const labels = [];
    const clickedDataset = [];
    const shownDataset = [];
    for (var i = 0; i < products.length; i++) {
      const { name, clicks, shows } = products[i];
      labels[i] = name;
      clickedDataset[i] = clicks;
      shownDataset[i] = shows;
    }

    document.getElementById('myChart').style.visibility='visible';
    document.getElementById('chartContainer').style.float='right';
    renderChart(labels, shownDataset, clickedDataset);
  }

  // after render products save to localStorage to save the new #shows of the products
  // and also new value of currentRounds
  saveToLocalStorage();
}


// set counter
document.getElementById("roundsForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const inputRoundsNumber = parseInt(event.target.roundsCount.value);
  totalRounds = inputRoundsNumber;
  roundsCount = inputRoundsNumber;
  document.getElementById("totalRounds").innerText = totalRounds + " rounds";
  document.getElementById("currentRounds").innerText = roundsCount + " rounds";
  document.getElementById("section").addEventListener("click", clickListener);
  document.getElementById('myChart').style.visibility='hidden';
  document.getElementById('chartContainer').style.float='';
  resetProducts(); // reset values of clicks and shown
  randomImages();
  // renderResultList after resetProducts
  renderResultList();
});

function renderResultList(){
  const resultList = document.getElementById("resultList");
  // empty old values
  resultList.innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    const { name, clicks, shows, index } =  products[i];
    const content = `${name} had ${clicks} votes and was shown ${shows} times`;
    const li = document.createElement("li");
    li.innerText = content;
    li.id = index;
    resultList.appendChild(li);
    const br = document.createElement("br");
    resultList.appendChild(br);
  }
}
