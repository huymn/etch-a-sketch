const containerDiv = document.querySelector(".container");

// Draw the grid
for (let i = 0; i < 16; i++) {
  const newRow = document.createElement("div");
  newRow.classList.add("row");
  for (let j = 0; j < 16; j++) {
    const newSquare = document.createElement("div");
    newRow.appendChild(newSquare);
  }

  containerDiv.appendChild(newRow);
}
