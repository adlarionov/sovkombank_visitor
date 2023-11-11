import { Button, Typography, styled } from "@mui/material";
import Box from "@mui/material/Box";
import { typographyDesktop } from "../../config/typography";
import { ITableData } from "./components/TableData";
import BadgeStyled from "../BadgeStyled";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TypographyCaption = styled(Typography)({
  ...typographyDesktop.caption,
  color: "#616161",
});

const StyledButton = styled(Button)({
  background: "none",
  padding: "0",
  width: "fit-content",
  height: "fit-content",
});

export default function TableTasks({
  columns,
  additionalTasks,
  onEdit,
}: {
  columns: string[];
  additionalTasks: ITableData[];
  onEdit: (value: string) => void;
}) {
  const [taskList, setTaskList] = useState<ITableData[]>(additionalTasks);

  const navigate = useNavigate();

  const handleDeleteRow = (id: number) => {
    const tasks = taskList.filter((task) => {
      return task.type !== id;
    });
    setTaskList(tasks);
  };

  const handleEditTaskType = (taskTypeId: number) => {
    navigate({
      search: `?editTask=${taskTypeId}`,
    });
    onEdit(`?editTask=${taskTypeId}`);
  };

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={`
        0.25fr
        1fr
        1fr
        1fr
        2fr
        2fr
        0.5fr
        0.5fr
      `}
      bgcolor={"#FFF"}
      paddingX={"1.5rem"}
      paddingY={"1.25rem"}
      borderRadius={"0.625rem"}
      gap="1.5rem"
    >
      {columns.map((column) => (
        <TypographyCaption>{column}</TypographyCaption>
      ))}
      {taskList.map((task) => (
        <>
          <Typography>{task.type}</Typography>
          <Typography>{task.name}</Typography>
          <Box>
            <BadgeStyled
              status={
                task.priority === "Высокий"
                  ? "danger"
                  : task.priority === "Средний"
                  ? "warning"
                  : "success"
              }
              badgeContent={task.priority}
              isIcon={true}
            />
          </Box>
          <Typography>{task.time}</Typography>
          <Typography>{task.firstCondition}</Typography>
          <Typography>{task.secondCondition}</Typography>
          <Box display={"flex"} flexDirection={"column"} gap={"0.25rem"}>
            {task.employeeLevels.map((level) => (
              <BadgeStyled
                status={
                  level === "Сеньёр"
                    ? "danger"
                    : level === "Мидл"
                    ? "warning"
                    : "success"
                }
                badgeContent={level}
                isIcon={true}
              />
            ))}
          </Box>
          <Box display="flex">
            <StyledButton onClick={() => handleDeleteRow(task.type)}>
              <DeleteOutlinedIcon />
            </StyledButton>
            <StyledButton
              onClick={() => handleEditTaskType(task.type)}
              style={{ color: "#3657CD" }}
            >
              <EditOutlinedIcon />
            </StyledButton>
          </Box>
        </>
      ))}
    </Box>
  );
}
