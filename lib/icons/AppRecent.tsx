import React from "react";
import { SVGTYPE } from "typings/app";

const AppRecent = (props: SVGTYPE) => {
  const { color = "currentColor", size = "30px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.75 2C16.9409 2 17.9156 2.92516 17.9948 4.09595L18 4.25V4.999L19.75 5C20.9409 5 21.9156 5.92516 21.9948 7.09595L22 7.25V16.75C22 17.9409 21.0748 18.9157 19.904 18.9949L19.75 19L18 19V19.75C18 20.9409 17.0748 21.9156 15.904 21.9948L15.75 22H8.25C7.05914 22 6.08436 21.0748 6.00519 19.904L6 19.75V19L4.25 19C3.05914 19 2.08436 18.0749 2.00519 16.9041L2 16.75V7.25C2 6.05914 2.92516 5.08436 4.09595 5.00519L4.25 5L6 4.999V4.25C6 3.05914 6.92516 2.08436 8.09595 2.00519L8.25 2H15.75ZM15.75 3.5H8.25C7.8703 3.5 7.55651 3.78215 7.50685 4.14823L7.5 4.25V19.75C7.5 20.1297 7.78215 20.4435 8.14823 20.4932L8.25 20.5H15.75C16.1297 20.5 16.4435 20.2178 16.4932 19.8518L16.5 19.75V4.25C16.5 3.8703 16.2178 3.55651 15.8518 3.50685L15.75 3.5ZM6 6.499L4.25 6.5C3.8703 6.5 3.55651 6.78215 3.50685 7.14823L3.5 7.25V16.75C3.5 17.1297 3.78215 17.4435 4.14823 17.4932L4.25 17.5H6V6.499ZM19.75 6.5L18 6.499V17.5H19.75C20.1297 17.5 20.4435 17.2179 20.4932 16.8518L20.5 16.75V7.25C20.5 6.83579 20.1642 6.5 19.75 6.5Z"
        fill={color}
      />
    </svg>
  );
};
export default AppRecent;
