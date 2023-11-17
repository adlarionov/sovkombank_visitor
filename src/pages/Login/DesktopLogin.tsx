import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Switch, TextField, Typography, styled } from "@mui/material";

import Button from "@mui/material/Button";
//пока что не понял как полность кастомизировать палитру из-за этого пока что так оставил
import { palette } from "../../shared/config/palette";
import { theme } from "../../app/providers/ThemeProvider/theme";
import { typographyDesktop } from "../../shared/config/typography";

import { useFormik } from "formik";
import * as Yup from "yup";
import ILogin from "../../shared/interfaces/ILogin";

import SovcomBankLogo from "../../shared/components/Icons/SovcomBankLogo";
import { getPermission, setPermission } from "../../shared/hooks/usePermission";
import LoginService from "../../shared/services/loginService";

const LoginLayoutDesktop = styled("div")({
  background: theme.palette.background.default,
  height: "100vh",
  display: "flex",
  alignItems: "center",
});

export const LoginFormDesktop = styled("form")({
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

const StyledInputDesktop = styled(TextField)({
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

const LoginSchema = Yup.object<ILogin>({
  email: Yup.string()
    .email("Введите почту - ivanov.a.f@sovkom.bank")
    .min(5, "Почта не может быть меньше 5 символов")
    .required("Почта обязательна"),
  password: Yup.string()
    .min(5, "Пароль должен быть больше 5 символов")
    .required("Пароль обязателен"),
});

export default function DesktopLogin() {
  const navigate = useNavigate();
  const isAuthrized = localStorage.getItem("userId");
  const [_, setData] = useState<ILogin>();
  const [permission, setPermissionState] = useState<string | null>(
    getPermission()
  );

  const fetchData = async ({ email, password }: ILogin) => {
    await LoginService.login(email, password)
      .then((resp) => {
        if (permission === "manager") {
          navigate("/managerr/dashboard");
        } else {
          navigate("/tasks");
        }
        window.location.reload();
        localStorage.setItem("userId", resp.id.toString());
      })
      .catch((error) => console.error(error));
  };
  

  const formik = useFormik({
    initialValues: {
      email: "ivanov.a.f@sovkom.bank",
      password: "testpass48",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { resetForm }) => {
      setData(values);
      resetForm();
      fetchData(values);
      if (permission === "manager") {
        navigate("/managerr/dashboard");
      } else {
        navigate("/tasks");
      }
      window.location.reload();
      localStorage.setItem("userId", "5");
    },
  });

  const handleOnChange = () => {
    if (permission === "manager") {
      setPermission("visitor");
      setPermissionState("visitor");
    } else if (permission === "visitor") {
      setPermission("manager");
      setPermissionState("manager");
    }
  };

  useEffect(() => {
    if (isAuthrized) {
      if (permission === "manager") {
        navigate("/managerr/dashboard");
      } else {
        navigate("/tasks");
      }
    } else {
      navigate("/login");
    }
  }, [isAuthrized, navigate, permission]);

  return (
    <LoginLayoutDesktop>
      <LoginFormDesktop onSubmit={formik.handleSubmit}>
        <SovcomBankLogoDesktop />
        <TypographyH1Desktop>Вход в Совкомком Визитер</TypographyH1Desktop>
        <StyledInputDesktop
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Корпоративная почта"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            <Typography component={"p"}>
              {formik.touched.email && formik.errors.email}
            </Typography>
          }
        />
        <StyledInputDesktop
          value={formik.values.password}
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          placeholder="Пароль"
          helperText={
            <Typography>
              {formik.touched.password && formik.errors.password}
            </Typography>
          }
        />
        <Box margin="0 auto">
          <span>Курьер</span>
          <Switch
            checked={permission === "manager"}
            onChange={handleOnChange}
          />
          <span>Менеджер</span>
        </Box>
        <StyledButtonDesktop type="submit">Войти</StyledButtonDesktop>
        {/*Пока что здесь будет заглушка и переход сразу на стартовую страницу */}
      </LoginFormDesktop>
    </LoginLayoutDesktop>
  );
}
