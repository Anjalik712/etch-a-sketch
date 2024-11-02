// Generate random color
function generateRandomColor() {
  let rcolor = Math.round(Math.random() * 256);
  let gcolor = Math.round(Math.random() * 256);
  let bcolor = Math.round(Math.random() * 256);
  return `rgb(${rcolor},${gcolor},${bcolor})`;
}

function changeBackground() {
  this.style.background = generateRandomColor();
}

//To draw grid
function drawGrid(size=16) {
  const div = document.querySelector(".container");
  div.innerHTML="";
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


drawGrid();
const button=document.querySelector("#sizeButton");
button.addEventListener("click", () => {
  
  let givenSize = prompt("Enter size of your grid: ");
  if (givenSize > 100) {
    alert("Enter a size less than 100!");
  } else {
    drawGrid(givenSize);
  }
});

