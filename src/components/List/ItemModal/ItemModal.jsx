import React from "react";
import styled from "styled-components";
export default function ItemModal({ device }) {
  return (
    <ListItem className="list-item d-flex justify-content-between align-items-center my-2 container">
      <p className="m-0">Device Number: {device.deviceNumber}</p>
      <p className="m-0">Live Duration: </p>
      <button className="btn btn-danger">End</button>
    </ListItem>
  );
}

const ListItem = styled.div`
  height: 70px;
  background-color: #282f44;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
