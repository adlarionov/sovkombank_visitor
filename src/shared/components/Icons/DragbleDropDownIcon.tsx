import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const DropListIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon
      {...props}
      ref={ref}
      sx={{
        width: "40px",
        borderRadius: "50%",
        height: "10px",
        marginLeft: "5px",
        marginTop: "5px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="4"
        viewBox="0 0 36 4"
        fill="none"
      >
        <path
          d="M2 2H34"
          stroke="#BDBDBD"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  )
);

export default DropListIcon;
