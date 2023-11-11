import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { typographyDesktop } from "../../../shared/config/typography";
import { Button, styled } from "@mui/material";
import ExcelIcon from "../../../shared/components/Icons/ExcelIcon";
import { theme } from "../../../app/providers/ThemeProvider/theme";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import TableEmployees from "../../../shared/components/Table/TableEmployees";
import { employeesColumns } from "../../../shared/components/Table/components/Columns";
import { ITableDataEmployees } from "../../../shared/components/Table/components/TableData";

const TypographyH1Desktop = styled(Typography)({
  ...typographyDesktop.h1,
});

const TypographyButton = styled(Typography)({
  fontSize: "1rem",
  fontWeight: 500,
});

const StyledButton = styled(Button)({
  textTransform: "none",
  color: "black",
  padding: "0.5rem 1rem",
  borderRadius: "4.5rem",
});

export default function Employees({
  employeesList,
  onCreate,
}: {
  employeesList: ITableDataEmployees[];
  onCreate: (searchParam: string) => void;
}) {
  const handleAddDepartment = () => {
    onCreate("?create=true");
    console.log("here")
  };

  return (
    <Stack direction={"column"} gap={"1.25rem"} marginTop={"1.25rem"}>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        marginTop={"1.25rem"}
      >
        <TypographyH1Desktop>Сотрудники</TypographyH1Desktop>
        <Stack direction="row" gap={"0.5rem"}>
          <StyledButton sx={{ bgcolor: "white" }}>
            <Stack direction="row" gap={"0.5rem"}>
              <ExcelIcon />
              <TypographyButton>Скачать в Excel</TypographyButton>
            </Stack>
          </StyledButton>
          <StyledButton
            sx={{ bgcolor: theme.palette.primary.main }}
            onClick={handleAddDepartment}
          >
            <Stack direction="row" gap={"0.5rem"}>
              <AddRoundedIcon htmlColor="white" />
              <TypographyButton color={"white"} onClick={handleAddDepartment}>
                Добавить сотрудника
              </TypographyButton>
            </Stack>
          </StyledButton>
        </Stack>
      </Stack>
      <TableEmployees
        onEdit={onCreate}
        columns={employeesColumns}
        additionalEmployees={employeesList}
      />
    </Stack>
  );
}
