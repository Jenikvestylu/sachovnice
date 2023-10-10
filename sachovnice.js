function createChessboard() {
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);
    const chessboard = document.getElementById("chessboard");

    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Zadejte platná čísla, písmena a znaky neplatí.");
        return;
    }

    chessboard.innerHTML = ""; 
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            if ((i + j) % 2 === 0) {
                cell.classList.add("white"); 
            } else {
                cell.classList.add("black"); 
            }
            chessboard.appendChild(cell);
        }
    }

    
    const cellWidth = 50; 
    const cellHeight = 50;
    chessboard.style.gridTemplateColumns = `repeat(${columns}, ${cellWidth}px)`;
    chessboard.style.gridTemplateRows = `repeat(${rows}, ${cellHeight}px)`;
}

document.getElementById("generateBtn").addEventListener("click", createChessboard);
