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

class PuzzleNode {
  constructor(state, parent, g, h) {
    this.state = state;
    this.parent = parent;
    this.g = g;
    this.h = h;
    this.f = g + h;
  }
}

function manhattanDistance(state) {
  let distance = 0;

  for (let i = 0; i < state.length; i++) {
    if (state[i] !== 0) {
      distance +=
        Math.abs(i % 4 - (state[i] - 1) % 4) + Math.abs(Math.floor(i / 4) - Math.floor((state[i] - 1) / 4));
    }
  }

  return distance;
}

function swap(state, i, j) {
  const newState = state.slice();
  [newState[i], newState[j]] = [newState[j], newState[i]];
  return newState;
}

function getNeighbors(state) {
  const neighbors = [];
  const moves = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const emptyIndex = state.indexOf(0);
  const emptyRow = Math.floor(emptyIndex / 4);
  const emptyCol = emptyIndex % 4;

  for (const [dx, dy] of moves) {
    const newRow = emptyRow + dx;
    const newCol = emptyCol + dy;
    if (newRow >= 0 && newRow < 4 && newCol >= 0 && newCol < 4) {
      const newIndex = newRow * 4 + newCol;
      neighbors.push(swap(state, emptyIndex, newIndex));
    }
  }

  return neighbors;
}

function solvePuzzle(initialState) {
  const goalState = Array.from({ length: 16 }, (_, i) => (i + 1) % 16);
  const openSet = [new PuzzleNode(initialState, null, 0, manhattanDistance(initialState))];
  const closedSet = new Set();

  while (openSet.length > 0) {
    openSet.sort((a, b) => a.f - b.f);
    const current = openSet.shift();
    closedSet.add(current.state.join(','));

    if (current.state.join(',') === goalState.join(',')) {
      const solution = [];
      let node = current;

      while (node) {
        solution.unshift(node.state);
        node = node.parent;
      }

      return solution;
    }

    for (const neighbor of getNeighbors(current.state)) {
      if (!closedSet.has(neighbor.join(','))) {
        const g = current.g + 1;
        const h = manhattanDistance(neighbor);
        openSet.push(new PuzzleNode(neighbor, current, g, h));
      }
    }
  }

  return null;
}

function App() {
  const initialConfiguration = generateSolvableArray();

  // const solution = solvePuzzle(initialConfiguration);
  // console.log(solution);

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
