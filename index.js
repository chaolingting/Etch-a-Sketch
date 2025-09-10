const container = document.querySelector(".container");

const grid = document.createElement("div");
grid.classList.add("grid");
//grid.textContent = "hello world";

const totalCellBox = 16;
const totalCell = 16;

for (let i = 0; i < totalCellBox; i++) {

    const cellBox = document.createElement("div");
    cellBox.classList.add("cell-box")


    for (let j = 0; j < totalCell; j++ ){
    const cell = document.createElement("div")
    cell.classList.add("cell"); 
    cellBox.appendChild(cell);

}

grid.appendChild(cellBox) 

}

container.appendChild(grid)

