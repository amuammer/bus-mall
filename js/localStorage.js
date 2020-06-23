let products = [];
let totalRounds = 25;
let roundsCount = 25;
let previousIndexes = [];

function saveToLocalStorage() {
  console.log("saveToLocalStorage()");
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("totalRounds", totalRounds);
  localStorage.setItem("roundsCount", roundsCount);
  localStorage.setItem("previousIndexes", previousIndexes);
}

function loadFromLocalStorage() {
  console.log("loadFromLocalStorage()");
  // empty old values of objects => cuz i want to use push
  products = [];
  const productsObjectsArray = JSON.parse(localStorage.getItem("products")) || [];
  for (var i = 0; i < productsObjectsArray.length; i++) {
    const { name, url, clicks, shows } = productsObjectsArray[i];
    new Product(name, url, clicks, shows);
  }
  totalRounds = parseInt(localStorage.getItem("totalRounds")) || 25;
  roundsCount = parseInt(localStorage.getItem("roundsCount")) || 25;
  previousIndexes = localStorage.getItem("previousIndexes") || []; // at the first time is null

  // set values of rounds
  document.getElementById("totalRounds").innerText = totalRounds + " rounds";
  document.getElementById("currentRounds").innerText = roundsCount + " rounds";
}
