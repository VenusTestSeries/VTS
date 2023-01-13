import React from "react";
import css from "./button.module.scss";

type Ref = React.Ref<HTMLButtonElement>;

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  theme?: "primary" | "secondry" | "tertairy" | "default";
}

const Button = React.forwardRef((props: ButtonProps, ref: Ref) => {
  const { theme } = props;

  const ButtonClassName = React.useMemo(() => {
    switch (theme) {
      case "primary":
        return css["theme-primary"];
      case "secondry":
        return css["theme-secondry"];
      case "tertairy":
        return css["theme-tertairy"];
      default:
        return css["theme-default"];
    }
  }, [theme]);

  return (
    <div className={css["container"]}>
      <button
        ref={ref}
        className={`${props.className} ${ButtonClassName}`}
        {...props}
      />
    </div>
  );
});

Button.displayName = "Button";

// const Button = () => {
//   return <div></div>;
// };
export default Button;
