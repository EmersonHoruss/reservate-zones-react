import React, { useContext } from "react";
import { Context } from "../context/Context";
import { inputOrder, inputTypes } from "../data/inputsTypes";

const Summary = () => {
  const { inputs } = useContext(Context);
  const total = () => {
    const price = inputs.zone.value ? inputs.zone.value.price : 0;
    const rooms = inputs.rooms.value ? inputs.rooms.value : 1;
    const people = inputs.people.value ? inputs.people.value : 1;
    const days = inputs.days.value ? inputs.days.value : 1;
    return price * rooms * people * days;
  };
  return (
    <details open>
      <summary>Summary</summary>
      <div className="flex flex-col pl-4">
        {Object.keys(inputs).map((inputType) => {
          const input = inputs[inputType];
          if (input.value) {
            if (inputType === inputTypes.zone) {
              return (
                <div key={inputType} className="flex flex-col">
                  <span>{`zone: ${inputs[inputType].value?.zone}`}</span>
                  <span>{`price: ${inputs[inputType].value?.price}`}$</span>
                </div>
              );
            } else {
              return (
                <span
                  key={inputType}
                >{`${inputType}: ${inputs[inputType].value}`}</span>
              );
            }
          }
        })}
        <span className="font-medium">Total: {total()}$</span>
      </div>
    </details>
  );
};

export default Summary;
