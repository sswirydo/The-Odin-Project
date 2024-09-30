
import home from "./home";
import menu from "./menu";
import about from "./about";
import './main.css';


const content = document.querySelector("#content");
content.appendChild(menu());

/* Navigation bar listeners */
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

const tabButtons = ["#home", "#menu", "#about"];
const tabContent = [home, menu, about];
for (let i = 0; i < tabButtons.length; i++) {
  const btn = document.querySelector(tabButtons[i]);
  btn.addEventListener("click", () => {
    content.textContent = "";
    content.appendChild(tabContent[i]());
  });
};




