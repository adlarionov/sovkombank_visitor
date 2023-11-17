// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck TODO
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Stack, styled } from "@mui/material";
import { typographyDesktop } from "../../shared/config/typography";
import { DashboardCard } from "../../shared/components/DashboardCard";

import { BarChart } from "@mui/x-charts/BarChart";
import { theme } from "../../app/providers/ThemeProvider/theme";

import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import getTime from "../../shared/hooks/getTime";

const StyledTypography = styled(Typography)({
  ...typographyDesktop.h1,
});

const DashboardContent = styled(Box)({
  marginTop: "2.5rem",
});

const GridBoxRow1 = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  columnGap: "1.5rem",
});

const GridBoxRow2 = styled(Box)({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
});

const data = [
  {
    label: "Выезд на точку для стимулирования продаж",
    value: 12,
    color: "#8EEE2E",
  },
  { label: "Обучение агентов", value: 16, color: "#003790" },
  { label: "Доставка карт и материалов", value: 13, color: "#FC5055" },
];

const DashboardPage = () => {
  const today = getTime();

  return (
    <Box>
      <Stack direction="row" justifyContent={"space-between"}>
        <StyledTypography>Дашборд</StyledTypography>
        <Button
          sx={{
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
            borderRadius: "4.6875rem",
            boxShadow: " 0px 4px 3px 0px rgba(0, 0, 0, 0.02)",
            padding: "0.625rem 0.9375rem",
          }}
        >
          Запустить алгоритм
        </Button>
      </Stack>
      <DashboardContent>
        <GridBoxRow1>
          <DashboardCard title="Задач запланировано" count={7} date={today} />
          <DashboardCard
            title="Задачи выполнено"
            count={2}
            date={today}
            color="#2F9461"
          />
          <DashboardCard
            title="Задач не выполнено"
            count={5}
            date={today}
            color="#CD3636"
          />
        </GridBoxRow1>
        <GridBoxRow2>
          <Box
            padding={"1.25rem"}
            sx={{
              background: theme.palette.background.paper,
              width: "98%",
              marginTop: "1.25rem",
              borderRadius: "1.25rem",
              marginRight: "1.25px",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
            >
              <Box>
                <Typography sx={{ ...typographyDesktop.caption }}>
                  Соотношение
                </Typography>
                <Typography
                  sx={{ ...typographyDesktop.h1, fontSize: "1.75rem" }}
                >
                  KPI за ноябрь
                </Typography>
              </Box>
              <Stack direction={"row"}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  marginRight={"0.5rem"}
                >
                  <FiberManualRecordRoundedIcon
                    sx={{
                      color: "#FC5055",
                      fontSize: "0.8rem",
                      marginRight: "0.25rem",
                    }}
                  />
                  <Typography>KPI</Typography>
                </Stack>
              </Stack>
            </Stack>

            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: [
                    "Дерягин Н.В.",
                    "Евдокимов Д.Т.",
                    "Николаев А.П.",
                    "Петрошев В.П.",
                    "Андреев Г.Д.",
                    "Мызников В.А.",
                  ],
                  categoryGapRatio: 0.5,
                  barGapRatio: 0.1,
                  tickLabelStyle: {
                    fontSize: 10,
                    color: theme.palette.common.black,
                  },
                  borderRadius: "4px",
                },
              ]}
              series={[
                {
                  data: [100, 90, 125, 125, 125, 125],
                  color: "#FC5055",
                  // label: "KPI",
                },
              ]}
              height={300}
            />
          </Box>
          <Box
            padding={"1.25rem"}
            sx={{
              background: theme.palette.background.paper,
              width: "100%",
              marginTop: "1.25rem",
              borderRadius: "1.25rem",
            }}
          >
            <Typography sx={{ ...typographyDesktop.caption }}>
              Количество
            </Typography>
            <Typography sx={{ ...typographyDesktop.h1, fontSize: "1.75rem" }}>
              Задач за ноябрь
            </Typography>
            <PieChart
              series={[
                {
                  startAngle: -90,
                  endAngle: 90,
                  data,
                  arcLabel: (item) => `${item.value}`,
                  arcLabelMinAngle: 45,
                  innerRadius: 100,
                  outerRadius: 150,
                  cy: 300,
                  cx: (document.body.clientWidth - 181) / 8,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontWeight: "bold",
                },
              }}
              slotProps={{
                legend: {
                  direction: "column",
                  position: { vertical: "top", horizontal: "left" },
                  padding: 10,
                },
              }}
              height={300}
            />
          </Box>
        </GridBoxRow2>
      </DashboardContent>
    </Box>
  );
};

export default DashboardPage;
