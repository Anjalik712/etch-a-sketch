const div = document.querySelector(".container");
let size = 16;
function drawGrid(size = 16) {
  for (let i = 0; i < size; i++) {
    let boxRow = document.createElement("div");
    boxRow.classList.add("boxRow");
    for (let j = 0; j < size; j++) {
      let boxColumn = document.createElement("div");
      boxColumn.classList.add("boxColumn");
      boxRow.appendChild(boxColumn);
    }
    div.appendChild(boxRow);
  }
}
drawGrid(size);
