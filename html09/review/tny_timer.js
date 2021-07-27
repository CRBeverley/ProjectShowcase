"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Christopher Beverley
   Date:   17JUL2021

*/
showClock();
setInterval("showClock()", 1000);

function showClock() {
  let thisDay = new Date();
  // let thisDay = new Date("May 19, 2018 09:31:27");
  let localDate = thisDay.toLocaleDateString();
  let localTime = thisDay.toLocaleTimeString();

  document.getElementById("currentTime").innerHTML =
    "<span>" + localDate + "</span>" + "<span>" + localTime + "</span>";

  let j4Date = nextJuly4(thisDay);
  j4Date.setHours(21, 0, 0);

  //* --------------Time left until next 4th of July
  //!----------1000 milliseconds * 60 secs * 60 mins * 24 hours = total milisecs in a day

  let days = (j4Date - thisDay) / (1000 * 60 * 60 * 24);
  let hours = (days - Math.floor(days)) * 24;
  let mins = (hours - Math.floor(hours)) * 60;
  let secs = (mins - Math.floor(mins)) * 60;
  document.getElementById("dLeft").textContent = Math.floor(days);
  document.getElementById("hLeft").textContent = Math.floor(hours);
  document.getElementById("mLeft").textContent = Math.floor(mins);
  document.getElementById("sLeft").textContent = Math.floor(secs);
}

function nextJuly4(currentDate) {
  var cYear = currentDate.getFullYear();
  var jDate = new Date("July 4, 2018");
  jDate.setFullYear(cYear);
  if (jDate - currentDate < 0) jDate.setFullYear(cYear + 1);
  return jDate;
}
