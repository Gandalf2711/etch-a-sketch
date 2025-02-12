const container = document.querySelector("#container");


function createGrid(columnNb) {
    for (let i = 0; i < columnNb; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < columnNb; j++) {
            let row = document.createElement("div");
            row.classList.add("cell");
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

createGrid(16);

const cell = document.querySelectorAll(".cell");

cell.forEach((item) => {
    item.addEventListener("mouseover", function(e) {
        e.target.style.background = "blue";
    })
});


