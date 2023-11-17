import Box from "@mui/material/Box";
import { theme } from "../../app/providers/ThemeProvider/theme";
import Typography from "@mui/material/Typography";
import { typographyMobile } from "../../shared/config/typography";
import ArrowIcon from "../../shared/components/Icons/ArrowIcon";
import Mocup from "../../shared/assets/MacbookMocap.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MobileDummy = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }, [navigate])
  

  return (
    <>
      <Box
        sx={{
          background: theme.palette.background.paper,
          height: "100vh",
          width: "100vw",
          padding: "4.28rem 0 0 1rem",
        }}
        zIndex={999}
      >
        <Typography sx={{ ...typographyMobile.h1 }}>
          <span style={{ color: theme.palette.primary.main }}>Упс! </span>
          Мобильная версия сервиса для вашей роли сейчас не доступна, так как
          находится в разработке
        </Typography>
        <Typography
          color={theme.palette.text.secondary}
          fontWeight={400}
          fontSize={"1rem"}
          marginTop="1rem"
        >
          Авторизуйтесь, используя ноутбук или персональный компьютер
        </Typography>
        <ArrowIcon
          sx={{ marginLeft: "18rem", zIndex: "2", position: "absolute" }}
        />
      </Box>
      <Box
        sx={{
          background: `url(${Mocup})`,
          width: "auto",
          height: "25.875rem",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        position={"absolute"}
        zIndex={0}
      />
    </>
  );
};

export default MobileDummy;
