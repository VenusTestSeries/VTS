import React from "react";

interface CircleProgressProps extends React.SVGProps<SVGSVGElement> {
  percentage: number;
  background: string;
  foreground: string;
  strokeWidth: number | string;
  size: string | number;
  color?: string;
}

const CircleProgress = ({
  background,
  foreground,
  percentage,
  strokeWidth,
  size,
  color: color,
  ...rest
}: CircleProgressProps) => {
  // 216 / 100

  const progress = (percentage * 218) / 100;

  const commonStyle = {
    cx: "40",
    cy: "40",
    r: "35",
    strokeWidth: strokeWidth,
    fill: "transparent",
    strokeLinecap: "round",
  } as React.SVGProps<SVGCircleElement>;
  return (
    <>
      <svg
        height={size}
        width={size}
        className="progress"
        viewBox="0 0 80 80"
        {...rest}
      >
        <circle className="circle-one" {...commonStyle} stroke={background} />
        <circle
          className="circle-two"
          {...commonStyle}
          stroke={foreground}
          style={{
            strokeDasharray: `${progress}, 360`,
          }}
        />
        <text
          className="countervalue"
          x="50%"
          y="60%"
          transform="matrix(0, 1, -1, 0, 80, 0)"
        >
          {percentage}%
        </text>
      </svg>
      <style jsx>
        {`
          svg.progress {
            height: ${size}px;
            max-width: ${size}px;
            padding: 0;
            width: 100%;
            border-radius: 50%;
            transform: rotate(-90deg);
            background-image: transparent;
          }
          svg.progress text {
            fill: ${color || "#1d99f2"};
            text-anchor: middle;
            font-family: "Poppins";
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
          }
        `}
      </style>
    </>
  );
};

export default CircleProgress;
