import React from "react";
import "./ItemModal.css";
export default function ItemModal({ item }) {
  return (
    <div
      className="border list-item d-flex justify-content-between align-items-center my-2 container"
      key={item.id}
    >
      <p className="m-0">Device Number: {item.deviceNum}</p>
      <p className="m-0">Live Duration: {item.liveDuration}</p>
      <button className="btn btn-danger">End</button>
    </div>
  );
}
