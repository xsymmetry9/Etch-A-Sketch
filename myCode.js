const container = document.getElementById('container');
const btnReset = document.querySelector('#reset');
var color = RandomColor();
var gridValue = 16;

//Create grid
function createGrid(gridValue){
    container.style.gridTemplateColumns = `repeat(${gridValue},1fr)`;
    container.style.gridTemplateRows = `repeat(${gridValue},1fr)`;

    let gridNumber = gridValue * gridValue;
    for (let i = 1; i <=gridNumber; i++){
        let getSquare = document.createElement('div');
        getSquare.classList.add('grid');
        container.appendChild(getSquare);
    }

//Colors the pixel
let pixel = container.querySelectorAll(".grid");
pixel.forEach(pixel => pixel.addEventListener('mouseover',function (e){
    e.target.style.background = color;
}));
}
createGrid(10);

// ChangeBackground color to white
function clearGrid(){
    let grid = container.querySelectorAll(".grid");
    grid.forEach(grid => grid.style.backgroundColor = 'white');
}

//Get random Colors
function RandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return ("rgb(" + r + "," + g + "," + b + ")");

}
const btns = document.querySelectorAll('button');

function changeColor(e){

    if (e.target.id =="black")
    {
        return console.log("black");
    }

    else if(e.target.id =="RandomColor")
    {
        return console.log('random Color')
    }

    else if(e.target.id == "reset")
    {
        return console.log("reset");
    }
}
function getColor(){
    return changeColor(e);
}



//Buttons functionality
const blackbtn = document.getElementById('black');
blackbtn.addEventListener('click',changeColor);

const randomColorbtn = document.getElementById('RandomColor'); 
randomColorbtn.addEventListener('click', changeColor);

const resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click',changeColor);

/*btns.forEach((button) => {
    button.addEventListener('click',()=>{
        //alert(button.id);
        if (button.id === "black")
        {
            color = "black";
        }
        else if (button.id ==="RandomColor")
        {
            color = RandomColor();
        }
        else if (button.id === "reset")
        {
            clearGrid();
        }
    });
});*/

//btnReset.addEventListener('click', clearGrid);

//Create a slider that returns the total columns x gridx
const slider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
slider.oninput = function(){
    gridValue = (this.value);
    sizeValue.innerHTML = `${this.value} x ${this.value}`;
    createGrid(gridValue);
}
