import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const Bold = (props: SVGTYPE) => {
  const { color = "currentColor", size = "30px" } = props;
  return (
    <svg
      width={size}
      fill={color}
      height={size}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="inherit"
        d="M10.2295 20.0264H14.8789C17.6123 20.0264 19.3525 18.585 19.3525 16.3789C19.3525 14.6475 18.0605 13.3906 16.2588 13.3027V13.2236C17.7441 13.0303 18.7725 11.9141 18.7725 10.4902C18.7725 8.50391 17.2432 7.29102 14.7383 7.29102H10.2295C9.23633 7.29102 8.64746 7.87109 8.64746 8.88184V18.4355C8.64746 19.4463 9.23633 20.0264 10.2295 20.0264ZM11.8379 12.5469V9.4707H13.7275C14.9229 9.4707 15.6348 10.0244 15.6348 10.9648C15.6348 11.9492 14.8525 12.5469 13.5342 12.5469H11.8379ZM11.8379 17.873V14.4453H13.7891C15.2744 14.4453 16.1094 15.043 16.1094 16.1416C16.1094 17.2666 15.3447 17.873 13.877 17.873H11.8379Z"
      />
    </svg>
  );
};
export default Bold;
