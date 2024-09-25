

// const container = document.querySelector(".main-ct");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "I like sushi";

// content.style.cssText += "background: aquamarine;";

// container.appendChild(content);

// const btn2 = document.querySelector("#btn2");
// btn2.onclick = () => alert("Hello World 2");

// const btn3 = document.querySelector("#btn3");
// btn3.addEventListener(
//   "click", () => {
//     alert("Hello 3");
// });


var COLOR_MODE = 1;
var CLICK_MODE = 0;

function colorCell(cell, mode) {

  if (mode != CLICK_MODE) return;

  if (COLOR_MODE == 1) {
    cell.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    cell.style.opacity = 1.0;
  }
    
  else if (COLOR_MODE == 2) {
    cell.style.backgroundColor = "black";
    cell.style.opacity -= 0.05;
    if (cell.style.opacity == 0.2)
      cell.style.opacity = 1.0;
  }
}


function createPaintGrid(size) {

  const gameSplit = document.querySelector(".game-split");
  const paintGridCleaner = document.querySelector(".paint");
  if (paintGridCleaner)
    gameSplit.removeChild(paintGridCleaner);
  const paintGrid = document.createElement("div");
  paintGrid.classList.add("paint");
  gameSplit.appendChild(paintGrid);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.cssText += "width: calc(100% * (1/"+size+"))";
      if ( (j + i) % 2 == 0)
        cell.style.cssText += "background: red;";
      else
        cell.style.cssText += "background: blue;";
      cell.style.cssText += "opacity: 0.25";
      cell.addEventListener("mouseover", function(e) {colorCell(cell, 0)});
      cell.addEventListener("click", function(e) {colorCell(cell, 1)});
      paintGrid.appendChild(cell);
    }
  } 
}


/* GRID SIZE */
const slider = document.querySelector(".grid-slider");
let currentValue = slider.getAttribute("value");
const sliderText = document.createElement("p");
sliderText.classList.add("grid-slider-text");
sliderText.textContent = "Grid size: " + currentValue;

slider.addEventListener("input", function() {
  sliderText.textContent = "Grid size: " + this.value;
  createPaintGrid(this.value);
});

const options = document.querySelector(".options");
options.appendChild(sliderText);


/* OPTIONS */
const btnColor = document.querySelector("#btn-colors");
const btnBlack = document.querySelector("#btn-black");
const btnSwitch = document.querySelector("#btn-click-hower");
const btnClear = document.querySelector("#btn-clear");

btnColor.addEventListener("click", () => {
 COLOR_MODE = 1;
})

btnBlack.addEventListener("click", () => {
  COLOR_MODE = 2;
})

btnSwitch.addEventListener("click", () => {
  CLICK_MODE = CLICK_MODE ? 0 : 1;
  console.log(CLICK_MODE)
})

btnClear.addEventListener("click", () => {
  createPaintGrid(slider.value);
})

/* PAINTING GRID */
createPaintGrid(slider.value);

