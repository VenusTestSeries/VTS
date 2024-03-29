import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const Underline = (props: SVGTYPE) => {
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
        d="M13.9912 20.2549C17.252 20.2549 19.291 18.3477 19.291 15.5352V8.08203C19.291 7.44922 18.8779 7.0625 18.2539 7.0625C17.6299 7.0625 17.2344 7.44922 17.2344 8.08203V15.3418C17.2344 17.2051 16.0391 18.4355 13.9912 18.4355C11.9521 18.4355 10.7656 17.2051 10.7656 15.3418V8.08203C10.7656 7.44922 10.3525 7.0625 9.72852 7.0625C9.0957 7.0625 8.7002 7.44922 8.7002 8.08203V15.5352C8.7002 18.3477 10.748 20.2549 13.9912 20.2549ZM9.33301 23.0586H18.6582C19.0098 23.0586 19.291 22.7949 19.291 22.4346C19.291 22.0742 19.0098 21.8105 18.6582 21.8105H9.33301C8.98145 21.8105 8.7002 22.0742 8.7002 22.4346C8.7002 22.7949 8.98145 23.0586 9.33301 23.0586Z"
      />
    </svg>
  );
};
export default Underline;
