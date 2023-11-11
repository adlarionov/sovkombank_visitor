import Box from "@mui/material/Box";
import { theme } from "../../../app/providers/ThemeProvider/theme";
import {
  Avatar,
  ListItemAvatar,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import ChartLayout from "./components/ChartLayout";

import Bank from "../../../shared/assets/bank.png";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useNavigate } from "react-router-dom";

const ChatHeader = styled(Box)({
  width: "100%",
  position: "fixed",
  paddingTop: "1.5rem",
  background: theme.palette.secondary.main,
  //   height: "5.06rem",
  top: 0,
});

const DialogChat = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <ChatHeader>
        <Stack
          direction="row"
          alignItems={"center"}
          sx={{ marginLeft: "1rem", marginBottom: "1.19rem" }}
        >
          <ArrowBackIosNewRoundedIcon
            sx={{ color: theme.palette.common.white }}
            onClick={() => navigate("/chats")}
          />
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
                color: theme.palette.common.white,
                lineHeight: "125%",
                letterSpacing: "-0.01rem",
              }}
            >
              1. Выезд на точку для стимулирования выдач
            </Typography>
          </Stack>
        </Stack>
      </ChatHeader>

      <Box sx={{ padding: "0.5rem 1rem", marginTop: "6rem" }}>
        <ChartLayout />
      </Box>
    </Box>
  );
};

export default DialogChat;
