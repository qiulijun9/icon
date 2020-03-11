import { createContext, Context } from "react";

const radioGroupContext = {
  disabled: false,
  value: "",
  onChange: () => {}
};

export const RadioGroupContext: Context<any> = createContext(radioGroupContext);
