import React, { useState, useEffect } from "react";

function Board({ initialConfiguration, onSolveCallback }) {
  const [board, setBoard] = useState(initialConfiguration);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    if (!solved && isSolved(board)) {
      onSolveCallback();
      setSolved(true);
    }
  }, [board, onSolveCallback, solved]);

  function moveTile(index) {
    const emptyIndex = board.indexOf(0);
    const row = Math.floor(index / 4);
    const col = index % 4;
    const emptyRow = Math.floor(emptyIndex / 4);
    const emptyCol = emptyIndex % 4;

    if (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    ) {
      const newBoard = board.slice();
      newBoard[emptyIndex] = board[index];
      newBoard[index] = 0;
      setBoard(newBoard);
    }
  }

  function isSolved(board) {
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i] !== i + 1) return false;
    }
    return board[board.length - 1] === 0;
  }

  return (
    <div className="board">
      {board.map((tile, index) => (
        <div
          key={index}
          className={`tile${tile === 0 ? " empty" : ""}`}
          onClick={() => tile !== 0 && moveTile(index)}
        >
          {tile !== 0 ? tile : ""}
        </div>
      ))}
    </div>
  );
}

export default Board;
