"use strict";
let totalQuantity = 0;
// totalQuantity = parseInt(sessionStorage.getItem("totalQuantity"));
let itemQuantity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//! ITEM BELOW CAUSING ERROR WHEN NO ITEMS IN CART BUT STILL FUNCTIONS
itemQuantity = JSON.parse(sessionStorage["itemQuantity"]);

const itemName = [
  "Italian Pizza",
  "Chicken Wings",
  "Ham & Cheese",
  "Burger & Fries",
  "Club Sandwich",
  "House Salad",
  "Chicken DInner",
  "Steak",
  "Pork Chops",
  "Ribs",
  "Oreo Dessert",
  "Lemon Pie",
];

const itemNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const itemPrice = [
  9.99, 9.99, 12.99, 11.99, 8.99, 8.99, 15.99, 21.99, 14.99, 12.99, 6.99, 7.99,
];

const itemPicture = [
  "pizza.png",
  "chickenWings.png",
  "hamCheese.png",
  "burger.png",
  "club.png",
  "salad.png",
  "chickenDinner.png",
  "steak.png",
  "porkChops.png",
  "ribs.png",
  "dessertOne.png",
  "dessertTwo.png",
];

// CHANGE THE 0 IN ITEMS TO i AFTER COMPLETED
// let itemHTML =
//   `<tr>` +
//   `<td id="row1"><img src="imgAssets/orderImg/${itemPicture[i]}" alt="${itemName[i]}"><span>Italian Pizza</span></td>` +
//   `<td>$${itemPrice[i]}</td>` +
//   `<td><input type="number" name="quantity" id="qty" value="${itemQuantity[i]}"><input type="image" src="imgAssets/orderImg/btnRemoveItem.png" alt="Remove Item" id="btnRemoveItem"></td>` +
//   `</tr>`;

// const tableHeadHTML =
//   "<table>" +
//   "<tr>" +
//   "<th id='item'>ITEM<hr id='item'></th>" +
//   "<th id='price'>PRICE<hr id='price'></th>" +
//   "<th id='quantity'>QUANTITY<hr id='quantity'></th>" +
//   "</tr>";

// const endTableHTML =
//   "<tr id='total'>" +
//   "<td colspan='2'></td>" +
//   `<td><hr id='total'>TOTAL <span id='totalPrice'>$${orderTotal}</span></td>` +
//   "</tr>" +
//   "<tr id='checkOut'>" +
//   "<td colspan='2'></td>" +
//   "<td id='checkOut'><input type='image' src='imgAssets/orderImg/btnCheckOutNow.png' alt='Check Out' id='btnCheckOut'></td>" +
//   "</tr>" +
//   "</table>";
