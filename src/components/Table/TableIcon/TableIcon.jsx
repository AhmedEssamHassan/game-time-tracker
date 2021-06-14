import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import "./TableIcon.css";
export default function TableIcon({ drinksTableHandler }) {
  return (
    <div className="table-icon-container p-2" onClick={drinksTableHandler}>
      <GiCoffeeCup className="table-icon " />
    </div>
  );
}
