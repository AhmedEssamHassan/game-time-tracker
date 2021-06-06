import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import CheckOut from "./CheckOutModal/CheckOut";
import ToggleBtn from "../../Form/ToggleBtn/ToggleBtn";
export default function ItemModal({ device, isMulty }) {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(60);
  const [hour, setHour] = useState(0);
  const [timeInMuinets, setTimeInMunites] = useState(60);
  const [totalCoast, setTotalCoast] = useState(0);
  const [coastperMunit, setCoast] = useState(0);
  const [isMultyCondition, setIsMultyConditio] = useState(false);
  /* showing time counter */
  useEffect(() => {
    setTimeout(() => {
      if (sec >= 0 && sec < 30) {
        setSec(sec + 1);
      }
      if (sec === 29) {
        setSec(0);
        setMin(min + 1);
        setTimeInMunites(timeInMuinets + 1);
        setCoast(isMultyCondition ? 0.25 : 0.166666667);
      }
      if (min === 60) {
        setMin(0);
        setHour(hour + 1);
      }
    }, 1000);
  });

  useEffect(() => {
    setIsMultyConditio(isMulty ? true : false);
  }, [isMultyCondition]);

  const CheckOutHandler = () => {
    console.log(isMulty, isMultyCondition);
    setTotalCoast((timeInMuinets * coastperMunit).toFixed(2));
  };

  return (
    <div>
      {" "}
      <ListItem className="list-item d-flex justify-content-between align-items-center my-2 container">
        <p className="m-0">Device Number: {device.deviceNumber}</p>
        <div>
          <p className="d-flex m-0 align-items-center">
            {" "}
            single
            <ToggleBtn />
            multy
          </p>
        </div>
        <div style={{ width: "100px" }}>
          <p className="m-0">
            {hour}:{min}:{sec}
          </p>
        </div>
        <button className="btn btn-danger" onClick={CheckOutHandler}>
          check out
        </button>
        <button className="btn btn-danger">Cancel</button>
      </ListItem>
      <CheckOut totalCoast={totalCoast} />
    </div>
  );
}

const ListItem = styled.div`
  height: 70px;
  background-color: #282f44;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
