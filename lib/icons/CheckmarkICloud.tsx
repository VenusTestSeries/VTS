import * as React from "react";
interface SVGTYPE extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}
const CheckmarkICloud = (props: SVGTYPE) => {
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
        d="M20.3281 20.6592C23.0703 20.6592 25.2324 18.6465 25.2324 16.1328C25.2324 14.2607 24.1689 12.5996 22.4199 11.8701C22.4287 7.89746 19.5635 5.03223 15.8809 5.03223C13.543 5.03223 11.7852 6.23633 10.6865 7.83594C8.4541 7.23828 6.10742 8.89941 6.01953 11.3779C4.00684 11.7383 2.76758 13.54 2.76758 15.7461C2.76758 18.418 5.10547 20.6504 8.18164 20.6504L20.3281 20.6592ZM20.3281 18.9014H8.19043C6.09863 18.9014 4.54297 17.4424 4.54297 15.7461C4.54297 13.9883 5.62402 12.6875 7.41699 12.6875C7.54883 12.6875 7.60156 12.6172 7.59277 12.4941C7.54004 9.88379 9.41211 8.9873 11.3018 9.58496C11.416 9.62012 11.4863 9.59375 11.5391 9.49707C12.4092 7.96777 13.6924 6.78125 15.8721 6.78125C18.6318 6.78125 20.6006 8.96973 20.7324 11.5273C20.7588 12.002 20.7236 12.5117 20.6885 12.9336C20.6709 13.0566 20.7236 13.127 20.8379 13.1445C22.4287 13.4521 23.457 14.5771 23.457 16.1328C23.457 17.6709 22.0947 18.9014 20.3281 18.9014ZM13.3584 17.0029C13.666 17.0029 13.9385 16.8535 14.1143 16.5723L17.5684 11.0352C17.665 10.877 17.7705 10.6748 17.7705 10.4639C17.7705 10.042 17.4014 9.72559 16.9619 9.72559C16.6895 9.72559 16.4346 9.875 16.2676 10.165L13.3232 15.043L11.8291 13.1357C11.6621 12.9072 11.4336 12.7842 11.1611 12.7842C10.7305 12.7842 10.3789 13.127 10.3789 13.5664C10.3789 13.7686 10.4492 13.9619 10.5986 14.1465L12.5674 16.5811C12.7871 16.8711 13.042 17.0029 13.3584 17.0029Z"
      />
    </svg>
  );
};
export default CheckmarkICloud;