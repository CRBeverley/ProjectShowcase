"use strict";

for (let i = 1; i <= 10; i++) {
  document.querySelector(`#item${i}`).addEventListener("click", function () {
    itemQuantity[i - 1] = itemQuantity[i - 1] + 1;
    totalQuantity = totalQuantity + 1;
    cartIconChange();
    sessionStorage["itemQuantity"] = JSON.stringify(itemQuantity);
    // sessionStorage.setItem("totalQuantity", totalQuantity);
    // localStorage["itemQuantity"] = JSON.stringify(itemQuantity);
    //
    //!LOG FOR TESTING PURPOSES REMOVE TODO
    console.log(itemQuantity);
  });
}
