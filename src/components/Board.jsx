import React, { useState, useEffect } from "react";
import Square from "./Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningSquares: [a, b, c] };
    }
  }
  return null;
}

const Board = ({ isXNext, squares, onPlay }) => {
  let status;
  let winningSquares = [];
  let winner = null;

  if (calculateWinner(squares)) {
    const { winner: win, winningSquares: winSquares } =
      calculateWinner(squares);
    winner = win;
    winningSquares = winSquares;
    console.log(calculateWinner(squares));
    console.log(win, " ", winSquares);

    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }


  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    if (isXNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";

    onPlay(nextSquares);
  }

  return (
    <>
      <div className="board lgShadow">
        <div className="status">
          <span>{status}</span>
        </div>

        <div className="board-matrix">
          <div className="board-row">
            <Square
              value={squares[0]}
              onSquareClick={() => handleClick(0)}
              highlight={winner && winningSquares.includes(0)}
            />
            <Square
              value={squares[1]}
              onSquareClick={() => handleClick(1)}
              highlight={winner && winningSquares.includes(1)}
            />
            <Square
              value={squares[2]}
              onSquareClick={() => handleClick(2)}
              highlight={calculateWinner(squares) && winningSquares.includes(2)}
            />
          </div>
          <div className="board-row">
            <Square
              value={squares[3]}
              onSquareClick={() => handleClick(3)}
              highlight={winner && winningSquares.includes(3)}
            />
            <Square
              value={squares[4]}
              onSquareClick={() => handleClick(4)}
              highlight={winner && winningSquares.includes(4)}
            />
            <Square
              value={squares[5]}
              onSquareClick={() => handleClick(5)}
              highlight={winner && winningSquares.includes(5)}
            />
          </div>
          <div className="board-row">
            <Square
              value={squares[6]}
              onSquareClick={() => handleClick(6)}
              highlight={winner && winningSquares.includes(6)}
            />
            <Square
              value={squares[7]}
              onSquareClick={() => handleClick(7)}
              highlight={winner && winningSquares.includes(7)}
            />
            <Square
              value={squares[8]}
              onSquareClick={() => handleClick(8)}
              highlight={winner && winningSquares.includes(8)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
