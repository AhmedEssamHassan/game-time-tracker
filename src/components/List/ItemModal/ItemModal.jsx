import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import CheckOut from "./CheckOutModal/CheckOut";
import ItemToggleBtn from "./ItemToggleBtn/ItemToggleBtn";
export default function ItemModal({ device, isMulty }) {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(60);
  const [hour, setHour] = useState(0);
  const [timeInMuinets, setTimeInMunites] = useState(0);
  const [totalCoast, setTotalCoast] = useState(0);
  const [coastperMunit, setCoast] = useState(0);
  const [isMultyCondition, setIsMultyCondition] = useState(false);
  const [stopCounter, setStopCounter] = useState(false);
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);
  /* showing time counter */
  useEffect(() => {
    if (sec >= 0 && sec <= 59) {
      setTimeout(() => {
        setSec(sec + 1);
      }, 100);
    }
    if (sec === 60) {
      setSec(0);
      setMin(min + 1);
      setTimeInMunites(timeInMuinets + 1);
      setCoast(isMultyCondition ? 0.25 : 0.17);
      setTotalCoast(totalCoast + coastperMunit);
    }
    if (min === 60) {
      setMin(0);
      setHour(hour + 1);
    }
  }, [sec]);

  useEffect(() => {
    setIsMultyCondition(isMulty ? true : false);
  }, []);

  const CheckOutHandler = () => {
    setTotalCoast(timeInMuinets * coastperMunit.toFixed(2));
    setCheckoutModalOpen(true);
  };

  const toggleHandler = () => {
    setIsMultyCondition(!isMultyCondition);
  };

  return (
    <div>
      {" "}
      <ListItem className=" d-flex flex-column justify-content-between align-items-center my-2 container">
        <div className=" d-flex justify-content-between align-items-center my-2 container">
          <p className="m-0">Device Number: {device.deviceNumber}</p>
          <div>
            <p className="d-flex m-0 align-items-center">
              {" "}
              single
              <ItemToggleBtn
                toggleHandler={toggleHandler}
                isMultyCondition={isMultyCondition}
              />
              multy
            </p>
          </div>
          <div style={{ width: "100px" }}>
            <p className="m-0">
              {/* {hour}:{min}:{sec} */}
              {/* {new Date().getMinutes()}:{new Date().getSeconds()} */}
              {hour}:{min}:{sec}
            </p>
          </div>
          <button className="btn btn-danger" onClick={CheckOutHandler}>
            check out
          </button>
          <button className="btn btn-danger">Cancel</button>
        </div>
        <p>total cost: {totalCoast.toFixed(2)}</p>
        <div className="d-flex justify-content-center">
          <CheckOut
            device={device}
            totalCoast={totalCoast}
            isCheckoutModalOpen={isCheckoutModalOpen}
          />
        </div>
      </ListItem>
    </div>
  );
}

const ListItem = styled.div`
  height: auto;
  background-color: #282f44;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
