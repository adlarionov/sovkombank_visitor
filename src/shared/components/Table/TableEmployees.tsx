import { Box, Button, Typography, styled } from "@mui/material";
import { typographyDesktop } from "../../config/typography";
import { ITableDataEmployees } from "./components/TableData";
import { useState } from "react";
import BadgeStyled from "../BadgeStyled";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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

export default function TableEmployees({
  columns,
  additionalEmployees,
  onEdit,
}: {
  columns: string[];
  additionalEmployees: ITableDataEmployees[];
  onEdit: (value: string) => void;
}) {
  const [employeesList, setEmployeesList] =
    useState<ITableDataEmployees[]>(additionalEmployees);

  const handleDeleteRow = (id: string) => {
    const employees = employeesList.filter((employee) => {
      return employee.number !== id;
    });
    setEmployeesList(employees);
  };

  const handleEditEmployee = (employeeId: string) => {
    onEdit(`?editEmployee=${employeeId}`);
  };

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={`
    0.25fr
    1fr
    1fr
    0.25fr
    0.25fr
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
      {employeesList.map((employee) => (
        <>
          <Typography>{employee.number}</Typography>
          <Typography>{employee.credential}</Typography>
          <Typography>{employee.address}</Typography>
          <Box>
            <BadgeStyled
              status={
                employee.grade === "Сеньёр"
                  ? "danger"
                  : employee.grade === "Мидл"
                  ? "warning"
                  : "success"
              }
              badgeContent={employee.grade}
              isIcon={true}
            />
          </Box>
          <Box display="flex">
            <StyledButton onClick={() => handleDeleteRow(employee.number)}>
              <DeleteOutlinedIcon />
            </StyledButton>
            <StyledButton
              onClick={() => handleEditEmployee(employee.number)}
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
