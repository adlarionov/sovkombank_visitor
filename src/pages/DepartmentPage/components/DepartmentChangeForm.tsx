import {
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  styled,
} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { typographyDesktop } from "../../../shared/config/typography";
import { useNavigate } from "react-router-dom";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { useFormik } from "formik";
import { ITableDataAddresses } from "../../../shared/components/Table/components/TableData";
import PointService from "../../../shared/services/pointService";

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

const VisuallyHiddenInput = styled("input")({});

const TypographyH1Desktop = styled(Typography)({
  ...typographyDesktop.h1,
});

export default function DepartmentChangeForm({
  type,
  onSubmitForm,
  department,
}: {
  type: "create" | "edit";
  onSubmitForm: (values: ITableDataAddresses) => void;
  department?: ITableDataAddresses;
}) {
  const navigate = useNavigate();

  const formik = useFormik<ITableDataAddresses>({
    initialValues: {
      address: department ? department.address : "",
      id: department ? department.id : 0,
      approved_amount: department ? department.approved_amount : 0,
      given_amount: department ? department.given_amount : 0,
      days_passed: department ? department.days_passed : 0,
      when_connected: department ? department.when_connected : "",
      is_delivered: department ? department.is_delivered : "",
    },
    onSubmit: async (values, { resetForm }) => {
      type === "create"
        ? await PointService.addPoints(
            Number(values.id),
            values.address,
            values.when_connected,
            values.is_delivered,
            Number(values.given_amount),
            Number(values.approved_amount),
            Number(values.days_passed)
          )
        : await PointService.updatePointsById(
            Number(values.id),
            values.address,
            values.when_connected,
            values.is_delivered,
            Number(values.given_amount),
            Number(values.approved_amount),
            Number(values.days_passed)
          );
      onSubmitForm(values);
      alert(JSON.stringify(values, null, 2));
      navigate("/manager/departments");
      resetForm();
    },
  });

  return (
    <Box>
      <StyledButton onClick={() => navigate("/manager/departments")}>
        <ChevronLeftRoundedIcon />
      </StyledButton>
      <TypographyH1Desktop
        marginTop={"1rem"}
        marginBottom={"3rem"}
        textAlign={"center"}
      >
        {type === "create" ? "Создание отделения" : "Редактирование отделения"}
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
          {type === "create" && (
            <Box display={"grid"} gridTemplateColumns={"1fr"} width={"100%"}>
              <Button
                component="label"
                variant="outlined"
                sx={{
                  padding: "1rem",
                  border: "2px dashed #003790",
                  ":hover": {
                    backgroundColor: "#F6F7F8",
                    border: "2px dashed #212121",
                  },
                }}
              >
                <Typography color={"black"} textTransform={"none"}>
                  <span style={{ color: "#003790" }}>Выберите Excel-файл</span>{" "}
                  или перетяните его сюда
                </Typography>
                <VisuallyHiddenInput type="file" hidden />
              </Button>
            </Box>
          )}
          <Box
            display={"grid"}
            gap={"1.25rem"}
            gridTemplateColumns={"1fr 2fr"}
            width={"100%"}
          >
            <OutlinedInput
              id="number"
              name="number"
              value={formik.values.id}
              onChange={formik.handleChange}
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Номер"
            />
            <OutlinedInput
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Адрес"
            />
          </Box>
          <Box
            display={"grid"}
            gap={"1.25rem"}
            gridTemplateColumns={"1fr 1fr"}
            width={"100%"}
          >
            <Select
              sx={{ borderRadius: "0.625rem" }}
              id="date"
              name="date"
              value={formik.values.when_connected}
              onChange={formik.handleChange}
            >
              <MenuItem value="Сегодня">Сегодня</MenuItem>
              <MenuItem value="Вчера">Вчера</MenuItem>
              <MenuItem value="Давно">Давно</MenuItem>
            </Select>
            <Select
              sx={{ borderRadius: "0.625rem" }}
              id="isDelivered"
              name="isDelivered"
              value={formik.values.is_delivered}
              onChange={formik.handleChange}
            >
              <MenuItem value="Да">Да</MenuItem>
              <MenuItem value="Нет">Нет</MenuItem>
            </Select>
          </Box>
          <Box
            display={"grid"}
            gap={"1.25rem"}
            width={"100%"}
            gridTemplateColumns={"1fr"}
          >
            <OutlinedInput
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Кол-во дней после выдачи последней карты"
              id="amountDays"
              name="amountDays"
              value={formik.values.days_passed}
              onChange={formik.handleChange}
            />
          </Box>
          <Box
            display={"grid"}
            gap={"1.25rem"}
            width={"100%"}
            gridTemplateColumns={"1fr 1fr"}
          >
            <OutlinedInput
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Кол-во одобренных заявок"
              id="amountApproved"
              name="amountApproved"
              value={formik.values.approved_amount}
              onChange={formik.handleChange}
            />
            <OutlinedInput
              sx={{ borderRadius: "0.625rem" }}
              placeholder="Кол-во выданных карт"
              id="amountCards"
              name="amountCards"
              value={formik.values.given_amount}
              onChange={formik.handleChange}
            />
          </Box>
          <Box display={"grid"} gridTemplateColumns={"1fr"} width={"100%"}>
            <StyledSaveButton variant="contained" type="submit">
              {type === "create" ? "Создать отделение" : "Сохранить изменения"}
            </StyledSaveButton>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
