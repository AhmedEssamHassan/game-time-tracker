import React from "react";
import ItemModal from "./ItemModal/ItemModal";
import styled from "styled-components";
import { GrRefresh } from "react-icons/gr";

export default function List({
  listOfDevices,
  toggleHandler,
  isMulty,
  updatedTime,
  refreshHandler,
}) {
  return (
    <ListContainer className="list py-4">
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn d-flex justify-content-center align-items-center"
          onClick={refreshHandler}
          style={{
            width: 60,
            height: 60,
            border: "none",
            outline: "none",
            borderRadius: "50%",
            fontSize: 30,
            fontWeight: "bolder",
            padding: 0,
            backgroundColor: "antiquewhite",
          }}
        >
          <GrRefresh />
        </button>
      </div>
      {listOfDevices.map((item) => {
        return (
          <div key={item.id} className="px-2">
            <ItemModal
              toggleHandler={toggleHandler}
              device={item}
              isMulty={isMulty}
              updatedTime={updatedTime}
            />
          </div>
        );
      })}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: antiquewhite;
`;
