const container = document.querySelector("#container");
const btn = document.querySelector("#resize-btn");

function createGrid(cellNb) {
    container.innerHTML = "";
    const cellSize = 640 / cellNb;

    for (let i = 0; i < cellNb * cellNb; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`
        cell.style.height = `${cellSize}px`;
        container.appendChild(cell);
    }

    const cell = document.querySelectorAll(".cell");

    cell.forEach((item) => {
        item.addEventListener("mouseover", function(e) {
            e.target.style.background = "blue";
        })
    });
};

createGrid(16);

btn.addEventListener("click", () => {
    let size = prompt("Please enter a number between 1 and 100");
    size = parseInt(size);

    if (size && size > 0 && size < 100) {
        createGrid(size);
    } else {
        alert("Please enter a valid number between 1 and 100");
    };
});



