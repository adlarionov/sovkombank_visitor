import { Box, Typography, styled } from "@mui/material";
import { theme } from "../../../../../app/providers/ThemeProvider/theme";

const BubbleContainer = styled(Box)({
  borderRadius: "10px",
  margin: "5px",
  padding: "10px",
  display: "flex",
  borderКadius: "0.5625rem 0.3125rem 0.3125rem 0.5625rem",
  flexDirection: "column",
});

const ChatLayout = () => {
  const dummyData = [
    {
      message: "1: This should be in left",
      direction: "left",
      time: "12:06 AM",
    },
    {
      message: "2: This should be in right",
      direction: "right",
      time: "12:34 AM",
    },
    {
      message: "3: This should be in left again",
      direction: "left",
      time: "12:58 AM",
    },
  ];

  const chatBubbles = dummyData.map((obj, i = 0) => (
    <Box width={"100%"} key={i}>
      <BubbleContainer
        sx={{
          float: obj.direction,
          background:
            obj.direction === "right" ? "#DDEAFE" : theme.palette.common.white,
          boxShadow:
            "0px 0px 1px 0px rgba(0, 0, 0, 0.35), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
        }}
        key={i++}
      >
        <div>{obj.message}</div>
        <Box
          sx={{
            marginLeft: "auto",
            width: "3.5rem",
            fontSize: "0.75rem",
            color:
              obj.direction === "right"
                ? theme.palette.secondary.main
                : "#A1AAB3",
          }}
        >
          {obj.time}
        </Box>
      </BubbleContainer>
    </Box>
  ));
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box
        sx={{
          background: "#72839166",
          margin: "0  1rem 0.5rem 1rem",
          padding: " 0.1875rem 0.4375rem",
          borderRadius: "1.97919rem",
          width: "6.5rem",
          textAlign: "center",
        }}
      >
        <Typography fontWeight={500} sx={{ color: theme.palette.common.white }}>
          5 Ноября
        </Typography>
      </Box>
      {chatBubbles}
    </Box>
  );
};

export default ChatLayout;
