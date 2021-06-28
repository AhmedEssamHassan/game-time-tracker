import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import CheckOut from "./CheckOutModal/CheckOut";
import ItemToggleBtn from "./ItemToggleBtn/ItemToggleBtn";
import TableIcon from "../../Table/TableIcon/TableIcon";
import Table from "../../Table/Table";
export default function ItemModal({ device, isMulty, updatedTime }) {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const [upSec, setUpSec] = useState(0);
  const [upMin, setupMin] = useState(0);
  const [upHur, setupHur] = useState(0);

  const [timeInMuinets, setTimeInMunites] = useState(0);
  const [totalCoast, setTotalCoast] = useState(0);
  const [coastperMunit, setCoast] = useState(0);
  const [stopCounter, setStopCounter] = useState(false);
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [isMultyCondition, setIsMultyCondition] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [printedCindition, setPrintedCindition] = useState("");
  const [details, setDetails] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [drinksCoast, setDrinksCoast] = useState(0);
  const [drinksList, setDrinksList] = useState([]);
  const [interevalId, setInterevalId] = useState(null);
  const [startPoint, setStartPoint] = useState(+new Date().getTime());
  const [timeDifference, setTimeDifference] = useState(0);
  const drinksTableHandler = () => {
    setShowTable(true);
  };
  /* timer */
  useEffect(() => {
    const id = setInterval(() => {
      setSec((sec) => sec + 1);
    }, 1000);
    setInterevalId(id);
    return clearInterval(interevalId);
  }, []);

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

  /* to set the start time */
  useEffect(() => {
    const date = new Date();
    setIsMultyCondition(isMulty ? true : false);
    setStartTime(
      `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    );
  }, []);

  const CheckOutHandler = () => {
    setTotalCoast(timeInMuinets * coastperMunit.toFixed(2));
    setCheckoutModalOpen(true);
  };

  const toggleHandler = () => {
    const date = new Date();
    setIsMultyCondition(!isMultyCondition);
    setPrintedCindition(isMultyCondition ? "multy" : "single");
    setEndTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  };

  useEffect(() => {
    const date = new Date();

    setDetails([
      ...details,
      { start: startTime, end: endTime, condition: printedCindition },
    ]);
    setStartTime(
      `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    );
  }, [endTime]);

  const closeCheckOutModal = () => {
    setCheckoutModalOpen(false);
  };

  const msToTime = (duration) => {
    let milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  /* update time deferance */
  useEffect(() => {
    setTimeDifference(updatedTime - startPoint);
    const time = msToTime(timeDifference);
    const arrTime = time.split(":");
    setSec(parseInt(arrTime[2]));
    setMin(parseInt(arrTime[1]));
    setHour(parseInt(arrTime[0]));
    const totalMin = parseInt(arrTime[1]) + parseInt(arrTime[0]) * 60;
    setTotalCoast(coastperMunit * totalMin);
  }, [updatedTime]);

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
              {hour}:{min}:{sec}
            </p>
          </div>
          <div>
            <p className="m-0">total cost: {totalCoast.toFixed(2)}</p>
          </div>
          <TableIcon drinksTableHandler={drinksTableHandler} />
        </div>
        <div className="w-100 d-flex justify-content-center">
          <button className="btn m-3 btn-danger" onClick={CheckOutHandler}>
            check out
          </button>
          <button className="btn m-3 btn-danger">Cancel</button>
        </div>
        <div className="d-flex justify-content-center">
          <CheckOut
            device={device}
            totalCoast={totalCoast}
            isCheckoutModalOpen={isCheckoutModalOpen}
            details={details}
            closeCheckOutModal={closeCheckOutModal}
            drinksCoast={drinksCoast}
            drinksList={drinksList}
          />
        </div>
      </ListItem>
      {showTable ? (
        <Table
          showTable={showTable}
          setShowTable={setShowTable}
          drinksCoast={drinksCoast}
          setDrinksCoast={setDrinksCoast}
          drinksList={drinksList}
          setDrinksList={setDrinksList}
        />
      ) : (
        ""
      )}
    </div>
  );
}

const ListItem = styled.div`
  height: auto;
  background-color: #171b1f;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
