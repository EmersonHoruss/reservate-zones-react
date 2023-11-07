import React, { useState } from "react";
import { Context } from "./Context";
import inputsData from "../data/inputs";

const Provider = ({ children }) => {
  const [inputs, setInputs] = useState(inputsData);
  return (
    <Context.Provider value={{ inputs, setInputs }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
