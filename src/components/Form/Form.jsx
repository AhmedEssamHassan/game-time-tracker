import React, { useState } from "react";
import "./form.css";
import { FaPlaystation } from "react-icons/fa";
import ToggleBtn from "./ToggleBtn/ToggleBtn";

export default function Form({
  submitHandler,
  deviceNum,
  deviceNumHandler,
  toggleHandler,
  isMulty,
}) {
  return (
    <div className="form-container my-4 py-3">
      <form onSubmit={submitHandler}>
        <div className="align-items-center py-3">
          <div className="d-flex justify-content-around">
            <div className="d-flex align-items-start">
              <label htmlFor="device-number">
                <p className="m-0">device number:</p>
              </label>
              <input
                type="number"
                name="device-number"
                className="mx-3"
                value={deviceNum}
                onChange={(e) => {
                  deviceNumHandler(e);
                }}
              />
            </div>
            <div className="d-flex align-items-center">
              <p className="my-0">single</p>
              <ToggleBtn toggleHandler={toggleHandler} isMulty={isMulty} />
              <p className="my-0">multy</p>
            </div>
          </div>
          <button className="submit-btn btn btn-success mt-4" type="submit">
            <p className="m-0">Start Time</p>
            <FaPlaystation className="playstation-icon text-warning" />
          </button>
        </div>
      </form>
    </div>
  );
}
