import React, { useContext } from "react";
import { Context } from "../context/Context";
import { constraintsTypes } from "../data/errorsTypes";

function Constraint({ constraintType, inputType }) {
  const { inputs } = useContext(Context);
  const getMessageConstraint = () => {
    let message = `${inputType} `;
    switch (constraintType) {
      case constraintsTypes.required:
        message += "is required";
        break;
      case constraintsTypes.min:
        message += "is the minimum";
        break;
      case constraintsTypes.max:
        message += "is the maximum";
        break;
      default:
        message = "constraint not found";
        break;
    }
    return constraintType && <span key={constraintType}>{message}</span>;
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
