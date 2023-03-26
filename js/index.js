const app = document.querySelector('[data-js="app"]');

let color = "#000";
let text = "";

app.style.height = "100vh";
app.style.display = "flex";
app.style.alignItems = "center";
app.style.flexDirection = "column";
app.style.backgroundColor = "lightblue";
app.style.gap = "30px";
app.style.padding = "20px";

const gridContainer = document.createElement("div");
gridContainer.style.border = "2px solid black";
gridContainer.style.width = "50%";
gridContainer.style.height = "50%";
gridContainer.style.background = "white";

const inputContainer = document.createElement("div");
inputContainer.style.display = "flex";
inputContainer.style.flexDirection = "column";
inputContainer.style.alignItems = "center";
inputContainer.style.textAlign = "center";
inputContainer.style.gap = "15px";
inputContainer.style.border = "0px solid black";
inputContainer.style.width = "70%";
inputContainer.style.padding = "20px";
inputContainer.style.background = "white";
inputContainer.style.borderRadius = "10px";

const title = document.createTextNode("Hi friends, ");
title.type = "text";

const infoText = document.createTextNode(
  "enter any number in the first field. If you want, change the color via the color field. Now move the mouse over the upper field and see what happens :)"
);
infoText.type = "text";

const inputField = document.createElement("input");
inputField.type = "number";
inputField.addEventListener("change", () => {
  resetGrid(Grid);
});

const colorPicker = document.createElement("input");
colorPicker.type = "color";

colorPicker.addEventListener("input", (event) => {
  color = event.target.value;
});
const randomColorCheck = document.createElement("input");
randomColorCheck.type = "checkbox";
randomColorCheck.id = "checkRandomColor";

const labelColorCheck = document.createElement("label");
labelColorCheck.htmlFor = "checkRandomColor";
labelColorCheck.textContent = "Check for random color";

const resetText = document.createTextNode("To reset just click here:");
resetText.type = "text";

const resetButton = document.createElement("button");
resetButton.type = "button";
resetButton.textContent = "Reset Grid";
resetButton.addEventListener("click", (event) => {
  resetGrid(Grid);
});

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
  //  randomColor();
  return myCell;
}
function Grid(value, callback) {
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;

  for (let currywurst = 0; currywurst < value ** 2; currywurst++) {
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
  return "#" + (myNum + 100).toString();
}
