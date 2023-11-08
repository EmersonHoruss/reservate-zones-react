import React, { useState } from "react";
import { Context } from "./Context";
import inputsData from "../data/inputs";
import { getNextInputType, isTheLastInput } from "../data/inputsTypes";

const Provider = ({ children }) => {
  const [inputs, setInputs] = useState(inputsData);
  const addValue = (value) => {
    setInputs((inputs) => {
      const newInputs = { ...inputs };
      const inputType = getCurrentInputType(inputs);
      let currentInput = newInputs[inputType];
      currentInput = { ...currentInput, value, activated: false };
      newInputs[inputType] = currentInput;
      if (!isTheLastInput(inputType)) {
        const nextInputType = getNextInputType(inputType);
        let nextInput = newInputs[nextInputType];
        nextInput = { ...nextInput, activated: true };
        newInputs[nextInputType] = nextInput;
      }
      return { ...newInputs };
    });
  };
  // const reset = () => {
  //   setInputs(inputsData);
  // };
  // const back = () => {};
  const getCurrentInputType = (inputsParam = inputs) => {
    return Object.keys(inputsParam).find(
      (inputType) => inputs[inputType].activated
    );
  };
  const getCurrentInput = (inputsParam = inputs) => {
    const inputType = getCurrentInputType(inputs);
    return inputs[inputType];
  };
  return (
    <Context.Provider
      value={{
        inputs,
        setInputs,
        addValue,
        getCurrentInputType,
        getCurrentInput,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
