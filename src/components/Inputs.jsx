import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../context/Context";
import Constraint from "./Constraint";
import { getNextInputType, isTheLastInput } from "../data/inputsTypes";

const Inputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const { inputs, setInputs } = useContext(Context);
  const handleMySubmit = (form) => {
    const newInputs = { ...inputs };
    newInputs[getCurrentInputType()] = {
      ...newInputs[getCurrentInputType()],
      value: watch(getCurrentInputType()),
      activated: false,
    };
    if (!isTheLastInput(getCurrentInputType())) {
      newInputs[getNextInputType(getCurrentInputType())] = {
        ...newInputs[getNextInputType(getCurrentInputType())],
        activated: true,
      };
    }
    setInputs({ ...newInputs });
    reset();
  };
  const getCurrentInputType = () => {
    return Object.keys(inputs).find((inputType) => inputs[inputType].activated);
  };
  const getCurrentInput = () => {
    const inputType = getCurrentInputType();
    return inputs[inputType];
  };
  const getDescription = () => {
    if (Object.keys(errors).length === 0 && watch(getCurrentInputType())) {
      return (
        <span>{`${watch(getCurrentInputType())}${
          getCurrentInput().description
        }`}</span>
      );
    }
    return null;
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleMySubmit)}>
        <header className="flex gap-4">
          <h1>{getCurrentInput()?.label}</h1>
          {getDescription()}
        </header>
        <div className="flex flex-col">
          <input
            type={getCurrentInput().type}
            className="border-2"
            autoFocus
            autoComplete="off"
            defaultValue={getCurrentInput().value}
            {...register(getCurrentInputType(), getCurrentInput().constraints)}
          />
          <Constraint
            constraintType={errors[getCurrentInputType()]?.type}
            inputType={getCurrentInputType()}
          />
        </div>
        <hr className="my-2" />
        <button className="border-2 px-4" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default Inputs;
