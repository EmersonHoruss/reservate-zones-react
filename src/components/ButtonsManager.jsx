import React, { useContext } from "react";
import { Context } from "../context/Context";
import inputsFromData from "../data/inputs";

function ButtonsManager() {
  const { inputs, setInputs } = useContext(Context);
  const back = () => {
    setInputs({ ...inputs, days: { ...inputs.days, activated: true } });
  };
  const _new = () => {
    setInputs({ ...inputsFromData });
  };
  const print = () => {
    window.print();
  };
  return (
    <div className="flex gap-4">
      <button className="border-2 px-4" onClick={back}>
        Atrás
      </button>
      <button className="border-2 px-4" onClick={_new}>
        Nuevo
      </button>
      <button className="border-2 px-4" onClick={print}>
        Imprimir
      </button>
    </div>
  );
}

export default ButtonsManager;
