import Typography from "@mui/material/Typography";
import { typographyDesktop } from "../../../shared/config/typography";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "../../../shared/components/Tabs/TabList";
import { Tab } from "../../../shared/components/Tabs/Tab";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { theme } from "../../../app/providers/ThemeProvider/theme";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import Bank from "../../../shared/assets/bank.png";
import Learning from "../../../shared/assets/learning.png";
import Courier from "../../../shared/assets/courier.png";
import ChartLayout from "../DialogChat.tsx/components/ChartLayout";

import { styled } from "@mui/material";

const ChatHeader = styled(Box)({
  width: "100%",
  paddingTop: "1.5rem",
  paddingBottom: "0.2rem",
  marginBottom: "0.2rem",
  background: theme.palette.common.white,
  color: theme.palette.common.black,
});

const ManagerChatPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography sx={{ ...typographyDesktop.h1 }}>Чат</Typography>

      <Tabs
        style={{ marginBottom: "2rem", width: "300px", marginTop: "2rem" }}
        defaultValue={1}
      >
        <TabsList>
          <Tab value={1}>Открытые запросы</Tab>
          <Tab value={2}>Закрытые запросы</Tab>
        </TabsList>
      </Tabs>
      <Stack height={"81vh"} direction={"row"}>
        <Box width="100%" borderRight={"1px solid rgba(0, 0, 0, 0.12) "}>
          <List sx={{ width: "100%", padding: 0 }}>
            <ListItem onClick={() => navigate("/managerr/chats/0")}>
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
            <ListItem onClick={() => navigate("/managerr/chats/1")}>
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
                primary={
                  <Typography fontWeight={500}>2. Обучение а...</Typography>
                }
                secondary={
                  <Typography sx={{ color: "#8D8E90", fontSize: " 0.875rem" }}>
                    Перезвоню через 10 минут
                  </Typography>
                }
              />
            </ListItem>
            <Divider />
            <ListItem onClick={() => navigate("/managerr/chats/2")}>
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
                primary={
                  <Typography fontWeight={500}>3. Доставка ка..</Typography>
                }
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
        <Box
          width={"100%"}
          height={"100%"}
          sx={{ background: "rgba(221, 234, 254, 0.30)" }}
        >
          <ChatHeader>
            <Stack
              direction="row"
              alignItems={"center"}
              sx={{ marginLeft: "1rem", marginBottom: "1.19rem" }}
            >
              <Stack direction="row" alignItems={"center"} marginLeft={"1rem"}>
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
                <Typography
                  variant={"h6"}
                  sx={{
                    color: theme.palette.common.black,
                    lineHeight: "125%",
                    letterSpacing: "-0.01rem",
                    fontSize: "1rem",
                  }}
                >
                  1. Выезд на точку для стимулирования выдач
                </Typography>
              </Stack>
            </Stack>
          </ChatHeader>
          <Box sx={{ padding: "1rem" }}>
            <ChartLayout />
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default ManagerChatPage;
