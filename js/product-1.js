"use strict";

let cookie1 = prompt("How many cookies would you like today?");
let message = "";
let discount = 0.1;
// total before tax, total after discount, apply shipping, grand total
// amount of tax

if (cookie1 >= 3) {
  message = "Get $5 off with code GET5.";
} else if (cookie1 < 3) {
  message = "Get 10% off your order with code GET10";
}

window.alert(message);

let code1 = prompt("Enter your discount code.").toUpperCase();
let message1 = "";
if (code1 === "GET5" && cookie1 >= 3) {
  message1 = "You get $5 off!";
} else if (code1 === "GET10" && cookie1 < 3) {
  message1 = "You get 10% off!";
} else {
  message1 = "Discount not availble for this order.";
}

window.alert(message1);

let price = 10;


let total = price - (price * discount) / 100;
if (total >= 25) {
  message = "You get free shipping";
  applyFreeShipping(total >= 25);
} else {
  message = "Shipping cost is 3.99.";
}

let tax = 5.2;

taxDue = price * (tax / 100);

window.alert("Your total is" + taxDue);


let salesReceiptElement = document.getElementById("sales-receipt");

let salesTaxElement = document.createElement("p");
salesTaxElement.textContent = tax;
salesReceiptElement.appendChild(salesTaxElement);

document.getElementById("subtotal").textContent = price
document.getElementById("tax").textContent = taxDue
document.getElementById("total").textContent = total
