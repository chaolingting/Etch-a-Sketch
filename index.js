const container = document.querySelector(".container");
let gridDiv = document.createElement("div");
gridDiv.classList.add("grid");
container.appendChild(gridDiv);

gridDiv.style.width = "500px"

//3 buttons
const changeBtn = document.querySelector(".change")
const clearBtn = document.querySelector(".clear")
const colorBtn = document.querySelector(".random-color")




let cell = 16;
changeGrid(cell);

function changeGrid(cell){
        for(let i = 0; i < cell * cell; i ++){
                let cellDiv = document.createElement("div");
                cellDiv.classList.add("cell");
                gridDiv.appendChild(cellDiv);
                
                cellDiv.style.flex = `0 0 calc(100% / ${cell})`
                cellDiv.style.aspectRatio = "1/1"
                cellDiv.style.backgroundColor = "white"
                
               
                cellDiv.addEventListener("mouseenter",() => {
                    cellDiv.style.backgroundColor = "black";

                })

                clearBtn.addEventListener("click", () => {
                cellDiv.style.backgroundColor = "white";
                })

                colorBtn.addEventListener("click", () => {
                    cellDiv.addEventListener("mouseenter", () =>{
                        cellDiv.style.backgroundColor = randomColor(colors);
                        })
                })

                
        }
}


changeBtn.addEventListener("click", ()=>{
        let newGrid = prompt("change grid? please enter a number, max 100")
        newGrid = parseInt(newGrid)

        if (!isNaN(newGrid) && newGrid > 0) {
            cell = newGrid;
            gridDiv.replaceChildren();
            changeGrid(cell)
        } else {
            alert("please enter numbers")
        }
    })


const colors = [
    "red", 
    "pink",  
    "orange", 
    "yellow", 
    "green", 
    "blue", 
    "purple",
     "slategray",
     "olivegreen",
     "white",
     "salmon",
     "skyblue",
     "brown",
     "hotpink",
     "yellowgreen",
     "magenta",
     "silver",
     "silvergray",
     "coral",
     "lightblue",
     "rebeccapurple",
     "royalblue",
     "olive",
     "palegreen",
     "palegoldenrod",
     "aqua",
     "gainsboro"


]

function randomColor(colors){
    let index = Math.floor(Math.random() * colors.length)
    return colors[index];

}


