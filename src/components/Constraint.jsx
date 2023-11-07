import React, { useContext } from "react";
import { Context } from "../context/Context";
import { constraintsTypes } from "../data/errorsTypes";

function Constraint({ constraintType, inputType }) {
  const { inputs } = useContext(Context);
  const getMessageConstraint = () => {
    let message = "";
    switch (constraintType) {
      case constraintsTypes.required:
        message = `${inputType} is required`;
        break;
      case constraintsTypes.minLength:
        message = `${
          getCurrentInput().constraints.minLength
        } characters is the minimum length`;
        break;
      case constraintsTypes.maxLength:
        message = `${
          getCurrentInput().constraints.maxLength
        } characters is the maximum length`;
        break;
      case constraintsTypes.min:
        message = `${getCurrentInput().constraints.min} is the minimum number`;
        break;
      case constraintsTypes.max:
        message = `${getCurrentInput().constraints.max} is the maximum number`;
        break;
      default:
        message = "constraint not found";
        break;
    }
    return (
      constraintType && (
        <span className="text-red-700" key={constraintType}>
          {message}
        </span>
      )
    );
  };
  const getCurrentInputType = () => {
    return Object.keys(inputs).find((inputType) => inputs[inputType].activated);
  };
  const getCurrentInput = () => {
    const inputType = getCurrentInputType();
    return inputs[inputType];
  };
  return (
    <>
      {inputs.hasOwnProperty(inputType) &&
        Object.keys(inputs[inputType].constraints)
          .filter(
            (currentConstraintType) => currentConstraintType === constraintType
          )
          .map(() => getMessageConstraint())}
    </>
  );
}

export default Constraint;
