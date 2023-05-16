import React from "react";

const ChessSquare = ({ value }) => {
  const backgroundColor =
    value && value.charAt(0) === "W" ? "#f0d9b5" : "#b58863";

  return (
    <div className="chesssquare" style={{ backgroundColor }}>
      {value}
    </div>
  );
};

export default ChessSquare;
