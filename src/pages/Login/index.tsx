import { styled } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import useMediaSize from "../../shared/hooks/useMediaSize";
import MobileLogin from "./MobileLogin";
import DesktopLogin from "./DesktopLogin";

export const StyledFormHelperText = styled(FormHelperText)({
  margin: "0.31rem 0 0 0",
  fontSize: "0.875rem",
});

export const StyledFormControl = styled(FormControl)({
  marginBottom: "0.625rem",
});

const LoginPage = () => {
  const mediaSize = useMediaSize();

  return <>{mediaSize.isMobile ? <MobileLogin /> : <DesktopLogin />}</>;
};

export default LoginPage;
