const app = document.querySelector('[data-js="app"]');

app.style.height = "100vh";
app.style.display = "flex";
app.style.alignItems = "center";

const gridContainer = document.createElement("div");
gridContainer.style.border = "2px solid black";
gridContainer.style.width = "50%";
gridContainer.style.height = "50%";
app.append(gridContainer);

let color = "#000";



function Cell() {
    const myCell = document.createElement("div");
    myCell.setAttribute("data-js", "mycell");
    myCell.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = color; 
    }) 
    return myCell;
}

for (let currywurst = 0; currywurst<value**2; currywurst++){
    const newCell = Cell();
    gridContainer.append(newCell);
}

