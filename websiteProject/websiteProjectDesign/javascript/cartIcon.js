let image = document.getElementById("iconViewCart");
// totalQuantity = sessionStorage.getItem("totalQuantity");

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
