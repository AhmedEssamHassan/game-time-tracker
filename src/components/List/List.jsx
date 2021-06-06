import React from "react";
import ItemModal from "./ItemModal/ItemModal";
import styled from "styled-components";
export default function List({ listOfDevices, toggleHandler, isMulty }) {
  return (
    <ListContainer className="list py-4">
      {listOfDevices.map((item) => {
        return (
          <div key={item.id} className="px-2">
            <ItemModal
              toggleHandler={toggleHandler}
              device={item}
              isMulty={isMulty}
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
