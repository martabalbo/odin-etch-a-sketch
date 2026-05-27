const grid = document.querySelector("div");

for(let i=0; i<16; i++) {
    const square = document.createElement("div");
    square.className = "square";

    grid.appendChild(square);
};