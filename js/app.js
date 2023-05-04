"use strict";

let stores = [
  { store: "Seattle", minCust: 23, maxCust: 65, avgCookiesPerSale: 6.3 },
  { store: "Tokyo", minCust: 3, maxCust: 24, avgCookiesPerSale: 1.2 },
  { store: "Dubai", minCust: 11, maxCust: 38, avgCookiesPerSale: 3.7 },
  { store: "Paris", minCust: 20, maxCust: 38, avgCookiesPerSale: 2.3 },
  { store: "Lima", minCust: 2, maxCust: 16, avgCookiesPerSale: 4.6 },
];

let CSaSea = [25, 55, 8, 12];

let seaSales1 = document.getElementById("sea-sales-1");
seaSales1.textContent = CSaSea[0];
let seaSales2 = document.getElementById("sea-sales-2");
seaSales2.textContent = CSaSea[1];
let seaSales3 = document.getElementById("sea-sales-3");
seaSales3.textContent = CSaSea[2];
let seaSales4 = document.getElementById("sea-sales-4");
seaSales4.textContent = CSaSea[3];

let sumSea = 0
sumSea += CSaSea[0]
sumSea += CSaSea[1]
sumSea += CSaSea[2]
sumSea += CSaSea[3]
