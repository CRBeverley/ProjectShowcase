let image = document.getElementById("iconViewCart");

//Total Quantity from storage to handle deleting items
totalQuantity = 0;
itemQuantity = JSON.parse(sessionStorage["itemQuantity"]);
for (let i = 0; i < itemQuantity.length; i++) {
  totalQuantity = totalQuantity + itemQuantity[i];
}
sessionStorage.setItem("totalQuantity", totalQuantity);

function cartIconChange() {
  if (totalQuantity >= 1 && totalQuantity <= 9) {
    document.querySelector(
      "#viewCart"
    ).innerHTML = `<img src="imgAssets/cartIcons/cart${totalQuantity}.png" alt="View Cart">`;
  } else if (totalQuantity >= 10) {
    document.querySelector(
      "#viewCart"
    ).innerHTML = `<img src="imgAssets/cartIcons/cart10.png" alt="View Cart">`;
  }
}
cartIconChange();
