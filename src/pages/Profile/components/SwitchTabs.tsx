import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { Tab } from "@mui/base/Tab";
import { TabPanel } from "@mui/base/TabPanel";

import { PieChart } from "@mui/x-charts/PieChart";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { palette } from "../../../shared/config/palette";
import { typographyMobile } from "../../../shared/config/typography";

type TTab = "month" | "quarter";

const ProfileData = {
  month: [
    {
      id: 0,
      value: 84,
      color: palette.button.default,
    },
    { id: 1, value: 16, color: "#FC50554D" },
  ],
  quarter: [
    {
      id: 0,
      value: 50,
      color: palette.button.default,
    },
    { id: 1, value: 50, color: "#FC50554D" }, // TODO: value here is for not used KPI
  ],
};

const TabsListStyled = styled(TabsList)({
  background: "#F0F0F2",
  borderRadius: "0.5625rem",
  width: "11.25rem",
  height: "2.25rem",
  display: "flex",
  justifyContent: "center",
  gap: "0.75rem",
  alignItems: "center",
  marginBottom: "1.75rem",
});

const ActiveTab = styled(Tab)({
  boxShadow:
    "0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
  border: "none",
  borderRadius: "0.4375rem",
  backgroundColor: "white",
  padding: "0.175rem 0.625rem",
});

const InactiveTab = styled(Tab)({
  border: "none",
  borderRadius: "0.4375rem",
  padding: "0.175rem 0.625rem",
});

const TypographyH1Styled = styled(Typography)({
  ...typographyMobile.h1,
});

const TypographyTextStyled = styled(Typography)({
  ...typographyMobile.body1,
});

export default function SwitchTabs({ kpiValue }: { kpiValue: number }) {
  const [tabIndex, setTabIndex] = useState<TTab>("month");
  const [data, setData] = useState<typeof ProfileData>();

  useEffect(() => {
    setData(ProfileData);
  }, []);
  return (
    <>
      {data && (
        <Tabs
          defaultValue={"month"}
          style={{
            height: "13.75rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          onChange={(_, value) => setTabIndex(value as TTab)}
        >
          <TabsListStyled>
            {tabIndex === "month" ? (
              <ActiveTab value={"month"}>
                <Typography>Месяц</Typography>
              </ActiveTab>
            ) : (
              <InactiveTab value={"month"}>
                <Typography>Месяц</Typography>
              </InactiveTab>
            )}
            {tabIndex === "quarter" ? (
              <ActiveTab value={"quarter"}>
                <Typography>Квартал</Typography>
              </ActiveTab>
            ) : (
              <InactiveTab value={"quarter"}>
                <Typography>Квартал</Typography>
              </InactiveTab>
            )}
          </TabsListStyled>
          <TabPanel value={"month"}>
            <PieChart
              tooltip={{ trigger: "none" }}
              width={350}
              height={160}
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: kpiValue,
                      color: kpiValue > 80 ? "#2DDF5F" : palette.button.default,
                    },
                    {
                      id: 1,
                      value: 100 - kpiValue,
                      color: kpiValue > 80 ? "#2DDF5F4D" : "#FC50554D",
                    },
                  ],
                  outerRadius: 80,
                  innerRadius: 65,
                  paddingAngle: 3,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,
                  cx: 175,
                },
              ]}
            />
            <Box textAlign={"center"} width="5.125rem" margin={"-125px 140px"}>
              <TypographyH1Styled>{kpiValue || 0}%</TypographyH1Styled>
              <TypographyTextStyled>
                {kpiValue > 80 ? "Успешно выполнено!" : "План не выполнен"}
              </TypographyTextStyled>
            </Box>
          </TabPanel>
          <TabPanel value={"quarter"}>
            <PieChart
              tooltip={{ trigger: "none" }}
              width={350}
              height={160}
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: 0,
                      color: palette.button.default,
                    },
                    { id: 1, value: 100, color: "#FC50554D" }, // TODO: value here is for not used KPI
                  ],
                  outerRadius: 80,
                  innerRadius: 65,
                  paddingAngle: 3,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,
                  cx: 175,
                },
              ]}
            />
            <Box textAlign={"center"} width="5.125rem" margin={"-125px 140px"}>
              <TypographyH1Styled>{0}%</TypographyH1Styled>
              <TypographyTextStyled>
                {data.quarter[0].value > 80
                  ? "Успешно выполнено!"
                  : "План не выполнен"}
              </TypographyTextStyled>
            </Box>
          </TabPanel>
        </Tabs>
      )}
    </>
  );
}
