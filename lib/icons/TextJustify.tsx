import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const TextJustify = (props: SVGTYPE) => {
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
        d="M5.71191 7.48438H22.2705C22.7188 7.48438 23.0791 7.11523 23.0791 6.67578C23.0791 6.21875 22.7188 5.86719 22.2705 5.86719H5.71191C5.26367 5.86719 4.91211 6.22754 4.91211 6.67578C4.91211 7.11523 5.26367 7.48438 5.71191 7.48438ZM5.71191 12.0898H22.2705C22.7188 12.0898 23.0791 11.7207 23.0791 11.2812C23.0791 10.8242 22.7188 10.4727 22.2705 10.4727H5.71191C5.26367 10.4727 4.91211 10.833 4.91211 11.2812C4.91211 11.7207 5.26367 12.0898 5.71191 12.0898ZM5.71191 16.6953H22.2705C22.7188 16.6953 23.0791 16.3262 23.0791 15.8867C23.0791 15.4385 22.7188 15.0781 22.2705 15.0781H5.71191C5.26367 15.0781 4.91211 15.4385 4.91211 15.8867C4.91211 16.3262 5.26367 16.6953 5.71191 16.6953ZM5.71191 21.3008H22.2705C22.7188 21.3008 23.0791 20.9316 23.0791 20.4922C23.0791 20.0439 22.7188 19.6836 22.2705 19.6836H5.71191C5.26367 19.6836 4.91211 20.0439 4.91211 20.4922C4.91211 20.9316 5.26367 21.3008 5.71191 21.3008Z"
      />
    </svg>
  );
};
export default TextJustify;