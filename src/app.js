/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#mi-excusa").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let su = ["Mi perro", "Mi gato", "Tu abuela", "Tu madre"];
  let ver = ["se comió", "abrió", "molestó", "se tomó"];
  let obj = ["mi tarea", "tu cuenta", "tu café", "su flor"];
  let com = ["en la calle", "en la clase", "en el auto"];

  let suInd = Math.floor(Math.random() * su.length);
  let verInd = Math.floor(Math.random() * ver.length);
  let objInd = Math.floor(Math.random() * obj.length);
  let comInd = Math.floor(Math.random() * com.length);

  return su[suInd] + " " + ver[verInd] + " " + obj[objInd] + " " + com[comInd];
};
