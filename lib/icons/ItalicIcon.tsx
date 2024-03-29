import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const Italic = (props: SVGTYPE) => {
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
        d="M10.168 20.0264H15.793C16.3115 20.0264 16.6631 19.7188 16.6631 19.2002C16.6631 18.708 16.3203 18.4004 15.8018 18.4004H14.0088L16.0479 8.91699H17.832C18.3506 8.91699 18.7109 8.60938 18.7109 8.09961C18.7109 7.59863 18.3594 7.29102 17.8408 7.29102H12.1982C11.6797 7.29102 11.3281 7.59863 11.3281 8.09961C11.3281 8.60938 11.6885 8.91699 12.207 8.91699H13.9912L11.9521 18.4004H10.1592C9.64062 18.4004 9.28906 18.708 9.28906 19.2002C9.28906 19.7188 9.64941 20.0264 10.168 20.0264Z"
      />
    </svg>
  );
};
export default Italic;
