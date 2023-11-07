import React, { useContext } from "react";
import Summary from "../components/Summary";
import Inputs from "../components/Inputs";
import Zone from "../components/Zone";
import { Context } from "../context/Context";

const Main = () => {
  const { inputs } = useContext(Context);
  return (
    <>
      {inputs.zone.activated ? (
        <Zone />
      ) : (
        <div className="grid grid-cols-[auto_300px]">
          <Inputs />
          <Summary />
        </div>
      )}
    </>
  );
};

export default Main;
