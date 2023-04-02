import React from "react";
import "./App.css";
import Board from "./Board";

function App() {
  const initialConfiguration = [
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 0,
  ];

  const onSolveCallback = () => {
    console.log("Puzzle solved!");
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
