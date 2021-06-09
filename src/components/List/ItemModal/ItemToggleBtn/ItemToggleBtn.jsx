import React from "react";
import "./ItemToggleBtn.css";
export default function ItemToggleBtn({ toggleHandler, isMultyCondition }) {
  return (
    <div
      className={`toggle-container mx-2 d-flex ${
        isMultyCondition ? "flex-row-reverse" : ""
      }`}
    >
      <div className="toggle-btn" onClick={toggleHandler}></div>
    </div>
  );
}
