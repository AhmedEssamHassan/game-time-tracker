export const reducer = (state, action) => {
  /* show warning moodal */
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

  /* show the invalid numbur warning  */
  if (action.type === "INVALID_NUMBER") {
    return {
      ...state,
      showWarning: true,
      modalContent: "device number should be between 1 to 4",
    };
  }

  /* show the device inclouded warning */
  if (action.type === "DEVICE_INCLUDED") {
    return {
      ...state,
      showWarning: true,
      modalContent: "this device is already oppened",
    };
  }

  /* to togle condition */
  if (action.type === "TOGGLE") {
    return {
      ...state,
      isMulty: !state.isMulty,
    };
  }

  if (action.type === "MULTY_CONDITION") {
    return { ...state, coastPermunit: 0.25 };
  }

  if (action.type === "SINGLE_CONDITION") {
    return { ...state, coastPermunit: 0.166666667 };
  }
};
