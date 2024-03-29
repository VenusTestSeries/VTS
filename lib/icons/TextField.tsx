import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const TextField = (props: SVGTYPE) => {
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
        xmlns="http://www.w3.org/2000/svg"
        fill="inherit"
        d="M15 8.5H12.75V15.5H13.25C13.6642 15.5 14 15.8358 14 16.25C14 16.6642 13.6642 17 13.25 17H10.75C10.3358 17 10 16.6642 10 16.25C10 15.8358 10.3358 15.5 10.75 15.5H11.25V8.5H9V9.2501C9 9.66432 8.66421 10.0001 8.25 10.0001C7.83579 10.0001 7.5 9.66432 7.5 9.2501V7.75C7.5 7.33579 7.83579 7 8.25 7H15.75C16.1642 7 16.5 7.33579 16.5 7.75V9.2501C16.5 9.66432 16.1642 10.0001 15.75 10.0001C15.3358 10.0001 15 9.66432 15 9.2501V8.5Z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="inherit"
        d="M5.75 4C3.67893 4 2 5.67893 2 7.75V16.25C2 18.3211 3.67893 20 5.75 20H18.25C20.3211 20 22 18.3211 22 16.25V7.75C22 5.67893 20.3211 4 18.25 4H5.75ZM3.5 7.75C3.5 6.50736 4.50736 5.5 5.75 5.5H18.25C19.4926 5.5 20.5 6.50736 20.5 7.75V16.25C20.5 17.4926 19.4926 18.5 18.25 18.5H5.75C4.50736 18.5 3.5 17.4926 3.5 16.25V7.75Z"
      />
    </svg>
  );
};
export default TextField;
