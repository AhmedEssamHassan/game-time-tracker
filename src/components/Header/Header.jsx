import React from "react";
import Warning from "../Warning/Warning";
import "./header.css";
export default function Header({ showWarning, modalContent, hideWarning }) {
  return (
    <header className="d-flex align-items-center justify-content-center position-relative">
      <p className="m-0">keeb the time under control</p>
      <Warning
        showWarning={showWarning}
        modalContent={modalContent}
        hideWarning={hideWarning}
      />
    </header>
  );
}
