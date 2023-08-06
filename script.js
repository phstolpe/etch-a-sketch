const container = document.querySelector(".container");
const btn = document.createElement("button");
let squares = 0;

btn.textContent = "New sketch";
btn.style.cssText = "margin-bottom: 25px";
btn.addEventListener("click", newGrid);
document.body.insertBefore(btn, container);

setupGrid(16);

function getSquares() {
  let squares = prompt("How many squares? Max 100.");
  if (squares>100){
    getSquares();
  }
  return parseInt(squares);
}

function removeGrid() {
  while (container.firstChild)
    container.removeChild(container.lastChild);
}

function fill(event){
  const color = Math.floor(Math.random() * 16777215).toString(16);
  event.target.style.backgroundColor = "#" + color;
}

function setupGrid(size){
  for (let i=0; i<size; i++){
    const column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
    column.addEventListener("mouseover", fill);
    for (let j=0; j<size; j++){
      const div = document.createElement("div");
      div.classList.add("grid-item");
      column.appendChild(div);
    }
  }
}

function newGrid () {
  removeGrid();
  setupGrid(getSquares());
}