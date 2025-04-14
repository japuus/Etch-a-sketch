const container = document.querySelector("#container");
let color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
let white = "#FFFFFF";
let mouseDown = false;

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
            let currentOpacity = parseFloat(cell.dataset.opacity);
            currentOpacity += 0.1;
            cell.style.backgroundColor = `rgba(13, 152, 186, ${currentOpacity})`;
            cell.style.opacity = 1;
            cell.dataset.opacity = currentOpacity;
        }
    });

    cell.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
    cell.addEventListener("dragend", (event) => {
      event.preventDefault(); mouseDown = false;
    });
}

// Create 128 cells
const button128 = document.querySelector(".create128");
button128.addEventListener("click", () => {
    // Remove all child elements from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // Create new cells
    for (let i = 0; i < 128; i++) { 
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.border = "1px solid rgba(0, 0, 0, 1)";
        cell.dataset.opacity = 0.1;
        container.appendChild(cell);
        cell.addEventListener("mouseover", () => {
            if (mouseDown) {
                let currentOpacity = parseFloat(cell.dataset.opacity);
                currentOpacity += 0.1;
                cell.style.backgroundColor = `rgba(13, 152, 186, ${currentOpacity})`;
                cell.style.opacity = 1;
                cell.dataset.opacity = currentOpacity;
            }
        });
        cell.addEventListener("dragstart", (event) => {
            event.preventDefault();
        });
        cell.addEventListener("dragend", (event) => {
            event.preventDefault(); 
            mouseDown = false;
        });
    }
});

const button64 = document.querySelector(".create64");
button64.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < 64; i++) { 
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.border = "1px solid rgba(0, 0, 0, 1)";
        cell.dataset.opacity = 0.1;
        container.appendChild(cell);
        cell.addEventListener("mouseover", () => {
            if (mouseDown) {
                let currentOpacity = parseFloat(cell.dataset.opacity);
                currentOpacity += 0.1;
                cell.style.backgroundColor = `rgba(13, 152, 186, ${currentOpacity})`;
                cell.style.opacity = 1;
                cell.dataset.opacity = currentOpacity;
            }
        });
        cell.addEventListener("dragstart", (event) => {
            event.preventDefault();
        });
        cell.addEventListener("dragend", (event) => {
            event.preventDefault(); 
            mouseDown = false;
        });
    }
});

const button256 = document.querySelector(".create256");
button256.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < 256; i++) { 
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.border = "1px solid rgba(0, 0, 0, 1)";
        cell.dataset.opacity = 0.1;
        container.appendChild(cell);
        cell.addEventListener("mouseover", () => {
            if (mouseDown) {
                let currentOpacity = parseFloat(cell.dataset.opacity);
                currentOpacity += 0.1;
                cell.style.backgroundColor = `rgba(13, 152, 186, ${currentOpacity})`;
                cell.style.opacity = 1;
                cell.dataset.opacity = currentOpacity;
            }
        });
        cell.addEventListener("dragstart", (event) => {
            event.preventDefault();
        });
        cell.addEventListener("dragend", (event) => {
            event.preventDefault(); 
            mouseDown = false;
        });
    }
});

const clearAllButton = document.querySelector(".clearAllButton");
clearAllButton.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".cell");
    allCells.forEach(cell => {
    cell.style.background = white;
    cell.style.opacity = 1;
    opacity = 0.1;
    cell.dataset.opacity = 0.1;
});
});

const rainbowButton = document.querySelector(".rainbowButton");
rainbowButton.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".cell");
    allCells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.dataset.opacity = 0.1;
            if (mouseDown) {
                let currentOpacity = parseFloat(cell.dataset.opacity);
                currentOpacity += 0.1;
                cell.style.background = color[(Math.floor(Math.random() * color.length))];
                cell.style.opacity = 1;
                cell.dataset.opacity = currentOpacity;

                cell.addEventListener("dragstart", (event) => {
                    event.preventDefault();
                });
                cell.addEventListener("dragend", (event) => {
                    event.preventDefault(); 
                    mouseDown = false;
                });
            }
        });
    });
});

const regularMode = document.querySelector(".regularMode");
regularMode.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".cell");
    allCells.forEach(cell => {
        // Remove existing event listeners
        const cellClone = cell.cloneNode(true);
        cell.parentNode.replaceChild(cellClone, cell);

        cellClone.addEventListener("mouseover", () => {
            if (mouseDown) {
                let currentOpacity = parseFloat(cellClone.dataset.opacity) || 0.1;
                currentOpacity += 0.1;
                cellClone.style.backgroundColor = `rgba(13, 152, 186, ${currentOpacity})`;
                cellClone.style.opacity = 1;
                cellClone.dataset.opacity = currentOpacity;

                cell.addEventListener("dragstart", (event) => {
                    event.preventDefault();
                });
                cell.addEventListener("dragend", (event) => {
                    event.preventDefault(); 
                    mouseDown = false;
                });
            }
        });
    });
});
