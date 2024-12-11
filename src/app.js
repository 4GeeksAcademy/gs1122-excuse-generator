/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  let expt1 = Math.floor(Math.random() * 3);
  let expt2 = Math.floor(Math.random() * 4);
  let expt3 = Math.floor(Math.random() * 5);

  document.querySelector("#excuse").innerHTML =
    who[expt1] + " " + action[expt2] + " " + what[expt1] + " " + when[expt3];
};
