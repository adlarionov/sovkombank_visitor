import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoopIcon from "@mui/icons-material/Loop";

import { styled } from "@mui/material";
import { palette } from "../../shared/config/palette";
import { typographyMobile } from "../../shared/config/typography";

import BadgeStyled from "../../shared/components/BadgeStyled";
import SwitchTabs from "./components/SwitchTabs";
import Achivement from "./components/Achivement";

import Chart from "../../shared/assets/chart.png";
import Running from "../../shared/assets/running.png";
import Trophy from "../../shared/assets/trophy.png";
import { useNavigate } from "react-router-dom";

const ProfileLayoutMobile = styled("div")({
  background: palette.background.tertiary,
  height: "100%",
  position: "relative",
});

const LogoutRoundedIconStyled = styled(LogoutRoundedIcon)({
  width: 30,
  height: 30,
});

const ButtonStyled = styled(Button)({
  position: "absolute",
  top: "2rem",
  right: "0.5rem",
  padding: "0.5rem 0",
});

const TypographyH1Styled = styled(Typography)({
  ...typographyMobile.h1,
});

const TypographyH2Styled = styled(Typography)({
  ...typographyMobile.h2,
});

const TypographyTextStyled = styled(Typography)({
  ...typographyMobile.body1,
});

export default function MobileProfile() {
  const navigate = useNavigate();

  return (
    <ProfileLayoutMobile>
      <ButtonStyled color="inherit" onClick={() => navigate("/login")}>
        <LogoutRoundedIconStyled />
      </ButtonStyled>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        paddingTop="2.5rem"
        gap="0.5rem"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="0.5rem"
          marginBottom="2rem"
        >
          <Box component="img" src="/images/profile.png" />
          <TypographyH1Styled>Данила</TypographyH1Styled>
          <BadgeStyled
            badgeContent="Мидл-специалист"
            status="warning"
            isIcon={false}
          />
        </Box>
        <Box
          className="KPI Card"
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="22.5625rem"
          height="21.875rem"
          marginBottom="1.5rem"
          style={{
            backgroundColor: palette.monochrome.white,
            borderRadius: "1rem",
          }}
        >
          <TypographyH2Styled
            style={{ marginTop: "1rem", marginBottom: "0.5rem" }}
          >
            Ваш KPI
          </TypographyH2Styled>
          <SwitchTabs />
          <Box
            display={"flex"}
            marginTop={"1.5rem"}
            alignItems={"center"}
            gap="0.5rem"
          >
            <LoopIcon width={30} height={30} htmlColor="#2DDF5F" />
            <TypographyTextStyled>
              <strong>Обновлено:</strong> Сегодня в 9:00
            </TypographyTextStyled>
          </Box>
        </Box>
        <Box
          className="Achivement Card"
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="22.5625rem"
          height="33.75rem"
          marginBottom="6rem"
          style={{
            backgroundColor: palette.monochrome.white,
            borderRadius: "1rem",
          }}
        >
          <TypographyH2Styled
            style={{ marginTop: "1rem", marginBottom: "1.5rem" }}
          >
            Достижения
          </TypographyH2Styled>
          <Achivement
            emoji={<Box component={"img"} src={Running} />}
            title="Быстрее ветра"
            value={72}
            description="Заверши 25 заказов раньше плана"
          />
          <Achivement
            emoji={<Box component={"img"} src={Chart} />}
            title="Потенциал"
            value={100}
            description="Перевыполни KPI"
          />
          <Achivement
            emoji={<Box component={"img"} src={Trophy} />}
            title="Победитель"
            value={0}
            description="Перевыполни KPI за квартал"
          />
        </Box>
      </Box>
    </ProfileLayoutMobile>
  );
}
