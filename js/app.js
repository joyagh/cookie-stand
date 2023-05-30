"use strict";

let reports = [];

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

let hours = [`6am`, `7am`, `8am`, `9am`, `10am`,`11am`, `12pm`, `1pm`, `2pm`, `3pm`, `4pm`, `5pm`, `6pm`];

for (let i = 0; i < stores.length; i++) {
  stores[i].subTotal = 0
  for (let j = 0; j < hours.length; j++) {
    let randomNum = getRandomInt(stores[i].minCust, stores[i].maxCust);
    stores[i].salesPerHour.push(randomNum);
    stores[i].subTotal += randomNum;
  }
  console.log(stores[i].subTotal)
 
}

let salesData = document.getElementById("sales-data");

for (let i = 0; i < stores.length; i++) {
  let salesElm = document.createElement(`ul`);
  let storeElm = document.createElement("li");
  storeElm.textContent = stores[i].store;
  salesData.appendChild(salesElm);
  salesElm.appendChild(storeElm);
  for (let j = 0; j < stores[i].salesPerHour.length; j++) {
    let hoursElm = document.createElement(`li`);
    hoursElm.textContent = hours[j] + ": " + stores[i].salesPerHour[j];
    salesElm.appendChild(hoursElm);
  }
  let totalElm = document.createElement('li');
  totalElm.textContent = "Total: " + stores[i].subTotal;
  salesElm.appendChild(totalElm);
}

// stores[i];
// stores.salesPerHour[i];

// let parent = document.getElementById("seaSa");
// let seattleElm = document.createElement("ul");
// seattleElm.textContent = stores[i];

// parent.appendChild(seattleElm);
