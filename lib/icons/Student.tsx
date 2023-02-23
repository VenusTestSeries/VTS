import React from "react";
import { SVGPROPS } from "typings/svg";

const Student = ({ size = "24px", color, ...rest }: SVGPROPS) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <polygon points="16,4 1,12 16,20 31,12 " />
      <path d="M7,15.2V22c0,2.2,4,5,9,5c5,0,9-2.8,9-5v-6.8" />
      <line x1="31" y1="12" x2="31" y2="25" />
    </svg>
  );
};

export default Student;
