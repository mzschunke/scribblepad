const app = document.querySelector('[data-js="app"]');

app.style.height = "100vh";
app.style.display = "flex";
app.style.alignItems = "center";

const gridContainer = document.createElement("div");
gridContainer.style.border = "2px solid black";
gridContainer.style.width = "50%";
gridContainer.style.height = "50%";

const inputContainer = document.createElement("div");

const inputField = document.createElement("input");

const colorPicker = document.createElement("input");

const resetButton = document.createElement("button");

inputContainer.append(inputField, colorPicker, resetButton);

app.append(gridContainer, inputContainer);

let color = "#000";

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

Grid(3, Cell);
