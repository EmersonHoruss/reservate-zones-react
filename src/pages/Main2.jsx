import React, { useState } from "react";
import { useForm } from "react-hook-form";
const data = {
  xxx1: { activated: true, value: null },
  xxx2: { activated: false, value: null },
  xxx3: { activated: false, value: null },
  xxx4: { activated: false, value: null },
  xxx5: { activated: false, value: null },
};
const order = ["xxx1", "xxx2", "xxx3", "xxx4"];
function Main2() {
  const { register, handleSubmit, setFocus, resetField } = useForm();
  const [inputs, setInputs] = useState(data);
  const getActivatedInputType = () => {
    return Object.keys(inputs).find((inputType) => inputs[inputType].activated);
  };
  const getNextInputType = () => {
    const activatedInputType = getActivatedInputType();
    const indexActivatedInputType = order.findIndex(
      (inputType) => inputType === activatedInputType
    );
    return order[indexActivatedInputType + 1];
  };
  const handleMySubmit = (form) => {
    const newInputs = { ...inputs };
    newInputs[getActivatedInputType()] = {
      ...newInputs[getActivatedInputType()],
      activated: false,
      value: form[getActivatedInputType()],
    };
    newInputs[getNextInputType()] = {
      ...newInputs[getNextInputType()],
      activated: true,
    };
    console.log("form value:" + form[getActivatedInputType()]);
    console.log("inputs:" + JSON.stringify(inputs));
    console.log("new inputs:" + JSON.stringify(newInputs));
    setInputs({ ...newInputs });
    setFocus(getActivatedInputType());
    resetField(getActivatedInputType());
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleMySubmit)}>
        {getActivatedInputType()}
        <div className="flex flex-col">
          <input
            className="border-2"
            autoFocus
            autoComplete="off"
            {...register(getActivatedInputType())}
          />
        </div>
        <hr className="my-2" />
        <button className="border-2 px-4" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Main2;
