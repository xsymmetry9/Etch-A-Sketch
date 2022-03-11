const container = document.querySelector('#container');

function createGrid(total){
    
    for(let row = 0; row<=total-1; row++){
        for (let col = 0; col<= total - 1; col++){
            let getSquare = document.createElement('grid');
            //getSquare.classList.add('grid');
            container.append(getSquare);
            };    
    };
    container.style.cssText = "grid-template-columns: repeat("+total+", 1fr);"
};
//const grid = container.querySelectorAll("grid");
function clearGrid(){
    let grid = container.querySelectorAll("grid");
    for(var i = 0; i< grid.length; i++){
        grid[i].remove();
    }
    //return grid.length;
}

function getValue(){
    let person = prompt("Please enter a number", "16");
    console.log(person);
}
function RandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return ("rgb(" + r + "," + g + "," + b + ")");

}

const btnStart = document.querySelector('#start');
btnStart.addEventListener('click',()=>
    {
      
        clearGrid();
        
        createGrid(prompt("Please enter a number", "16"));

        container.addEventListener("mouseover",function(e){
            e.target.style.background = RandomColor();
        })
    });

const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', ()=>{
    clearGrid();
})
