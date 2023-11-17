import {
  Box,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  styled,
} from "@mui/material";
import Button from "@mui/material/Button";
import { typographyDesktop } from "../../../shared/config/typography";
import { ITableDataEmployees } from "../../../shared/components/Table/components/TableData";
import { useFormik } from "formik";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)({
  color: "black",
  position: "absolute",
  top: "1.5rem",
  ":hover": {
    backgroundColor: "#F6F7F8",
    boxShadow: "none",
  },
});

const StyledSaveButton = styled(Button)({
  ...typographyDesktop.button,
  fontWeight: "400",
  padding: "1rem 0",
  boxShadow: "none",
  borderRadius: "6.25rem",
  textTransform: "none",
  ":hover": {
    boxShadow: "none",
  },
});

const TypographyH1Desktop = styled(Typography)({
  ...typographyDesktop.h1,
});

export default function EmployeeChangeForm({
  type,
  onSubmitForm,
  employee,
}: {
  type: "create" | "edit";
  onSubmitForm: (values: ITableDataEmployees) => void;
  employee?: ITableDataEmployees;
}) {
  const navigate = useNavigate();

  const formik = useFormik<ITableDataEmployees>({
    initialValues: {
      number: employee ? employee.number : "",
      address: employee ? employee.address : "",
      credential: employee ? employee.credential : "",
      grade: employee ? employee.grade : "",
    },
    onSubmit: (values, { resetForm }) => {
      onSubmitForm(values);
      navigate("/managerr/employees");
      resetForm();
    },
  });

  return (
    <Box>
      <StyledButton onClick={() => navigate("/managerr/employees")}>
        <ChevronLeftRoundedIcon />
      </StyledButton>
      <TypographyH1Desktop
        marginTop={"1rem"}
        marginBottom={"3rem"}
        textAlign={"center"}
      >
        {type === "create"
          ? "Добавление сотрудника"
          : "Редактирование сотрудника"}
      </TypographyH1Desktop>
      <form onSubmit={formik.handleSubmit}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1.25rem"}
          padding={"0 5rem"}
        >
          <Box
            display={"grid"}
            gap={"1.25rem"}
            gridTemplateColumns={"1fr 2fr"}
            width={"100%"}
          >
            <OutlinedInput
              id="number"
              name="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Номер"
            />
            <OutlinedInput
              id="credential"
              name="credential"
              value={formik.values.credential}
              onChange={formik.handleChange}
              sx={{ borderRadius: "0.625rem" }}
              placeholder="ФИО"
            />
          </Box>
          <Box
            display={"grid"}
            gap={"1.25rem"}
            gridTemplateColumns={"2fr 1fr"}
            width={"100%"}
          >
            <OutlinedInput
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Адрес"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            <Select
              sx={{ borderRadius: "0.625rem" }}
              id="grade"
              name="grade"
              value={formik.values.grade}
              onChange={formik.handleChange}
            >
              <MenuItem value="Сеньёр">Сеньёр</MenuItem>
              <MenuItem value="Мидл">Мидл</MenuItem>
              <MenuItem value="Джун">Джун</MenuItem>
            </Select>
          </Box>
          <Box display={"grid"} gridTemplateColumns={"1fr"} width={"100%"}>
            <StyledSaveButton variant="contained" type="submit">
              {type === "create"
                ? "Добавить сотрудника"
                : "Сохранить изменения"}
            </StyledSaveButton>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
