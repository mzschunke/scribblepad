const app = document.querySelector('[data-js="app"]');

app.style.height = "100vh";
app.style.display = "flex";
app.style.alignItems = "center";

const gridContainer = document.createElement("div");
gridContainer.style.border = "2px solid black";
gridContainer.style.width = "50%";
gridContainer.style.height = "50%";
app.append(gridContainer);

