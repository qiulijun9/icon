import React, { useContext } from "react";
import { RadioGroupContext } from "./stateContext";
import RadioGroup from "./RadioGroup";
import "./Radio.css";

interface Props {
  disabled: boolean;
  value: string | number;
  children?: Object;
}

Radio.Group = RadioGroup;

Radio.defaultProps = {
  disabled: false
};

function Radio(props: Props) {
  const { disabled: groupDisabled, value: groupValue, onChange } = useContext(
    RadioGroupContext
  );

  const isDisabled = groupDisabled ? groupDisabled : props.disabled;
  return (
    <label className={`radio-basic ${isDisabled && "radio-basic-disabled"}`}>
      <input
        disabled={isDisabled}
        type="radio"
        className={`
          radio-basic-input
          ${isDisabled && "radio-basic-input-disabled"}
        `}
        value={props.value}
        checked={props.value.toString() === groupValue.toString()}
        onChange={onChange}
      />
      {props.children}
    </label>
  );
}

export default Radio;
