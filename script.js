const container = document.querySelector("#container");

for (let i = 0; i < 64; i++) { 
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = "cell text";
    container.appendChild(cell); 
    }