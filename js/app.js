"use strict";

function City(store, minCust, maxCust, avgCookiesPerSale, salesPerHour) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.salesPerHour = salesPerHour;
}

// function declaration
City.prototype.render = function render() {
  let locRow = document.createElement(`tr`);
  let nameData = document.createElement(`td`);
  nameData.textContent = this.store;
  sales.appendChild(locRow);
  locRow.appendChild(nameData);
  console.log(this.salesPerHour);
  for (let i = 0; i < this.salesPerHour.length; i++) {
    let salesData = document.createElement(`td`);
    salesData.textContent = this.salesPerHour[i];
    locRow.appendChild(salesData);
  }
  let locTotal = document.createElement(`td`);
  locTotal.textContent = this.subTotal;
  locRow.appendChild(locTotal);
};

//function to render tfooter
function renderTableFoot() {
  let totalRow = document.createElement(`tr`);
  let totalData = document.createElement(`td`);
  totalData.textContent = "Totals";
  sales.appendChild(totalRow);
  totalRow.appendChild(totalData);
  let hour = 0;
  for (let i = 0; i < hours.length; i++) {
    for (let j = 0; j < stores.length; j++) {
      hour += stores[j].salesPerHour[i];
    }
    let rowHours = document.createElement(`td`);
    rowHours.textContent = hour;
    totalRow.appendChild(rowHours);
  }
  let grandTotal = document.createElement(`td`);
  grandTotal.textContent = hour;
  totalRow.appendChild(grandTotal);
};

// array of objects
let stores = [
  // {
  //    store: "Seattle",
  //     minCust: 23,
  //     maxCust: 65,
  //     avgCookiesPerSale: 6.3,
  //     salesPerHour: [],
  //   },

  //   {
  //     store: "Tokyo",
  //     minCust: 3,
  //     maxCust: 24,
  //     avgCookiesPerSale: 1.2,
  //     salesPerHour: [],
  //   },
  //   {
  //     store: "Dubai",
  //     minCust: 11,
  //     maxCust: 38,
  //     avgCookiesPerSale: 3.7,
  //     salesPerHour: [],
  //   },
  //   {
  //     store: "Paris",
  //     minCust: 20,
  //     maxCust: 38,
  //     avgCookiesPerSale: 2.3,
  //     salesPerHour: [],
  //   },
  //   {
  //     store: "Lima",
  //     minCust: 2,
  //     maxCust: 16,
  //     avgCookiesPerSale: 4.6,
  //     salesPerHour: [],
  //   },
  new City("Seattle", 23, 65, 6.3, []),
  new City("Tokyo", 3, 24, 1.2, []),
  new City("Dubai", 11, 38, 3.7, []),
  new City("Paris", 20, 38, 2.3, []),
  new City("Lima", 2, 16, 4.6, []),
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

let hours = [
  `6am`,
  `7am`,
  `8am`,
  `9am`,
  `10am`,
  `11am`,
  `12pm`,
  `1pm`,
  `2pm`,
  `3pm`,
  `4pm`,
  `5pm`,
  `6pm`,
];

for (let i = 0; i < stores.length; i++) {
  stores[i].subTotal = 0;
  for (let j = 0; j < hours.length; j++) {
    let randomNum = getRandomInt(stores[i].minCust, stores[i].maxCust);
    stores[i].salesPerHour.push(randomNum);
    stores[i].subTotal += randomNum;
  }
  console.log(stores[i].subTotal);
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
  let totalElm = document.createElement("li");
  totalElm.textContent = "Total: " + stores[i].subTotal;
  salesElm.appendChild(totalElm);
}
let tableHead = document.getElementById("table-head");
for (let i = 0; i < hours.length; i++) {
  let headElm = document.createElement(`th`);
  headElm.textContent = hours[i];
  tableHead.appendChild(headElm);
}
let dailyTotal = document.createElement("th");
dailyTotal.textContent = "Daily Location Total";
tableHead.appendChild(dailyTotal);

let sales = document.getElementById("sales-table");
for (let i = 0; i < stores.length; i++) {
  stores[i].render();
}
renderTableFoot();

// stores[i];
// stores.salesPerHour[i];

// let parent = document.getElementById("seaSa");
// let seattleElm = document.createElement("ul");
// seattleElm.textContent = stores[i];

// parent.appendChild(seattleElm);
