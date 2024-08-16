const CONTAINER_SIZE = 650;

const containerDiv = document.querySelector(".container");

const gridLength = 16;

const heightAndWidthSize = CONTAINER_SIZE / gridLength;

// Draw the grid
for (let i = 0; i < gridLength; i++) {
  const newRow = document.createElement("div");
  newRow.classList.add("row");
  for (let j = 0; j < gridLength; j++) {
    const newSquare = document.createElement("div");
    newSquare.style.width = `${heightAndWidthSize}px`;
    newSquare.style.height = `${heightAndWidthSize}px`;
    newSquare.style.border = "1px solid black";
    newRow.appendChild(newSquare);
  }

  containerDiv.appendChild(newRow);
}

const squares = document.querySelectorAll(".row div");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.classList.add("highlight");
  });
});
