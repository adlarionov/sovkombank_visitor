import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const DashboarIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
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
          d="M11.9999 3.60854V20.4006M2.3999 12.0046H21.5999M18.9599 21.6L4.5599 19.8008C3.3599 19.6809 2.3999 18.7214 2.3999 17.5219V6.48718C2.3999 5.28775 3.3599 4.3282 4.5599 4.20826L18.9599 2.40911C20.3999 2.28917 21.5999 3.36866 21.5999 4.68803V19.2011C21.5999 20.6404 20.2799 21.7199 18.9599 21.48V21.6Z"
          stroke="#616161"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  )
);

export default DashboarIcon;
