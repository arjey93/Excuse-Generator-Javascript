/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let greetings = ["ciao", "salut"];
  document.querySelector("#greeting").innerHTML =
    greetings[Math.floor(Math.random() * 4)];
};
