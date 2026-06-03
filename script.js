let grid = document.querySelector("div");

for(let i=0; i<16; i++) {
    const column = document.createElement("div");
    column.className = "column";
    for(let j=0; j<16; j++) {
        const square = document.createElement("div");
        square.className = "square";
        //square.textContent = "ciao";
        column.appendChild(square);
    }

    grid.appendChild(column);
};

const squares = document.querySelectorAll('.square');

Array.from(squares).forEach((el) => {
    el.addEventListener('mouseenter', (event) => {
        el.style.backgroundColor = "red";
    });
});

const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    let num = prompt("Please enter a number to decide the pixel size");
    if (num>100) {
        num = prompt("Please enter a number under 100");
    };
    
    //grid.remove();
    let grid = document.querySelector("div");

    let newGrid = document.createElement("div");
    newGrid.className = "grid";
    document.body.appendChild(newGrid);

    for(let i=0; i<num; i++) {
        const column = document.createElement("div");
        column.className = "column";
        for(let j=0; j<num; j++) {
            const square = document.createElement("div");
            square.className = "square";
            //square.textContent = "ciao";
            column.appendChild(square);
        }

        newGrid.appendChild(column);
    };
    grid.replaceWith(newGrid);

    const squares = document.querySelectorAll('.square');

    Array.from(squares).forEach((el) => {
        el.addEventListener('mouseenter', (event) => {
            el.style.backgroundColor = "red";
        });
    }); 
});

