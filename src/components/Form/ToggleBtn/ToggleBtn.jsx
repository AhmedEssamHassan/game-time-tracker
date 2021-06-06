import React from "react";
import "./ToggleBtn.css";
export default function ToggleBtn({ toggleHandler, isMulty }) {
  return (
    <div
      className={`toggle-container mx-2 d-flex ${
        isMulty ? "flex-row-reverse" : ""
      }`}
    >
      <div className="toggle-btn" onClick={toggleHandler}></div>
    </div>
  );
}
