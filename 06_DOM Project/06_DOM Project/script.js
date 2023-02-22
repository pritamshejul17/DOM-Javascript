const toReplace = document.querySelector(".logo");
const newOne = document.createElement("img");
newOne.src = "./assets/ineuron-logo.png";
newOne.className = "ineuron";
const node = document.querySelector("header");
node.replaceChild(newOne, toReplace);