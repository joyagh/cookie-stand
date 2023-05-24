"use strict";

let stores = [
  {
    store: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgCookiesPerSale: 6.3,
    salesPerHour: [],
  },
  {
    store: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgCookiesPerSale: 1.2,
    salesPerHour: [],
  },
  {
    store: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgCookiesPerSale: 3.7,
    salesPerHour: [],
  },
  {
    store: "Paris",
    minCust: 20,
    maxCust: 38,
    avgCookiesPerSale: 2.3,
    salesPerHour: [],
  },
  {
    store: "Lima",
    minCust: 2,
    maxCust: 16,
    avgCookiesPerSale: 4.6,
    salesPerHour: [],
  },
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

let hours = [`11am`, `12pm`, `1pm`, `2pm`];

for (let i = 0; i < stores.length; i++) {
  for (let j = 0; j < hours.length; j++) {
    let randomNum = getRandomInt(stores[i].minCust, stores[i].maxCust);
    stores[i].salesPerHour.push(randomNum);
  }
}
console.log(stores)

let seattleSales = document.querySelectorAll("#seaSa1");
for (let i = 0; i < seattleSales.length; i++){
  console.log(hours[0], stores[0]);
}

let sumSea = 0
sumSea += CSaSea[0]
sumSea += CSaSea[1]
sumSea += CSaSea[2]
sumSea += CSaSea[3]
