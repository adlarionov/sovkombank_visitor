import { Button, Stack, Typography, styled } from "@mui/material";
import { typographyDesktop } from "../../../shared/config/typography";
import ExcelIcon from "../../../shared/components/Icons/ExcelIcon";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { theme } from "../../../app/providers/ThemeProvider/theme";
import TableDepartments from "../../../shared/components/Table/TableDepartments";
import { addressColumns } from "../../../shared/components/Table/components/Columns";
import { ITableDataAddresses } from "../../../shared/components/Table/components/TableData";
import { useNavigate } from "react-router-dom";
import { utils, writeFile } from "xlsx";

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

export default function Departments({
  departmentList,
  onCreate,
}: {
  departmentList: ITableDataAddresses[];
  onCreate: (searchParam: string) => void;
}) {
  const navigate = useNavigate();

  const handleAddDepartment = () => {
    navigate({
      search: "?create=true",
    });
    onCreate("?create=true");
  };

  const handleExcelExport = () => {
    const ws = utils.json_to_sheet(departmentList);

    const workBook = utils.book_new();
    utils.book_append_sheet(workBook, ws, "Отделы");
    writeFile(workBook, "Отделы.xlsx");
  };

  return (
    <Stack flexDirection={"column"} gap={"1.25rem"}>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        marginTop={"1.25rem"}
      >
        <TypographyH1Desktop>Отделения</TypographyH1Desktop>
        <Stack direction="row" gap={"0.5rem"}>
          <StyledButton sx={{ bgcolor: "white" }} onClick={handleExcelExport}>
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
                Создать отделение
              </TypographyButton>
            </Stack>
          </StyledButton>
        </Stack>
      </Stack>
      <TableDepartments
        columns={addressColumns}
        additionalDepartments={departmentList}
        onEdit={onCreate}
      />
    </Stack>
  );
}
