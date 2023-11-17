import Stack from "@mui/material/Stack";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../../../app/providers/ThemeProvider/theme";
import { typographyMobile } from "../../config/typography";
import ConfirmDialog from "../ConfirmDialog";
import { useEffect, useState } from "react";
import { getTime, setTime, stopTime } from "../../hooks/useTime";

interface TaskCardProps {
  title: string;
  address: string;
  time: string;
  priority: string;
  comment?: string;
  openTaskList?: () => void;
  taskNumber?: number;
}

const TypographyH1Mobile = styled(Typography)({
  ...typographyMobile.h1,
  marginBottom: "1rem",
  width: "13.9375rem",
});

const TaskCard = ({
  time,
  title,
  priority,
  address,
  openTaskList,
  taskNumber,
}: TaskCardProps) => {
  const [wastedTime, setWastedTime] = useState<string>("00:00");
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const handleStartTask = () => {
    setTime();
    setIsStarted(true);
  };

  const handleStopTask = () => {
    stopTime();
    setIsStarted(false);
  };

  useEffect(() => {
    const startTime = getTime();
    if (startTime) {
      setIsStarted(true);
      const currentTime = Date.now();
      const deltaHours = Math.floor(
        ((currentTime - startTime) / (1000 * 3600)) % 24
      );
      const deltaMinutes = Math.floor(
        ((currentTime - startTime) / (1000 * 60)) % 24
      );
      setWastedTime(
        `${deltaHours < 10 ? `0${deltaHours}` : deltaHours}:${
          deltaMinutes < 10 ? `0${deltaMinutes}` : deltaMinutes
        }`
      );
    }
  }, []);

  return (
    <Stack>
      {taskNumber ? (
        <TypographyH1Mobile>{`Задача № ${taskNumber}`}</TypographyH1Mobile>
      ) : null}
      <Stack direction="row">
        <Stack direction="row">
          <Stack
            direction="row"
            alignItems={"center"}
            sx={{
              color: theme.palette.primary.dark,
              padding: "0.5rem",
              background: "#FDE9E9E5",
              borderRadius: " 1.25rem",
              fontWeight: 600,
            }}
          >
            <FiberManualRecordRoundedIcon sx={{ fontSize: "0.8rem" }} />
            <Typography sx={{ marginLeft: "0.3rem", fontWeight: 500 }}>
              {priority}
            </Typography>
          </Stack>
          <Box
            sx={{
              padding: "0.5rem",
              borderRadius: "1.25rem",
              border: "1px solid  #E0E0E0",
              ml: "0.25rem",
            }}
          >
            {time}
          </Box>
        </Stack>

        {openTaskList && (
          <Typography
            sx={{
              marginLeft: "auto",
              textDecoration: "none",
              color: theme.palette.secondary.main,
              paddingTop: "0.5rem",
            }}
            onClick={openTaskList}
          >
            Список задач
          </Typography>
        )}
      </Stack>
      <Typography
        sx={{ fontWeight: 500, fontSize: "1.5rem", marginTop: "0.5rem" }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "0.875rem",
          marginTop: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        {address}
      </Typography>
      <Stack
        direction="row"
        sx={{
          // background: theme.palette.grey[300],
          padding: "1rem",
          borderRadius: "0.5rem",
          minHeight: "6rem",
          marginRight: "0.5rem",
        }}
      >
        {/* <CommentIcon />
        <Typography sx={{ marginLeft: "0.5rem" }}>
          {comment ? comment : "Комментарий отсутсвует"}
        </Typography> */}
      </Stack>
      <Link
        style={{
          textDecoration: "none",
          color: theme.palette.secondary.main,
          marginTop: "0.5rem",
        }}
        to={"/chats"}
      >
        Чат с менеджером
      </Link>
      {!isStarted ? (
        <ConfirmDialog buttonText="Начать" onConfirmClick={handleStartTask} />
      ) : (
        <>
          <ConfirmDialog
            buttonText={`Завершить (${wastedTime})`}
            onConfirmClick={handleStopTask}
          />
        </>
      )}
    </Stack>
  );
};

export default TaskCard;
