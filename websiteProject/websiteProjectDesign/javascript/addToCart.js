"use strict";
//add event listener to handle click add to cart
//need to find the item number then increase quantity to 1
//mostly done from menu page

// const totalQuantityCheck = function (totalQuantity) {
//   if (totalQuantity === 0) {
//     totalQuantity = parseInt(sessionStorage.getItem("totalQuantity"));
//     if (totalQuantity > 0) {
//       return totalQuantity;
//     }
//   }
// };

// totalQuantityCheck();

for (let i = 1; i <= 12; i++) {
  document.querySelector(`#item${i}`).addEventListener("click", function () {
    itemQuantity[i - 1] = itemQuantity[i - 1] + 1;
    totalQuantity = totalQuantity + 1;
    cartIconChange();
    sessionStorage["itemQuantity"] = JSON.stringify(itemQuantity);
    // sessionStorage.setItem("totalQuantity", totalQuantity);
    // console.log(parseInt(sessionStorage.getItem("totalQuantity")));
    // localStorage["itemQuantity"] = JSON.stringify(itemQuantity);
    console.log(itemQuantity);
  });
}
