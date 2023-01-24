import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const FilterFill = (props: SVGTYPE) => {
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
      <path fill="none" d="M0 0H24V24H0z" />
      <path d="M21 4L21 6 20 6 14 15 14 22 10 22 10 15 4 6 3 6 3 4z" />
    </svg>
  );
};
export default FilterFill;
