import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const ArrowLeft = (props: SVGTYPE) => {
  const { color = "currentColor", size = "20px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
    </svg>
  );
};
export default ArrowLeft;
// //
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/></svg>
