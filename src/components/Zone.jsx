import React, { useContext } from "react";
import { Context } from "../context/Context";
import zones from "../data/places";
import { useForm } from "react-hook-form";
import { inputTypes } from "../data/inputsTypes";
import Constraint from "./Constraint";

function Zone() {
  const { inputs, setInputs } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleMySubmit = (form) => {
    const zone = zones.find((zone) => zone.lugar === form.zone);
    if (zone) {
      setInputs({
        ...inputs,
        zone: {
          ...inputs.zone,
          value: { zone: zone.lugar, price: zone.precio },
          activated: false,
        },
        name: {
          ...inputs.name,
          activated: true,
        },
      });
    }
  };
  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(handleMySubmit)}>
        <header className="flex gap-4">
          <h1>{inputs.zone.label}</h1>
          <button className="border-2 px-4">Send</button>
          <Constraint
            constraintType={errors.zone?.type}
            inputType={inputTypes.zone}
          />
        </header>
        <div className="flex gap-8 mt-4">
          {zones.map((zone) => (
            <div key={zone.lugar} className="flex flex-col items-center">
              <input
                type="radio"
                value={zone.lugar}
                name="zones"
                {...register("zone", inputs.zone.constraints)}
              />
              <span>{zone.lugar}</span>
              <span>{zone.precio}$</span>
            </div>
          ))}
        </div>
      </form>
    </>
  );
}

export default Zone;
