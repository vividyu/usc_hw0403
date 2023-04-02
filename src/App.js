import React from "react";
import "./App.css";
import Board from "./Board";

function isSolvable(arr) {
  let inversions = 0;
  const tiles = arr.filter((tile) => tile !== 0);

  for (let i = 0; i < tiles.length - 1; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
      if (tiles[i] > tiles[j]) {
        inversions++;
      }
    }
  }

  const emptyRowFromBottom = 4 - Math.floor(arr.indexOf(0) / 4);

  return (inversions % 2 === 0) === (emptyRowFromBottom % 2 === 1);
}

function generateRandomArray() {
  const arr = Array.from({ length: 16 }, (_, i) => i);

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function generateSolvableArray() {
  let arr;

  do {
    arr = generateRandomArray();
  } while (!isSolvable(arr));

  return arr;
}

function App() {
  const initialConfiguration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 15];
  const randomArr = generateSolvableArray();

  const onSolveCallback = () => {
    alert("Puzzle solved!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>15-Puzzle</h1>
      </header>
      <Board initialConfiguration={initialConfiguration} onSolveCallback={onSolveCallback} />
    </div>
  );
}

export default App;
