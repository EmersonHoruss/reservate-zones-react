import React from "react";
import Summary from "./Summary";

function ButtonsManager() {
  const back = () => {
    console.log("back");
  };
  const _new = () => {
    console.log("new");
  };
  const print = () => {
    window.print()
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
