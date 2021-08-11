"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

    Author: Christopher Beverley
    Date:   09 AUG 2021
   
   Filename: tc_cart.js
	
*/
let orderTotal = 0;
let cartHTML =
  "<table>" +
  "<tr>" +
  "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>" +
  "</tr>";

for (let i = 0; i < item.length; i++) {
  cartHTML +=
    `<tr>` +
    `<td><img src='tc_${item[i]}.png' alt='${item[i]}' /></td>` +
    `<td>$${itemDescription[i]}</td>` +
    `<td>$${itemPrice[i]}</td>` +
    `<td>${itemQty[i]}</td>`;
  let itemCost = itemPrice[i] * itemQty[i];
  cartHTML += `<td>$${itemCost}</td></tr>`;
  orderTotal = orderTotal + itemCost;
}
cartHTML +=
  `<tr>` +
  `<td colspan ='4'>Subtotal</td>` +
  `<td>$${orderTotal}</td>` +
  `</tr></table>`;
document.querySelector("#cart").innerHTML = cartHTML;
