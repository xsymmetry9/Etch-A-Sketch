const container = document.getElementById('container');
const btnReset = document.querySelector('#reset');
const color = 'blue';

function createGrid(total,color){
    container.style.cssText = `grid-template-columns: repeat(${total},1fr)`;
    //Can't plot rows...
    container.style.cssText = `grid-template-rows: repeat(${total},1fr)`;

    let gridNumber = total * total;
    for (let i = 1; i <=gridNumber; i++){
        let getSquare = document.createElement('div');
        getSquare.classList.add('grid');
        container.appendChild(getSquare);
    }
    
    //Use button to choose the color
    let pixel = container.querySelectorAll(".grid");
    pixel.forEach(pixel => pixel.addEventListener('mouseover',function (e){
        e.target.style.background = color;
    }));
}
createGrid(10, color);
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
//Buttons functionality
const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click',()=>{
        //alert(button.id);
        if (button.id === "black")
        {
            color = ("black");
        }
        else if (button.id ==="RandomColor")
        {
            color = randomColor();
        }
        else if (button.id === "reset")
        {
            clearGrid();
        }
    });
});

//btnReset.addEventListener('click', clearGrid);

//Create a slider that returns the total columns x gridx
const slider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
slider.oninput = function(){
    createGrid(this.value);
}
