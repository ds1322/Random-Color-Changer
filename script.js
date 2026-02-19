let randomBtn = document.querySelector(".randomBtn");

let applyBtn = document.querySelector(".applyBtn");

let colorInput = document.querySelector("#colorInput");

let currentColorValue = document.querySelector(".currentColorValue");

let container = document.querySelector(".container");

const colorArray = [
  "red",
  "green",
  "blue",
  "yellow",
  "lightseagreen",
  "aqua",
  "crimson",
  "tomato",
  "#2f2f2f",
  "orange",
  "grey",
  "pink",
  "cyan",
  "lightcoral",
];

const generateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * colorArray.length);

  const randomColor = colorArray[randomNumber];
  changeColor(randomColor);
  currentColorValue.innerText = randomColor;
  
};

const changeColor = (color) => {
  container.style.backgroundColor = color;
};

const handleRandomBtnClick = () => {
  generateRandomColor();
};

const handleApplyBtnClick = () => {
  const color = colorInput.value;
  changeColor(color);
  currentColorValue.innerText = color;
};

randomBtn.addEventListener("click", handleRandomBtnClick);
applyBtn.addEventListener("click", handleApplyBtnClick);
