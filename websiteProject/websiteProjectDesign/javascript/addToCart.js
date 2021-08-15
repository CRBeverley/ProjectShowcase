"use strict";

let totalQuantity = 0;

if (sessionStorage.getItem("totalQuantity") !== null) {
  totalQuantity = parseInt(sessionStorage.getItem("totalQuantity"));
}

for (let i = 1; i <= 12; i++) {
  document.querySelector(`#item${i}`).addEventListener("click", function () {
    itemQuantity[i - 1] = itemQuantity[i - 1] + 1;
    totalQuantity = totalQuantity + 1;

    sessionStorage["itemQuantity"] = JSON.stringify(itemQuantity);
    sessionStorage.setItem("totalQuantity", totalQuantity);
    cartIconChange();
  });
}
