import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const CommentIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => (
    <SvgIcon
      {...props}
      ref={ref}
      sx={{
        width: "30px",
        borderRadius: "50%",
        height: "30px",
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
          d="M12 13.125V9.75M12 6.375V6.45959M14.4457 16.3043L12 21L9.75 16.3043H5.25C4.00736 16.3043 3 15.297 3 14.0543V5.25C3 4.00736 4.00736 3 5.25 3H18.75C19.9926 3 21 4.00736 21 5.25V14.0543C21 15.297 19.9926 16.3043 18.75 16.3043H14.4457Z"
          stroke="#212121"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  )
);

export default CommentIcon;
