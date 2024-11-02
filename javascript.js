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
function drawGrid(size = 16) {
  const div = document.querySelector(".container");
  div.innerHTML = "";
  for (let i = 0; i < size; i++) {
    let boxRow = document.createElement("div");
    boxRow.classList.add("boxRow");
    boxRow.style.width = `${400 / size}px`;
    boxRow.style.height = `${400 / size}px`;
    for (let j = 0; j < size; j++) {
      let boxColumn = document.createElement("div");
      boxColumn.classList.add("boxColumn");
      boxColumn.style.width = `${400 / size}px`;
      boxColumn.style.height = `${400 / size}px`;
      boxRow.appendChild(boxColumn);
    }
    div.appendChild(boxRow);
  }
  let boxes = document.querySelectorAll(".boxColumn");
  boxes.forEach((element) => {
    element.addEventListener("mouseenter", changeBackground);
  });
}

function resetBackground(){
  let boxes = document.querySelectorAll(".boxColumn");
  boxes.forEach((element)=>{
    element.style.background="rgb(246, 229, 246)";
  })
}

drawGrid();
const button = document.querySelector("#sizeButton");
button.addEventListener("click", () => {
  let givenSize = prompt("Enter size of your grid: ");
  if (+givenSize > 100) {
    alert("Enter a size less than 100!");
  } else if(givenSize===""){
    alert("Invalid input");
  }
  else {
    drawGrid(+givenSize);
  }
});

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click",resetBackground);

