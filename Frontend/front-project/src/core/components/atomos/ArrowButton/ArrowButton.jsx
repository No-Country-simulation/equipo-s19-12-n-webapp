import React from "react";
import "./ArrowButton.css";

const ArrowButton = ({ onClick, isDisabled, direction }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      aria-label={direction === "left" ? "Previous Page" : "Next Page"}
      className={`arrow-button ${direction} ${isDisabled ? "disabled" : ""}`}
    >
      {direction === "left" ? "<" : ">"}
    </button>
  );
};

export default ArrowButton;
