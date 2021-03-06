"use strict";

const tableHeadHTML =
  "<table>" +
  "<tr>" +
  "<th id='item'>ITEM<hr id='item'></th>" +
  "<th id='price'>PRICE<hr id='price'></th>" +
  "<th id='quantity'>QUANTITY<hr id='quantity'></th>" +
  "</tr>";

let tableHTML = tableHeadHTML;
let orderTotal = 0;

loadCartItemHTML();

//shopping cart function to load html for items
function loadCartItemHTML() {
  //! START FUNCTION HERE---------------------------------------------------
  for (let i = 0; i < itemName.length; i++) {
    if (itemQuantity[i] > 0) {
      document.querySelector(".cartEmpty").style.display = "none";
      document.querySelector(".orderTable").style.display = "block";
      orderTotal = orderTotal + itemPrice[i];

      let itemHTML =
        `<tr>` +
        `<td id="row1"><img src="imgAssets/orderImg/${itemPicture[i]}" alt="${itemName[i]}"><span>${itemName[i]}</span></td>` +
        `<td id="row2">$${itemPrice[i]}</td>` +
        `<td id="row3"><input type="number" name="quantity" id="qty" value="${itemQuantity[i]}"><input type="image" src="imgAssets/orderImg/btnRemoveItem.png" alt="Remove Item" class='btnRemoveItem' id="btnRemoveItem${itemNumber[i]}"></td>` +
        `</tr>`;
      tableHTML += itemHTML;
    }
  }
  const endTableHTML =
    "<tr id='total'>" +
    "<td colspan='2'></td>" +
    `<td><hr id='total'>TOTAL <span id='totalPrice'>$${orderTotal}</span></td>` +
    "</tr>" +
    "<tr id='checkOut'>" +
    "<td colspan='2'></td>" +
    `<td id='checkOut'><input type='image' src='imgAssets/orderImg/btnCheckOutNow.png' alt='Check Out'  id='btnCheckOut'></td>` +
    "</tr>" +
    "</table>";
  tableHTML += endTableHTML;
  document.querySelector(".orderTable").innerHTML = tableHTML;
}

//REMOVE ITEM
for (let i = 0; i < itemNumber.length; i++) {
  if (document.querySelector(`#btnRemoveItem${itemNumber[i]}`) !== null) {
    document
      .querySelector(`#btnRemoveItem${itemNumber[i]}`)
      .addEventListener("click", function () {
        itemQuantity[itemNumber[i] - 1] = 0;
        sessionStorage["itemQuantity"] = JSON.stringify(itemQuantity);

        location.reload();
      });
  }
}
