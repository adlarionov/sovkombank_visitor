import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const ChatIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
  <SvgIcon
    {...props}
    ref={ref}
    sx={{
      width: "24px",
      height: "24px",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.1999 7.1999H15.5999M7.1999 11.9999H11.9999M11.6869 16.5912L6.67816 21.5999V16.5912H4.7999C3.47442 16.5912 2.3999 15.5167 2.3999 14.1912V4.7999C2.3999 3.47442 3.47442 2.3999 4.7999 2.3999H19.1999C20.5254 2.3999 21.5999 3.47442 21.5999 4.7999V14.1912C21.5999 15.5167 20.5254 16.5912 19.1999 16.5912H11.6869Z"
        stroke="#616161"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </SvgIcon>
));

export default ChatIcon;
