const container = document.querySelector('#container');
const btnReset = document.querySelector('#reset');

function createGrid(total){
    let gridNumber = total * total;
    for(let row = 0; row<=total-1; row++){
        for (let col = 0; col<= total - 1; col++){
            let getSquare = document.createElement('div');
            getSquare.classList.add('grid');
            container.append(getSquare);
            }    
    };
    
    container.style.cssText = `grid-template-columns: repeat(${total},1fr)`;

    let pixel = container.querySelectorAll(".grid");
    pixel.forEach(pixel => pixel.addEventListener('mouseover',function (e){
        e.target.style.background = RandomColor();
    }));
}
createGrid(16);
// ChangeBackground color to white
function clearGrid(){
    let grid = container.querySelectorAll(".grid");
    grid.forEach(grid => grid.style.backgroundColor = 'white');
}

//Ask user 
function getValue(){
    return prompt("Please enter a number", "16");
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
            return("black");
        }
        else if (button.id ==="RandomColor")
        {
            return ("randomColor");
        }
        else if (button.id === "reset")
        {
            return ("white");
        }
    });
});
/*btnStart.addEventListener('click',()=>
    {
      
        clearGrid();
        
        createGrid(getValue());

        container.addEventListener("mouseover",function(e){
            e.target.style.background = RandomColor();
        })
    });*/


btnReset.addEventListener('click', clearGrid);
