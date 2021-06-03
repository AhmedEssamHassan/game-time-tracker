import { useReducer, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Table from "./components/Table/Table";
import TableIcon from "./components/Table/TableIcon/TableIcon";
import { list } from "./data";

const reducer = (state, action) => {
  if (action.type === "CLOSE_WARNING_MODEL") {
    return { ...state, showWarning: false };
  }

  /* update the list of devices */
  if (action.type === "ADD") {
    return {
      ...state,
      listOfDevices: [...state.listOfDevices, action.payload],
      openDevicesNumbers: [
        ...state.openDevicesNumbers,
        action.payload.deviceNumber,
      ],
      showWarning: false,
    };
  }
  if (action.type === "INVALID_NUMBER") {
    /* show the warning modal */
    return {
      ...state,
      showWarning: true,
      modalContent: "device number should be between 1 to 4",
    };
  }

  if (action.type === "DEVICE_INCLUDED") {
    return {
      ...state,
      showWarning: true,
      modalContent: "this device is already oppened",
    };
  }
};

const defaultState = {
  listOfDevices: list,
  showWarning: false,
  openDevicesNumbers: [],
  modalContent: "",
};

function App() {
  const [deviceNum, setDeviceNum] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const deviceNumHandler = (e) => {
    setDeviceNum(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    /* if user intered number that suit the number of devices */

    if (deviceNum >= 1 && deviceNum <= 4) {
      const isDeviceIncluded = state.openDevicesNumbers.includes(deviceNum);
      console.log(isDeviceIncluded);

      const addDevice = () => {
        const newDevice = {
          id: new Date().getTime().toString(),
          deviceNumber: deviceNum,
        };
        return dispatch({ type: "ADD", payload: newDevice });
      };

      !isDeviceIncluded ? addDevice() : dispatch({ type: "DEVICE_INCLUDED" });
      setDeviceNum("");
    }
    if (!deviceNum || deviceNum < 1) {
      dispatch({ type: "INVALID_NUMBER" });
    }

    if (deviceNum === state.openDevicesNumbers) {
      dispatch({ type: "DEVICE_IS_ALREADT_OPPENED" });
    }
  };

  const hideWarning = () => {
    dispatch({ type: "CLOSE_WARNING_MODEL" });
  };

  return (
    <div className="App">
      <Header
        showWarning={state.showWarning}
        modalContent={state.modalContent}
        hideWarning={hideWarning}
      />
      <main className="container">
        <Form
          deviceNum={deviceNum}
          deviceNumHandler={deviceNumHandler}
          submitHandler={submitHandler}
        />
        <List listOfDevices={state.listOfDevices} />
        {/* <Table /> */}
      </main>
      <TableIcon />
    </div>
  );
}

export default App;
