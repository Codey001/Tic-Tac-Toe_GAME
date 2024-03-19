import React from "react";


const Square = ({ value, onSquareClick, highlight }) => {
  return (
    <button
      className={highlight ? "square highlight" : "square"}
      onClick={onSquareClick}
      style={{color:"#0054FF", fontSize:"3rem"}}
    >
      {value}
    </button>
  );
};

export default Square;
