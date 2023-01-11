import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const SumIcon = (props: SVGTYPE) => {
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
        d="M10.2031 21.749H18.21C18.8076 21.749 19.2207 21.3799 19.2207 20.8086C19.2207 20.2461 18.8076 19.8682 18.21 19.8682H11.2314V19.7803L15.6875 14.6475C16.0127 14.3223 16.1797 13.9619 16.1797 13.5928C16.1797 13.2236 16.0127 12.8545 15.6875 12.5381L11.2402 7.53711V7.44922H18.21C18.8164 7.44922 19.2295 7.07129 19.2295 6.50879C19.2295 5.9375 18.8164 5.56836 18.21 5.56836H10.2207C9.28906 5.56836 8.7793 6.21875 8.7793 6.93066C8.7793 7.33496 8.94629 7.75684 9.28906 8.09082L14.1846 13.5312V13.6367L9.28027 19.2266C8.9375 19.5605 8.77051 19.9824 8.77051 20.3867C8.77051 21.0986 9.28027 21.749 10.2031 21.749Z"
      />
    </svg>
  );
};
export default SumIcon;