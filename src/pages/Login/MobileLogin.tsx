import { useEffect, useState } from "react";
import { styled } from "@mui/system";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { typographyMobile } from "../../shared/config/typography";
import { palette } from "../../shared/config/palette";

import SovcomBankLogo from "../../shared/components/Icons/SovcomBankLogo";
import { useFormik } from "formik";
import * as Yup from "yup";
import ILogin from "../../shared/interfaces/ILogin";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { getPermission, setPermission } from "../../shared/hooks/usePermission";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import LoginService from "../../shared/services/loginService";
import { setUser } from "../../shared/hooks/useUser";

const LoginLayoutMobile = styled("div")({
  background: palette.background.tertiary,
  height: "100%",
});

const LoginFormMobile = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const SovcomBankLogoMobile = styled(SovcomBankLogo)({
  width: "2.5rem",
  borderRadius: "50%",
  height: "2.5rem",
  marginLeft: "10px",
  transform: "translateY(20%)",
});

const TypographyH1Mobile = styled("h1")({
  ...typographyMobile.h1,
  marginBottom: "1.5rem",
  width: "22.5rem",
});

const StyledInputMobile = styled(TextField)({
  width: "22.5rem",
  marginBottom: "0.5rem",
  borderRadius: "0.625rem",
  background: palette.monochrome.white,
});

export const StyledButtonMobile = styled(Button)({
  ...typographyMobile.button,
  borderRadius: "6.25rem",
  background: palette.button.default,
  color: palette.monochrome.white,
  width: "97.5%",
  marginTop: "0.5rem",
  padding: "0.9375rem",
  ":hover": {
    background: palette.button.hover,
  },
});

const StyledButton = styled(Button)({
  ...typographyMobile.button,
  borderRadius: "6.25rem",
  background: palette.button.default,
  color: palette.monochrome.white,
  width: "22.5rem",
  marginTop: "0.5rem",
  padding: "0.9375rem",
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

export default function MobileLogin() {
  const [_, setData] = useState<ILogin>();
  const [userId, setUserId] = useState<string>();
  const [loginError, setLoginError] = useState<boolean>(false);
  const [permission, setPermissionState] = useState<string | null>(
    getPermission()
  );

  const fetchData = async ({ email, password }: ILogin) => {
    await LoginService.login(email, password)
      .then((resp) => {
        console.log(resp);
        setUserId(resp.id.toString());
        setUser(5);
        if (permission === "manager") {
          navigate("/managerr/dashboard");
        } else {
          navigate("/tasks");
        }
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        setLoginError(true);
      });
  };

  useEffect(() => {
    if (userId) {
      localStorage.setItem("userId", userId.toString());
    }
  }, [userId]);

  const navigate = useNavigate();

  const handleOnChange = () => {
    if (permission === "manager") {
      setPermission("visitor");
      setPermissionState("visitor");
    } else if (permission === "visitor") {
      setPermission("manager");
      setPermissionState("manager");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "ivanov.a.f@sovkom.bank",
      password: "testpass48",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setData(values);
      resetForm();
      fetchData(values);
      // if (permission === "manager") {
      //   navigate("/manager/dashboard");
      // } else {
      //   navigate("/tasks");
      // }
      // window.location.reload();
      // localStorage.setItem("userId", "1234");
    },
  });

  return (
    <LoginLayoutMobile>
      <Snackbar
        open={loginError}
        onClose={() => setLoginError(false)}
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert severity="error">Что-то пошло не так</Alert>
      </Snackbar>
      <LoginFormMobile onSubmit={formik.handleSubmit}>
        <TypographyH1Mobile>
          Вход в Совкомбанк Визитер
          <SovcomBankLogoMobile />
        </TypographyH1Mobile>
        <StyledInputMobile
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Корпоративная почта"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            <Typography>
              {formik.touched.email && formik.errors.email}
            </Typography>
          }
        />
        <StyledInputMobile
          value={formik.values.password}
          id="password"
          name="password"
          // type="password"
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          placeholder="Пароль"
          helperText={
            <Typography>
              {formik.touched.password && formik.errors.password}
            </Typography>
          }
        />
        <Box>
          <span>Курьер</span>
          <Switch
            checked={permission === "manager"}
            onChange={handleOnChange}
          />
          <span>Менеджер</span>
        </Box>
        <StyledButton type="submit">Войти</StyledButton>
        {/*Пока что здесь будет заглушка и переход сразу на стартовую страницу */}
      </LoginFormMobile>
    </LoginLayoutMobile>
  );
}
