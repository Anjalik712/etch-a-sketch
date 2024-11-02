const div = document.querySelector(".container");
function drawGrid(size) {
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
  let boxes = document.querySelectorAll(".boxColumn");
  boxes.forEach((element) => {
    element.addEventListener("mouseenter", changeBackground);
  });
}
function generateRandomColor() {
  let color = Math.random() * 256;
  return color;
}

function changeBackground() {
  this.style.background = `rgb(${generateRandomColor()},${generateRandomColor()},${generateRandomColor()})`;
}

drawGrid(16);
let button = document.createElement("button");
button.classList.add("sizebutton");
button.textContent = "Enter size";
button.addEventListener("click", () => {
  let givenSize = prompt("Enter size of your grid: ");
  if (givenSize > 100) {
    alert("Enter a size less than 100!");
  } else {
    drawGrid(givenSize);
  }
});
div.appendChild(button);
