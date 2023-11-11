import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const SovcomBankLogo = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon
      {...props}
      ref={ref}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M0 20C0 31.0458 8.95572 40 20.0033 40C20.2707 40 20.538 40 20.8053 39.98V32.3956H20.0033C13.1529 32.3956 7.60568 26.8426 7.60568 19.9933C7.60568 13.144 13.1529 7.59773 20.0033 7.59773H20.8053V0.0200468C20.538 0.0133645 20.2707 0 20.0033 0C8.95572 0 0 8.95423 0 20Z"
          fill="#FC5055"
        />
        <path
          d="M24 0.400959V10.7986H20.0033C14.9173 10.7986 10.8003 14.9148 10.8003 20C10.8003 25.0852 14.9239 29.2015 20.0033 29.2015H24V39.5991C33.1361 37.7481 40 29.6759 40 20C40 10.3241 33.1361 2.25194 24 0.400959Z"
          fill="#003790"
        />
      </svg>
    </SvgIcon>
  )
);

export default SovcomBankLogo;
