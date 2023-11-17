import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoopIcon from "@mui/icons-material/Loop";

import { Skeleton, styled } from "@mui/material";
import { palette } from "../../shared/config/palette";
import { typographyMobile } from "../../shared/config/typography";

import BadgeStyled from "../../shared/components/BadgeStyled";
import SwitchTabs from "./components/SwitchTabs";
import Achivement from "./components/Achivement";

import Chart from "../../shared/assets/chart.png";
import Running from "../../shared/assets/running.png";
import Trophy from "../../shared/assets/trophy.png";
import { useNavigate } from "react-router-dom";
import { getUser, removeUser } from "../../shared/hooks/useUser";
import WorkersService from "../../shared/services/workersService";
import IWorker from "../../shared/interfaces/IWorker";
import useSWR from "swr";
import RequestError from "../../shared/components/RequestError";
import IKpi from "../../shared/interfaces/IKpi";

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

const getUserData: () => Promise<IWorker> = async () =>
  await WorkersService.getWorkersById(Number(getUser()));

const getUserDataKpi: () => Promise<IKpi> = async () =>
  await WorkersService.getWorkersKPIById(Number(getUser()));

export default function MobileProfile() {
  const navigate = useNavigate();
  const { data, error, mutate } = useSWR<IWorker>(getUser(), getUserData);

  const swrData = useSWR<IKpi>("/kpi_by_id", getUserDataKpi);

  if (error) {
    console.error(error);
    return <RequestError errorDescription={error} reload={mutate} />;
  }

  console.log(error);

  return (
    <ProfileLayoutMobile>
      <ButtonStyled
        color="inherit"
        onClick={() => {
          navigate("/login");
          removeUser();
        }}
      >
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
          <Box
            component="img"
            src="/images/profile.png"
            alt={data && data.image_link}
          />
          {data ? (
            <>
              <TypographyH1Styled>{data.name.split(" ")[1]}</TypographyH1Styled>
              <BadgeStyled
                badgeContent={`${data.grade}-специалист`}
                status="warning"
                isIcon={false}
              />
            </>
          ) : (
            <>
              <Skeleton animation="wave" width={100} height={40} />
              <Skeleton animation="wave" width={150} height={30} />
            </>
          )}
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
          {swrData.data ? (
            <SwitchTabs kpiValue={swrData.data.kpi} />
          ) : (
            <Skeleton />
          )}
          <Box
            display={"flex"}
            marginTop={"1.5rem"}
            alignItems={"center"}
            gap="0.5rem"
          >
            <LoopIcon width={30} height={30} htmlColor="#2DDF5F" />
            {swrData.data ? (
              <TypographyTextStyled>
                <strong>Обновлено:</strong> {swrData.data.updated.split(" ")[0]}
              </TypographyTextStyled>
            ) : (
              <Skeleton animation="wave" width={100} />
            )}
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
