"use strict";

// let displaySetting = document.querySelector(".createAccount").style.display;
// displaySetting = "flex";

document
  .querySelector("#createAccountLink")
  .addEventListener("click", function () {
    setTimeout(() => {
      document.querySelector(".login").style.display = "none";
    }, 200);
    document.querySelector(".createAccount").style.display = "block";
  });

document.querySelector("#backToSignIn").addEventListener("click", function () {
  setTimeout(() => {
    document.querySelector(".createAccount").style.display = "none";
  }, 200);
  document.querySelector(".login").style.display = "block";
});
