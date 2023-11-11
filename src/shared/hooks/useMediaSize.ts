import { useMediaQuery } from "@mui/material";
import { IMediaSize } from "../interfaces/IMediaSize";

export default function useMediaSize(): IMediaSize {
  const smallSize = useMediaQuery("(max-width: 392px)");
  const mediumSize = useMediaQuery("(max-width: 768px)");

  if (smallSize) {
    return {
      isMobile: smallSize,
      size: "sm",
    };
  } else if (mediumSize) {
    return {
      isMobile: mediumSize,
      size: "md",
    };
  } else {
    return {
      isMobile: false,
      size: "lg",
    };
  }
}
