import React, { useState } from "react";
import ChessSquare from "./ChessSquare";
import "./Chess.css";
const ChessBoard = () => {
  const [squares, setSquares] = useState(initializeChessBoard());

  function initializeChessBoard() {
    const squares = Array(64).fill(null);
    // Initialize white pieces
    squares[0] = "WR";
    squares[1] = "WN";
    squares[2] = "WB";
    squares[3] = "WQ";
    squares[4] = "WK";
    squares[5] = "WB";
    squares[6] = "WN";
    squares[7] = "WR";
    for (let i = 8; i < 16; i++) {
      squares[i] = "WP";
    }
    // Initialize black pieces
    squares[56] = "BR";
    squares[57] = "BN";
    squares[58] = "BB";
    squares[59] = "BQ";
    squares[60] = "BK";
    squares[61] = "BB";
    squares[62] = "BN";
    squares[63] = "BR";
    for (let i = 48; i < 56; i++) {
      squares[i] = "BP";
    }
    return squares;
  }

  function renderSquare(i) {
    return <ChessSquare value={squares[i]} />;
  }

  return (
    <div className="chessboard">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      {renderSquare(9)}
      {renderSquare(10)}
      {renderSquare(11)}
      {renderSquare(12)}
      {renderSquare(13)}
      {renderSquare(14)}
      {renderSquare(15)}
      {renderSquare(16)}
      {renderSquare(17)}
      {renderSquare(18)}
      {renderSquare(19)}
      {renderSquare(20)}
      {renderSquare(21)}
      {renderSquare(22)}
      {renderSquare(23)}
      {renderSquare(24)}
      {renderSquare(25)}
      {renderSquare(26)}
      {renderSquare(27)}
      {renderSquare(28)}
      {renderSquare(29)}
      {renderSquare(30)}
      {renderSquare(31)}
      {renderSquare(32)}
      {renderSquare(33)}
      {renderSquare(34)}
      {renderSquare(35)}
      {renderSquare(36)}
      {renderSquare(37)}
      {renderSquare(38)}
      {renderSquare(39)}
      {renderSquare(40)}
      {renderSquare(41)}
      {renderSquare(42)}
      {renderSquare(43)}
      {renderSquare(44)}
      {renderSquare(45)}
      {renderSquare(46)}
      {renderSquare(47)}
      {renderSquare(48)}
      {renderSquare(49)}
      {renderSquare(50)}
      {renderSquare(51)}
      {renderSquare(52)}
      {renderSquare(53)}
      {renderSquare(54)}
      {renderSquare(55)}
      {renderSquare(56)}
      {renderSquare(57)}
      {renderSquare(58)}
      {renderSquare(59)}
      {renderSquare(60)}
      {renderSquare(61)}
      {renderSquare(62)}
      {renderSquare(63)}
    </div>
  );
};

export default ChessBoard;