import React from "react";
import "./ToggleBtn.css";
export default function ToggleBtn() {
  return (
    <div className="toggle-container mx-2 d-flex">
      <div className="toggle-btn" /* onClick={toggle} */></div>
    </div>
  );
}
/* 
className={`toggle-container mx-2 d-flex ${
	isToggle ? "flex-row-reverse" : ""
}`} */
