const app = document.querySelector('[data-js="app"]');

let color = "#000";

app.style.height = "100vh";
app.style.display = "flex";
app.style.alignItems = "center";

const gridContainer = document.createElement("div");
gridContainer.style.border = "2px solid black";
gridContainer.style.width = "50%";
gridContainer.style.height = "50%";

const inputContainer = document.createElement("div");

const inputField = document.createElement("input");
inputField.type = "number";
inputField.addEventListener("change", => {
    
})

const colorPicker = document.createElement("input");
colorPicker.type = "color";
colorPicker.addEventListener("input", (event) => {
  color = event.target.value;
});

const resetButton = document.createElement("button");
resetButton.type = "button";
resetButton.textContent = "Reset Grid";

inputContainer.append(inputField, colorPicker, resetButton);

app.append(gridContainer, inputContainer);

function Cell() {
  const myCell = document.createElement("div");
  myCell.setAttribute("data-js", "mycell");
  myCell.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = color;
  });
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
  callback(6, Cell);
}
