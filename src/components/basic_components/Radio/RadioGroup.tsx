import React from "react";
import { RadioGroupContext } from "./stateContext";
import "./Radio.css";

interface Props {
  disabled: boolean;
  value: string | number;
  onChange: Function;
  children?: Object;
}

RadioGroup.defaultProps = {
  disabled: false,
  value: "",
  onChange: () => {}
};

function RadioGroup(props: Props) {
  return (
    <RadioGroupContext.Provider
      value={{
        disabled: props.disabled,
        value: props.value,
        onChange: props.onChange
      }}
    >
      {props.children}
    </RadioGroupContext.Provider>
  );
}

export default RadioGroup;
