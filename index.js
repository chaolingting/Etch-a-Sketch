const container = document.querySelector(".container");
const changeBtn = document.querySelector(".change")
const clearBtn = document.querySelector(".clear")
//const colorPicker = document.getElementById("colorpicker")
const randomColor = document.querySelector(".random-color")


let grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);


let currentColor = "black";

//clear drawing
clearBtn.addEventListener("click", function(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
})



//current size
let squarePerSide = 16

for(let i = 0; i < squarePerSide * squarePerSide; i ++){
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.flex = `0 0 calc(100% / ${squarePerSide})`;
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = currentColor;
    })
    grid.appendChild(cell)

}


//change size prompt
changeBtn.addEventListener("click", 
    function changeGrid(){
    const squarePerSide = prompt("Change cell size of the grid");
    if (squarePerSide){
    grid.style.width = `${squarePerSide}px`
    }
    
});


//colorPicker.addEventListener("input", ()=>{
//    currentColor = colorPicker.value;
//})




