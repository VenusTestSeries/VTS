import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

// Alt Reverse
const Option = (props: SVGTYPE) => {
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
        d="M10.1064 5.59473C10.9414 5.59473 11.6094 6.04297 11.9609 6.79883L17.665 19.3936C17.7881 19.6572 17.9902 19.7803 18.3066 19.7803H22.0596C22.6221 19.7803 23.0703 20.2109 23.0703 20.7471C23.0703 21.292 22.6221 21.7227 22.0596 21.7227H17.8408C16.9531 21.7227 16.3818 21.3535 16.0127 20.5361L10.2822 7.92383C10.1592 7.66895 9.94824 7.53711 9.66699 7.53711H5.94043C5.36914 7.53711 4.92969 7.11523 4.92969 6.57031C4.92969 6.0166 5.36914 5.59473 5.94043 5.59473H10.1064ZM22.0596 5.59473C22.6309 5.59473 23.0615 6.00781 23.0615 6.56152C23.0615 7.10645 22.6309 7.52832 22.0596 7.52832H16.5225C15.9512 7.52832 15.5205 7.10645 15.5205 6.56152C15.5205 6.00781 15.96 5.59473 16.5225 5.59473H22.0596Z"
      />
    </svg>
  );
};
export default Option;
