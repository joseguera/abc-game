import React from "react";

const TileLetter = (props) => {
  return (
    <div
      // onDoubleClick={() => props.handleButtonCheck(props.letter)}
      className="tile-letter"
    >
      {props.letter}
    </div>
  );
};

export default TileLetter;
