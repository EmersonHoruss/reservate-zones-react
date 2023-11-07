import React, { useContext } from "react";
import Summary from "../components/Summary";
import Inputs from "../components/Inputs";
import Zone from "../components/Zone";
import { Context } from "../context/Context";
import ButtonsManager from "../components/ButtonsManager";

const Main = () => {
  const { inputs } = useContext(Context);
  const areActivatedInputs = () => {
    for (const inputType in inputs) {
      if (inputs[inputType].activated) return true;
    }
    return false;
  };
  return (
    <>
      {inputs.zone.activated ? (
        <Zone />
      ) : (
        <div className="grid grid-cols-[auto_300px]">
          <div className="mr-4">
            {areActivatedInputs() ? <Inputs /> : <ButtonsManager />}
          </div>
          <Summary />
        </div>
      )}
    </>
  );
};

export default Main;
