import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Switch, styled } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
//пока что не понял как полность кастомизировать палитру из-за этого пока что так оставил
import { palette } from "../../shared/config/palette";
import { theme } from "../../app/providers/ThemeProvider/theme";
import { typographyDesktop } from "../../shared/config/typography";

import SovcomBankLogo from "../../shared/components/Icons/SovcomBankLogo";
import { StyledFormControl, StyledFormHelperText } from ".";
import { getPermission, setPermission } from "../../shared/hooks/usePermission";

const LoginLayoutDesktop = styled("div")({
  background: theme.palette.background.default,
  height: "100vh",
  display: "flex",
  alignItems: "center",
});

export const LoginFormDesktop = styled("div")({
  background: theme.palette.common.white,
  width: "38.125rem",
  height: "31.75rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const SovcomBankLogoDesktop = styled(SovcomBankLogo)({
  width: "3.75rem",
  height: "3.75rem",
  marginLeft: "0.313rem",
});

export const TypographyH1Desktop = styled("h1")({
  textAlign: "center",
  ...typographyDesktop.h1,
  marginBottom: "2.5rem",
  width: "24.5625rem",
});

const StyledInputDesktop = styled(OutlinedInput)({
  width: "21.875rem",
  borderRadius: "0.625rem",
  border: ` 1px solid ${palette.secondary.borderGrey}`,
  background: theme.palette.common.white,
});

const StyledButtonDesktop = styled(Button)({
  ...typographyDesktop.button,
  borderRadius: "6.25rem",
  background: palette.button.default,
  color: theme.palette.common.white,
  width: "21.875rem",
  padding: "0.9375rem",
  marginTop: "1.25rem",
  ":hover": {
    background: palette.button.hover,
  },
});

export default function DesktopLogin() {
  const navigate = useNavigate();
  const [error] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [permission, setPermissionState] = useState<string | null>(
    getPermission()
  );

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEnterClick = () => {
    navigate("/tasks");
  };

  const handleOnChange = () => {
    if (permission === "manager") {
      setPermission("visitor");
      setPermissionState("visitor");
    } else if (permission === "visitor") {
      setPermission("manager");
      setPermissionState("manager");
    }
    window.location.reload();
  };

  return (
    <LoginLayoutDesktop>
      <LoginFormDesktop>
        <SovcomBankLogoDesktop />
        <TypographyH1Desktop>Вход в Совкомком Визитер</TypographyH1Desktop>
        <StyledFormControl error={error}>
          <StyledInputDesktop
            value={email}
            onChange={handleEmailChange}
            placeholder="Корпоративная почта"
            error={error}
          />
          {error ? (
            <StyledFormHelperText id="my-helper-text">
              Введена неверная почта
            </StyledFormHelperText>
          ) : null}
        </StyledFormControl>
        <StyledFormControl error={error}>
          <StyledInputDesktop
            value={password}
            type="password"
            onChange={handlePasswordChange}
            placeholder="Пароль"
          />
          {error ? (
            <StyledFormHelperText id="my-helper-text">
              Введён неверный пароль
            </StyledFormHelperText>
          ) : null}
          <Box margin="0 auto">
            <span>Курьер</span>
            <Switch
              checked={permission === "manager"}
              onChange={handleOnChange}
            />
            <span>Менеджер</span>
          </Box>
        </StyledFormControl>
        <StyledButtonDesktop onClick={handleEnterClick}>
          Войти
        </StyledButtonDesktop>
        {/*Пока что здесь будет заглушка и переход сразу на стартовую страницу */}
      </LoginFormDesktop>
    </LoginLayoutDesktop>
  );
}
