import React from "react";

function ButtonsManager() {
  const back = () => {
    console.log("back");
  };
  const _new = () => {
    console.log("new");
  };
  const print = () => {
    console.log("print");
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
