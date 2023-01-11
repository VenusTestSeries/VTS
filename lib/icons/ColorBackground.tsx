import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const ColorBackground = (props: SVGTYPE) => {
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
        d="M1.99976 12.4143V17.5C1.99976 18.8807 3.11904 20 4.49976 20H19.4998C20.8805 20 21.9998 18.8807 21.9998 17.5V6.5C21.9998 5.11929 20.8805 4 19.4998 4H10.556L12.056 5.5H19.4998C20.052 5.5 20.4998 5.94771 20.4998 6.5V17.5C20.4998 18.0523 20.052 18.5 19.4998 18.5H4.49976C3.94747 18.5 3.49976 18.0523 3.49976 17.5V13.9143L1.99976 12.4143Z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="inherit"
        d="M5.99976 1.75C5.99976 1.33579 6.33554 1 6.74976 1C7.16397 1 7.49976 1.33579 7.49976 1.75V3.0153C7.95041 3.05555 8.39003 3.24816 8.73498 3.59311L12.2705 7.12864C13.0516 7.90969 13.0516 9.17602 12.2705 9.95707L8.02787 14.1997C7.24682 14.9808 5.98049 14.9808 5.19945 14.1997L1.66391 10.6642C0.882863 9.88313 0.882863 8.6168 1.66391 7.83575L5.90655 3.59311C5.93691 3.56276 5.96799 3.53358 5.99976 3.50559V1.75ZM5.99976 6.25V5.62123L3.11028 8.51071H11.3553C11.3478 8.39366 11.2993 8.27875 11.2099 8.1893L7.67432 4.65377C7.62303 4.60249 7.56338 4.56467 7.49976 4.54033V6.25C7.49976 6.66421 7.16397 7 6.74976 7C6.33554 7 5.99976 6.66421 5.99976 6.25ZM3.13176 10.0107L6.26011 13.1391C6.45537 13.3343 6.77195 13.3343 6.96721 13.1391L10.0956 10.0107H3.13176Z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="inherit"
        d="M10.9998 13.375C10.9998 12.8816 11.1539 12.4027 11.3416 11.9938C11.5322 11.5784 11.7796 11.1881 12.0155 10.8595C12.2529 10.5289 12.4886 10.247 12.6645 10.0481C12.7499 9.95148 12.9059 9.78679 12.9639 9.72549L12.9694 9.71967C13.2623 9.42678 13.7372 9.42678 14.0301 9.71967L14.3351 10.0481C14.5109 10.247 14.7467 10.5289 14.984 10.8595C15.2199 11.1881 15.4673 11.5784 15.6579 11.9938C15.8456 12.4027 15.9998 12.8816 15.9998 13.375C15.9998 14.7654 14.9709 16 13.4998 16C12.0286 16 10.9998 14.7654 10.9998 13.375ZM13.234 11.7343C13.0324 12.015 12.8423 12.32 12.7048 12.6195C12.5644 12.9253 12.4998 13.1808 12.4998 13.375C12.4998 14.0663 12.9807 14.5 13.4998 14.5C14.0188 14.5 14.4998 14.0663 14.4998 13.375C14.4998 13.1808 14.4351 12.9253 14.2947 12.6195C14.1572 12.32 13.9671 12.015 13.7655 11.7343C13.6757 11.6092 13.5856 11.4916 13.4998 11.3844C13.4139 11.4916 13.3238 11.6092 13.234 11.7343Z"
      />
    </svg>
  );
};
export default ColorBackground;