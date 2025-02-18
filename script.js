const container = document.querySelector("#container");
let color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
let blue = "#0D98BA";
let white = "#FFFFFF";
let mouseDown = false;
//let opasiteetti = 0.1;

document.body.addEventListener("mousedown", () => {
    mouseDown = true;
});

document.body.addEventListener("mouseup", () => {
    mouseDown = false;
});

for (let i = 0; i < 256; i++) { 
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.border = "1px solid rgba(0, 0, 0, 1)";
    cell.dataset.opacity = 0.1;
    container.appendChild(cell);
    cell.addEventListener("mouseover", () => {
        if (mouseDown) {
           // cell.style.backgroundColor = blue;
            let currentOpacity = parseFloat(cell.dataset.opacity);
            currentOpacity += 0.1;
           cell.style.backgroundColor = `rgba(13, 152, 186, ${currentOpacity})`;
            cell.style.opacity = 1;
            //cell.style.opacity = currentOpacity;

            cell.dataset.opacity = currentOpacity;
           // cell.style.background = color[(Math.floor(Math.random() * color.length))];
        }
    });

 
    cell.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
    cell.addEventListener("dragend", (event) => {
      event.preventDefault(); mouseDown = false;
    });

}

const clearAllButton = document.querySelector(".clearAllButton");
const allCells = document.querySelectorAll(".cell");

clearAllButton.addEventListener("click", () => {
allCells.forEach(cell => {
    cell.style.background = white;
    cell.style.opacity = 1;
    opacity = 0.1;
    cell.dataset.opacity = 0.1;
});
});
