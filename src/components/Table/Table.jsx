import React, { useState } from "react";
import "./Table.css";
import { drinks } from "../../data";
import { IoMdClose } from "react-icons/io";
export default function Table({ showTable, setShowTable }) {
  return (
    <div className="products-container d-flex justify-content-center">
      <div className="products py-4 text-capitalize">
        <div className="close-icon" onClick={() => setShowTable(false)}>
          <IoMdClose />
        </div>
        <section className="hot-drinks">
          <div className="d-flex justify-content-center">
            {" "}
            <p className="catigory-title m-0 px-2">Hot Beverages</p>
          </div>
          <div className="d-flex flex-wrap justify-content-around p-4">
            {drinks[0].hot.map((item) => {
              return (
                <div className="single-drink m-2 d-flex flex-column align-items-center py-2">
                  <p>{item.name}</p>
                  <p>{item.price} L.E</p>
                  <button className="add-btn btn btn-success">add</button>
                </div>
              );
            })}
          </div>
        </section>
        <div className="d-flex justify-content-center">
          <div className="hr m-4" />
        </div>
        <section className="hot-drinks">
          <div className="d-flex justify-content-center">
            {" "}
            <p className="catigory-title m-0 px-2">Cold Beverages</p>
          </div>
          <div className="d-flex flex-wrap justify-content-around p-4">
            {drinks[1].cold.map((item) => {
              return (
                <div className="single-drink m-2 d-flex flex-column align-items-center py-2">
                  <p>{item.name}</p>
                  <p>{item.price} L.E</p>
                  <button className="add-btn btn btn-success">add</button>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
