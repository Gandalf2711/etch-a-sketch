const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");
const resetBtn = document.querySelector("#reset-btn");

function randomColor () {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    return "rgba(" + r + ", " + g + ", " + b + ")";
};

function createGrid(cellNb) {
    container.innerHTML = "";
    const cellSize = 640 / cellNb;

    for (let i = 0; i < cellNb * cellNb; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        container.appendChild(cell);
    }

    const cell = document.querySelectorAll(".cell");

    cell.forEach((item) => {
        item.addEventListener("mouseover", function(e) {
            e.target.style.background = randomColor();
        })
    });

    resetBtn.addEventListener("click", ()=> {
        cell.forEach((item) => {
            item.style.background = "#e6e4d8";
        });
    });
};

createGrid(16);

resizeBtn.addEventListener("click", () => {
    let size = prompt("Please enter a number between 1 and 100");
    size = parseInt(size);

    if (size && size > 0 && size < 100) {
        createGrid(size);
    } else {
        alert("Please enter a valid number between 1 and 100");
    };
});




