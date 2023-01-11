import React from "react";
import css from "./input.module.scss";

interface InputProps extends React.ComponentPropsWithRef<"input"> {
  label?: string;
}

const Input = ({ id, label, ...rest }: InputProps) => {
  return (
    <div className={css["container"]}>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...rest} />
    </div>
  );
};
export default Input;
