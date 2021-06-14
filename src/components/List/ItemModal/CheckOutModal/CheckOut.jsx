import React from "react";
import styled from "styled-components";
import { AiOutlineCloseSquare } from "react-icons/ai";
export default function CheckOut({
  totalCoast,
  isCheckoutModalOpen,
  device,
  details,
  closeCheckOutModal,
}) {
  return (
    <CheckOutModal className={isCheckoutModalOpen ? "d-block" : "d-none"}>
      <UL className="p-2  m-0">
        <CloseContainer
          className="d-flex flex-row-reverse"
          onClick={closeCheckOutModal}
        >
          <AiOutlineCloseSquare style={{ fontSize: "20px", color: "red" }} />
        </CloseContainer>
        <ListItem
          style={{ borderTop: "1px solid black" }}
          className="d-flex justify-content-around align-items-center"
        >
          <p className="m-0">device number: {device.deviceNumber}</p>
        </ListItem>

        {details.map((item, indx) => {
          if (indx > 0)
            return (
              <ListItem
                className="d-flex justify-content-around align-items-center"
                style={{ borderTop: "1px solid black" }}
              >
                <P style={{ borderRight: "1px solid black" }}>
                  from: {item.start}
                </P>
                <P style={{ borderRight: "1px solid black" }}>to: {item.end}</P>
                <P>{item.condition}</P>
              </ListItem>
            );
        })}
        <ListItem className="d-flex justify-content-around align-items-center">
          <P>total coast: {totalCoast.toFixed(2)}</P>
        </ListItem>
      </UL>
    </CheckOutModal>
  );
}

const CheckOutModal = styled.div`
  background-color: antiquewhite;
  width: 400px;
  position: absolute;
  top: 0px;
  color: black;
`;

const UL = styled.ul`
  list-style: none;
  border: 2px solid black;
`;

const ListItem = styled.li`
  height: 50px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
`;

const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 100%;
`;

const CloseContainer = styled.div`
  position: relative;
  top: 0;
  roght: 0;
  width: 100%;
`;

/* 
        <ListItem
          className="d-flex justify-content-around align-items-center"
          style={{ borderTop: "1px solid black" }}
        >
          <P style={{ borderRight: "1px solid black" }}>from: 1.52</P>
          <P style={{ borderRight: "1px solid black" }}>to: 2.52</P>
          <P>condition: single</P>
        </ListItem>
        <ListItem className="d-flex justify-content-around align-items-center">
          <P>coast: 10 le</P>
        </ListItem>
        <ListItem className="d-flex justify-content-around align-items-center">
          <P style={{ borderRight: "1px solid black" }}>from: 1.52</P>
          <P style={{ borderRight: "1px solid black" }}>to: 2.52</P>
          <P>condition: multy</P>
        </ListItem>
        <ListItem className="d-flex justify-content-around align-items-center">
          <P>coast: 15 le</P>
        </ListItem>
        <ListItem className="d-flex justify-content-around align-items-center">
          <P>extra</P>
        </ListItem>
        <ListItem className="d-flex justify-content-around align-items-center">
          <P style={{ borderRight: "1px solid black" }}>tea</P>
          <P>5 le</P>
        </ListItem>
        <ListItem className="d-flex justify-content-around align-items-center">
          <P style={{ borderRight: "1px solid black" }}>coffe</P>
          <P>8 le</P>
        </ListItem>
       
 */
