import React from "react";
import less from "./toggle.module.scss";

const ToggleButton = () => {
  return (
    <div className={less["toggleWrapper"]}>
      <input
        type="checkbox"
        name="toggle2"
        className={less["mobileToggle"]}
        id="toggle2"
      />
      <label htmlFor="toggle2"></label>
    </div>
  );
};

export default ToggleButton;
