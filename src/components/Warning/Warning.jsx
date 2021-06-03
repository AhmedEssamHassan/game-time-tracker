import React, { useEffect } from "react";
import styled from "styled-components";

export default function Warning({ modalContent, showWarning, hideWarning }) {
  useEffect(() => {
    setTimeout(() => {
      hideWarning();
    }, 3000);
  });

  return (
    <WarningModal
      className="d-flex w-100 justify-content-center "
      style={
        showWarning
          ? {
              color: "red",
              height: "70px",
              backgroundColor: "wheat",
            }
          : {
              top: "-100px",
              height: "70px",
              backgroundColor: "wheat",
              color: "green",
            }
      }
    >
      <div className="w-100 px-3 d-flex flex-column justify-content-center align-items-center text-capitalized">
        <p className="m-0">Warning </p>
        <p className="m-0">{modalContent}</p>
      </div>
    </WarningModal>
  );
}

const WarningModal = styled.div`
  position: absolute;
`;
