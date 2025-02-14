const container = document.querySelector("#container");
const btn = document.querySelector("button");

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
};

function deleteChild() {
    let child = container.lastElementChild;
    while(child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
};

btn.addEventListener("click", () => {
    let valid = false;
    let size = prompt("Please enter a number between 1 and 100");

    while (!valid) {
        if (size < 0 || size > 100 || size == "" || isNaN(size)) {
            size = prompt("Incorrect value! Please enter a number between 1 and 100");
        } else {
            valid = true;
        }
    };

    deleteChild();
    createGrid(size);

    const cell = document.querySelectorAll(".cell");

    cell.forEach((item) => {
        item.addEventListener("mouseover", function(e) {
            e.target.style.background = "blue";
        })
    });
});





