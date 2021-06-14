import { useReducer, useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Table from "./components/Table/Table";
import TableIcon from "./components/Table/TableIcon/TableIcon";
import { list } from "./data";

import { reducer } from "./reducer";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
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
  const [isMulty, seIsMulty] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const deviceNumHandler = (e) => {
    setDeviceNum(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    /* if user intered number that suit the number of devices */
    if (deviceNum >= 1 && deviceNum <= 4) {
      const isDeviceIncluded = state.openDevicesNumbers.includes(deviceNum);

      const addDevice = () => {
        const newDevice = {
          id: new Date().getTime().toString(),
          deviceNumber: deviceNum,
          liveDuration: 55,
        };
        return dispatch({ type: "ADD", payload: newDevice });
      };

      !isDeviceIncluded ? addDevice() : dispatch({ type: "DEVICE_INCLUDED" });
      setDeviceNum("");
    }
    /* if user intered number that dose not suit the number of devices */
    if (!deviceNum || deviceNum < 1) {
      dispatch({ type: "INVALID_NUMBER" });
    }
    /* if user intered number of a device that is allready oppened */
    if (deviceNum === state.openDevicesNumbers) {
      dispatch({ type: "DEVICE_IS_ALREADT_OPPENED" });
    }

    /* chick condition multy/single */
    if (state.isMulty) {
      dispatch({ type: "MULTY_CONDITION" });
    }
    if (!state.isMulty) {
      dispatch({ type: "SINGLE_CONDITION" });
    }
  };

  const hideWarning = () => {
    dispatch({ type: "CLOSE_WARNING_MODEL" });
  };

  const toggleHandler = () => {
    seIsMulty(!isMulty);
  };

  /* local storage */
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(state.listOfDevices));
  }, [state.listOfDevices]);

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
          isMulty={isMulty}
          toggleHandler={toggleHandler}
        />
        <List
          isMulty={isMulty}
          listOfDevices={state.listOfDevices}
          liveDuration={state.liveDuration}
          toggleHandler={toggleHandler}
        />
        {/* <Table /> */}
      </main>
    </div>
  );
}

export default App;
