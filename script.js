var n = 4
const button = document.querySelector("button")
const body = document.querySelector("body");
const container = document.querySelector("#container");
run(n)

function run(n) {

    const cols = []

    for (i=0; i<n; i++) {
        var col = document.createElement("div")
        col.setAttribute("class", "col")
    
        for (j=0; j<n; j++) {
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
    
    const remove = (child) => container.removeChild(child)
    
    button.addEventListener("click", function() { 
        n = prompt()
        cols.forEach((col) => remove(col));
        run(n)
    })
}

