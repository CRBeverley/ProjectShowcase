"use strict";

let itemQuantity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//! ITEM BELOW CAUSING ERROR WHEN NO ITEMS IN CART BUT STILL FUNCTIONS
itemQuantity = JSON.parse(sessionStorage["itemQuantity"]);

//Would have been easier with objects instead
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
