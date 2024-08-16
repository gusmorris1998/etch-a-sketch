const cols = []
const container = document.querySelector("#container");

for (i=0; i<4; i++) {
    var col = document.createElement("div")
    col.setAttribute("class", "col")

    for (j=0; j<4; j++) {
        var square = document.createElement("div")
        square.setAttribute("class", "square")
        col.appendChild(square)
    }

    cols.push(col)
}

cols.forEach((col) => container.appendChild(col));

var squares = document.querySelectorAll(".square");
const changeColour = (e) => e.target.classList.add("hover")

squares.forEach((square) => square.addEventListener("mouseover", (e) => changeColour(e)))

