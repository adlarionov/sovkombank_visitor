import Box from "@mui/material/Box";
import { theme } from "../../app/providers/ThemeProvider/theme";
import {
  LoginFormDesktop,
  SovcomBankLogoDesktop,
  TypographyH1Desktop,
} from "../Login/DesktopLogin";
import Typography from "@mui/material/Typography";
import ArrowIcon from "../../shared/components/Icons/ArrowIcon";
import PhoneMockup from "../../shared/assets/iPhoneMocup.png";

const DesktopDummy = () => {

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <LoginFormDesktop
        sx={{
          borderRadius: "1.25rem",
          width: "38.125rem",
          position: "relative",
        }}
      >
        <SovcomBankLogoDesktop />
        <TypographyH1Desktop
          sx={{
            width: "80%",
            fontSize: "1.5rem",
            lineHeight: "125%",
            marginBottom: "0.65rem",
          }}
        >
          <span style={{ color: theme.palette.primary.main }}>Упс! </span>
          Десктоп-версия сервиса для вашей роли сейчас не доступна, так как
          находится в разработке
        </TypographyH1Desktop>
        <Typography
          color={theme.palette.text.secondary}
          fontWeight={400}
          fontSize={"1.25rem"}
          margin={"0 10.62rem"}
          textAlign={"center"}
        >
          Авторизуйтесь, используя мобильное устройство
        </Typography>
        <ArrowIcon sx={{ marginLeft: "18rem" }} />
        <Box
          sx={{
            background: `url(${PhoneMockup})`,
            width: "10.8rem",
            height: "13.8rem",
            bottom: 0,
            right: 0,
          }}
          position={"absolute"}
        />
      </LoginFormDesktop>
    </Box>
  );
};

export default DesktopDummy;
