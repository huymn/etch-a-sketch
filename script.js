const CONTAINER_SIZE = 600;

const containerDiv = document.querySelector(".container");

const newGridButton = document.querySelector(".new-grid-btn");

newGridButton.addEventListener("click", () => {
  // Remove previous grid
  containerDiv.replaceChildren();

  const gridLength = Number.parseInt(
    prompt("Enter grid size. Maximum size is 100")
  );

  if (gridLength > 100 || gridLength < 1) {
    alert("Invalid grid size. Must be between 1 and 100");
  } else {
    const squareSize = CONTAINER_SIZE / gridLength;

    // Draw the grid
    for (let i = 0; i < gridLength; i++) {
      const newRow = document.createElement("div");
      newRow.classList.add("row");
      for (let j = 0; j < gridLength; j++) {
        const newSquare = document.createElement("div");
        newSquare.style.width = `${squareSize}px`;
        newSquare.style.height = `${squareSize}px`;
        newRow.appendChild(newSquare);
      }

      containerDiv.appendChild(newRow);

      const squares = document.querySelectorAll(".row div");

      squares.forEach((square) => {
        square.get;
        square.addEventListener("mouseover", (e) => {
          const randomRValue = Math.floor(Math.random() * 256);
          const randomGValue = Math.floor(Math.random() * 256);
          const randomBValue = Math.floor(Math.random() * 256);

          square.style.backgroundColor = `rgb(${randomRValue}, ${randomGValue}, ${randomBValue})`;
        });
      });
    }
  }
});
