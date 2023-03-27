const app = document.querySelector('[data-js="app"]');

let color = "#000";
let text = "";

const gridContainer = document.createElement("div");
gridContainer.setAttribute("data-js", "gridContainer")

const inputContainer = document.createElement("div");
inputContainer.setAttribute("data-js", "inputContainer")

const title = document.createTextNode("Hi friends, ");
title.type = "text";

const infoText = document.createTextNode(
  "enter any number in the first field. If you want, change the color via the color field. Now move the mouse over the upper field and see what happens :)"
);
infoText.type = "text";

const inputField = document.createElement("input");
inputField.type = "number";
inputField.defaultValue = 10;
inputField.min = 6;
inputField.max = 64;
inputField.addEventListener("change", () => resetGrid(Grid));

const colorPicker = document.createElement("input");
colorPicker.type = "color";

colorPicker.addEventListener("input", (event) => {
  color = event.target.value;
});
const randomColorCheck = document.createElement("input");
randomColorCheck.type = "checkbox";
randomColorCheck.id = "checkRandomColor";
randomColorCheck.setAttribute("data-js", "checkRandomColor");

const labelColorCheck = document.createElement("label");
labelColorCheck.htmlFor = "checkRandomColor";
labelColorCheck.textContent = "Check for random color";

const resetText = document.createTextNode("To reset just click here:");
resetText.type = "text";

const resetButton = document.createElement("button");
resetButton.type = "button";
resetButton.textContent = "Reset Grid";
resetButton.addEventListener("click", () => resetGrid(Grid));

inputContainer.append(
  title,
  infoText,
  inputField,
  colorPicker,
  labelColorCheck,
  randomColorCheck,
  resetText,
  resetButton
);

app.append(gridContainer, inputContainer);

function Cell() {
  const myCell = document.createElement("div");
  myCell.setAttribute("data-js", "mycell");
  myCell.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = randomColor();
  });
  return myCell;
}
function Grid(value, callback) {
  gridContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

  for (let i = 0; i < value ** 2; i+=1) {
    const newCell = callback();
    gridContainer.append(newCell);
  }
}

function resetGrid(callback) {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  callback(inputField.value, Cell);
}

function randomColor() {
  const myNum = Math.round(Math.random() * (1000 - 100));
  const myCheck = document.querySelector(
    `[data-js="checkRandomColor"]`
  ).checked;
  //  console.log(myCheck);
  return myCheck ? "#" + (myNum + 100).toString() : color;
}

Grid(inputField.value, Cell)