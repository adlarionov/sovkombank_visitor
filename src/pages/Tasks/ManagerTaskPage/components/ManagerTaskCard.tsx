import Box from "@mui/material/Box";
import { typographyDesktop } from "../../../../shared/config/typography";
import { Typography, styled, Button } from "@mui/material";
import BadgeStyled from "../../../../shared/components/BadgeStyled";
import { ITaskCard } from "../../../../shared/interfaces/ITaskCard";

const TypographyH3Desktop = styled(Typography)({
  ...typographyDesktop.h3,
  marginBottom: "1rem",
  maxWidth: "18rem",
});

const TypographyCaption = styled(Typography)({
  ...typographyDesktop.caption,
  color: "#616161",
});

export default function ManagerTaskCard({
  task,
  size,
}: {
  task: ITaskCard;
  size: "big" | "small";
}) {
  console.log(size);
  return (
    <Box
      padding={"1.25rem"}
      bgcolor={"#FFF"}
      borderRadius={"1.25rem"}
      marginBottom={"1.25rem"}
      height="fit-content"
    >
      <Box display="flex" alignItems="start" justifyContent={"space-between"}>
        <TypographyH3Desktop>{task.title}</TypographyH3Desktop>
        <Button
          variant="contained"
          sx={{
            borderRadius: "4.5rem",
            boxShadow: "none",
            textTransform: "none",
            backgroundColor: "#003790",
            ":hover": {
              backgroundColor: "#003790",
              boxShadow: "none",
            },
          }}
        >
          Открыть чат
        </Button>
      </Box>
      <TypographyCaption marginBottom={"1.5rem"}>
        {task.address}
      </TypographyCaption>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        rowGap="0.5rem"
        marginBottom="1.5rem"
        alignItems="center"
      >
        <TypographyCaption>Время</TypographyCaption>
        <TypographyCaption>Приоритет</TypographyCaption>
        <TypographyCaption>Сотрудник</TypographyCaption>
        <Box
          sx={{
            padding: "0.375rem",
            borderRadius: "1.25rem",
            border: "1px solid #E0E0E0",
            width: "fit-content",
          }}
        >
          <Typography fontSize="0.875rem" color="#000" fontWeight={"500"}>
            {task.time}
          </Typography>
        </Box>
        <BadgeStyled
          status={task.priority === "Высокий" ? "danger" : "success"}
          badgeContent={task.priority}
          isIcon={true}
        />
        <Typography fontWeight={"500"}>{task.employee}</Typography>
      </Box>
      {/* <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"start"}
        justifyContent={"space-between"}
        sx={{
          borderRadius: "0.5rem",
          minHeight: "fit-content",
        }}
      >
        {size === "big" && (
          <Box
            width="100%"
            display="flex"
            gap="0.5rem"
            bgcolor={theme.palette.grey[300]}
            padding="1rem"
            borderRadius={"1rem"}
          >
            <CommentIcon />
            <Typography sx={{ marginLeft: "0.5rem" }}>
              Необходимо связаться с digital-отделом после выполнения задачи для
              проверки нового функционала
            </Typography>
          </Box>
        )}
      </Box> */}
    </Box>
  );
}
