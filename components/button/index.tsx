import React from "react";
import css from "./button.module.scss";

type Ref = React.Ref<HTMLButtonElement>;

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {}

const Button = React.forwardRef((props: ButtonProps, ref: Ref) => {
  return (
    <div className={css["container"]}>
      <button ref={ref} {...props} />
    </div>
  );
});

Button.displayName = "Button";

// const Button = () => {
//   return <div></div>;
// };
export default Button;
