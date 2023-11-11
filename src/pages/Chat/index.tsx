import { Box, Divider, Typography, styled } from "@mui/material";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "../../shared/components/Tabs/TabList";
import { Tab } from "../../shared/components/Tabs/Tab";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { theme } from "../../app/providers/ThemeProvider/theme";
import { palette } from "../../shared/config/palette";
import { typographyMobile } from "../../shared/config/typography";

import Bank from "../../shared/assets/bank.png";
import Learning from "../../shared/assets/learning.png";
import Courier from "../../shared/assets/courier.png";
import { useNavigate } from "react-router-dom";

const TypographyH1Mobile = styled(Typography)({
  ...typographyMobile.h1,
  marginBottom: "1rem",
  width: "13.9375rem",
});

export default function Chat() {
  const navigate = useNavigate();
  return (
    <Box
      padding={"0rem 1rem 0 1rem"}
      sx={{ background: palette.background.tertiary }}
      height={"100vh"}
    >
      <TypographyH1Mobile
        sx={{ paddingTop: "1rem" }}
      >
        Чаты
      </TypographyH1Mobile>
      <Tabs style={{ marginBottom: "2rem" }} defaultValue={1}>
        <TabsList>
          <Tab value={1}>Открытые запросы</Tab>
          <Tab value={2}>Закрытые запросы</Tab>
        </TabsList>
      </Tabs>

      <List sx={{ width: "100%", padding: 0 }}>
        <ListItem onClick={() => navigate("/chats/0")}>
          <ListItemAvatar>
            <Avatar sx={{ background: theme.palette.common.white }}>
              <Box
                component={"img"}
                src={Bank}
                sx={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography fontWeight={500}>1. Выезд на то...</Typography>
            }
            secondary={
              <Typography sx={{ color: "#8D8E90", fontSize: " 0.875rem" }}>
                Перезвоню через 10 минут
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem onClick={() => navigate("/chats/1")}>
          <ListItemAvatar>
            <Avatar sx={{ background: theme.palette.common.white }}>
              <Box
                component={"img"}
                src={Learning}
                sx={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight={500}>2. Обучение а...</Typography>}
            secondary={
              <Typography sx={{ color: "#8D8E90", fontSize: " 0.875rem" }}>
                Перезвоню через 10 минут
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem onClick={() => navigate("/chats/2")}>
          <ListItemAvatar>
            <Avatar sx={{ background: theme.palette.common.white }}>
              <Box
                component={"img"}
                src={Courier}
                sx={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight={500}>3. Доставка ка..</Typography>}
            secondary={
              <Typography sx={{ color: "#8D8E90", fontSize: " 0.875rem" }}>
                Перезвоню через 10 минут
              </Typography>
            }
          />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
}
