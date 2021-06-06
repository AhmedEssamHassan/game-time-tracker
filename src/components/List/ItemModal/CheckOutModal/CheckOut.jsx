import React from "react";

export default function CheckOut({ totalCoast }) {
  return (
    <div>
      <p className="h3 d-flex justify-content-center">
        <h2>
          {totalCoast} <sub>le</sub>
        </h2>
      </p>
    </div>
  );
}
