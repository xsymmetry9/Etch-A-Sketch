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

function clearGrid(){
    const grid = container.querySelectorAll("grid");
    for(var i = 0; i< grid.length; i++){
        grid[i].remove();
    }
    //return grid.length;
}


createGrid(6);