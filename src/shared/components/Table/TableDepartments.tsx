import { Button, Typography, styled } from "@mui/material";
import Box from "@mui/material/Box";
import { typographyDesktop } from "../../config/typography";
import { ITableDataAddresses } from "./components/TableData";
import BadgeStyled from "../BadgeStyled";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { useEffect, useState } from "react";
import PointService from "../../services/pointService";
import RequestError from "../RequestError";
import httpClient from "../../api/httpClient";

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

const getDepartments: () => Promise<ITableDataAddresses[]> = async () =>
  await PointService.getPoints();

export default function TableDepartments({
  columns,
  additionalDepartments,
  onEdit,
}: {
  columns: string[];
  additionalDepartments: ITableDataAddresses[];
  onEdit: (value: string) => void;
}) {
  const { data, error, mutate } = useSWR<ITableDataAddresses[]>(
    "/points/get",
    getDepartments
  );
  const [departmentList, setDepartmentList] = useState<ITableDataAddresses[]>(
    additionalDepartments
  );

  useEffect(() => {
    if (data) setDepartmentList(data);
  }, [data]);

  const navigate = useNavigate();

  const deleteDepartment = async (departmentId: number) => {
    await httpClient.del(`/points/delete/${departmentId}`);
  };

  const handleDeleteRow = (id: number) => {
    const departments = additionalDepartments.filter((department) => {
      return department.id !== id;
    });
    deleteDepartment(id);
    setDepartmentList(departments);
  };

  const handleEditDepartment = (departmentId: number) => {
    navigate({
      search: `?editDepartment=${departmentId}`,
    });
    onEdit(`?editDepartment=${departmentId}`);
  };

  if (error) {
    console.error(error);
    return <RequestError errorDescription={error} reload={mutate} />;
  }

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={`
        0.25fr
        1fr
        0.5fr
        0.5fr
        1fr
        0.5fr
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
      {departmentList.map((department) => (
        <>
          <Typography>{department.id}</Typography>
          <Typography>{department.address}</Typography>
          <Box>
            <BadgeStyled
              status={
                department.when_connected === "Давно" ? "info" : "warning"
              }
              badgeContent={department.when_connected}
              isIcon={true}
            />
          </Box>
          <Box>
            <BadgeStyled
              status={department.is_delivered === "Да" ? "success" : "danger"}
              badgeContent={department.is_delivered}
              isIcon={true}
            />
          </Box>
          <Typography>{department.days_passed}</Typography>
          <Typography>{department.approved_amount}</Typography>
          <Typography>{department.given_amount}</Typography>
          <Box display="flex">
            <StyledButton onClick={() => handleDeleteRow(department.id)}>
              <DeleteOutlinedIcon />
            </StyledButton>
            <StyledButton
              onClick={() => handleEditDepartment(department.id)}
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
