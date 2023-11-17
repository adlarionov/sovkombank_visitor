import CircularProgress from "@mui/material/CircularProgress";
import { Suspense } from "react";

import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import SovcomBankLogo from "../../shared/components/Icons/SovcomBankLogo";

import {
  NavLink as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

import MuiListItemButton, {
  ListItemButtonProps as MuiListItemButtonProps,
} from "@mui/material/ListItemButton";
import React from "react";

import DashboarIcon from "../../shared/components/Icons/DashboardIcon";
import TaskIcon from "../../shared/components/Icons/ChatIcon copy";
import ChatIcon from "../../shared/components/Icons/ChatIcon";
import DepartmentIcon from "../../shared/components/Icons/DepartmentIcon";
import EmployeeIcon from "../../shared/components/Icons/EmployeeIcon";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import AvatarProfile from "../../shared/assets/Avatar.png";
import { Outlet, useNavigate } from "react-router-dom";
import DesktopDummy from "../Dummies/DesktopDummy";
import { theme } from "../../app/providers/ThemeProvider/theme";
import { getPermission } from "../../shared/hooks/usePermission";
import IManager from "../../shared/interfaces/IManager";
import ManagersService from "../../shared/services/managersService";
import useSWR from "swr";
import { getUser } from "../../shared/hooks/useUser";
import RequestError from "../../shared/components/RequestError";

const Drawer = styled(Box)`
  position: fixed;
  width: 14.125rem;
  height: 100vh;
  flex-shrink: 0;
  border-right: 1px solid var(--border-secondary, #e0e0e0);
  background: ${theme.palette.background.default};
  padding: 1.25rem 0 1.25rem 1.25rem;
`;
const Content = styled(Box)`
  padding: 1.25rem 1.25rem 1.25rem 16rem;
  height: 100vh;
  width: "100%";
  background: ${theme.palette.background.default};
`;
const LogoTypography = styled(Typography)`
  color: #212121;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0125rem;
`;

interface ListItemButtonProps extends MuiListItemButtonProps {
  expanded?: boolean;
}

const ListItemButton = styled(MuiListItemButton, {
  shouldForwardProp: (prop) => prop !== "expanded",
})<ListItemButtonProps>({
  color: "#616161",
  padding: "0.625rem",
  borderRadius: "0.63rem",
  height: 40,
  width: "11.625rem",

  "& .MuiListItemIcon-root": {
    // color: "currentColor",
    innerWidth: "20px",
  },
  "&:hover": {
    color: theme.palette.common.black,
    background: theme.palette.common.white,
  },
  "&.active": {
    color: theme.palette.common.black,
    background: theme.palette.common.white,
  },
});

const LogoutRoundedIconStyled = styled(LogoutRoundedIcon)({
  width: 30,
  height: 30,
  color: "#212121",
});

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (itemProps, ref) => <RouterLink ref={ref} {...itemProps} role={undefined} />
);

const getManagerData: () => Promise<IManager> = async () =>
  await ManagersService.getManagersById(2222);

export default function DesktopRootLayout() {
  const permissionRole = getPermission();
  const navigate = useNavigate();
  const { data, error, mutate } = useSWR(getUser(), getManagerData);

  if (error) {
    console.error(error);
    return <RequestError errorDescription={error} reload={mutate} />;
  }

  return (
    <div>
      {permissionRole !== "visitor" ? (
        <>
          <Drawer>
            <Stack
              direction={"row"}
              alignItems="center"
              marginBottom={"2.5rem"}
            >
              <SovcomBankLogo sx={{ fontSize: "2.5rem" }} />
              <LogoTypography sx={{ marginLeft: "0.62rem" }}>
                Совкомбанк Визитер
              </LogoTypography>
            </Stack>
            <Stack
              mr={"1.5rem"}
              height={"90%"}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Box>
                {/* @ts-ignore */}
                <ListItemButton component={Link} to={"/managerr/dashboard"}>
                  <ListItemIcon>{<DashboarIcon />}</ListItemIcon>
                  <ListItemText primary={"Дашборд"} />
                </ListItemButton>
                {/*@ts-ignore */}
                <ListItemButton component={Link} to={"/managerr/tasks"}>
                  <ListItemIcon>{<TaskIcon />}</ListItemIcon>
                  <ListItemText primary={"Задачи"} />
                </ListItemButton>
                {/*@ts-ignore */}
                <ListItemButton component={Link} to={"/managerr/chats"}>
                  <ListItemIcon>{<ChatIcon />}</ListItemIcon>
                  <ListItemText primary={"Чат"} />
                </ListItemButton>
                {/*@ts-ignore */}
                <ListItemButton component={Link} to={"/managerr/departments"}>
                  <ListItemIcon>{<DepartmentIcon />}</ListItemIcon>
                  <ListItemText primary={"Отделения"} />
                </ListItemButton>
                {/*@ts-ignore */}
                <ListItemButton component={Link} to={"/managerr/employees"}>
                  <ListItemIcon>{<EmployeeIcon />}</ListItemIcon>
                  <ListItemText primary={"Сотрудники"} />
                </ListItemButton>
              </Box>
              <Stack direction="row" alignItems={"center"}>
                <ListItemAvatar
                  sx={{ ".MuiListItemAvatar-root": { minWidth: "40px" } }}
                >
                  <Avatar sx={{ background: theme.palette.common.white }}>
                    <Box
                      component="img"
                      alt={data && data.image_link}
                      sx={{
                        width: "2.5rem",
                        height: "2.5rem",
                        background: `url(${AvatarProfile})`,
                      }}
                    />
                  </Avatar>
                </ListItemAvatar>
                <Typography
                  sx={{
                    color: theme.palette.common.black,
                    lineHeight: "125%",
                    letterSpacing: "-0.01rem",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  {data ? (
                    data.name.split(" ")[1]
                  ) : (
                    <Skeleton animation="wave" width={100} height={40} />
                  )}
                </Typography>
                <LogoutRoundedIconStyled
                  onClick={() => {
                    navigate("/login");
                    localStorage.removeItem("userId");
                  }}
                  sx={{ marginLeft: "1.12rem" }}
                />
              </Stack>
            </Stack>
          </Drawer>
          <Content>
            <Suspense fallback={<CircularProgress />}>
              <Outlet />
            </Suspense>
          </Content>
        </>
      ) : (
        <DesktopDummy />
      )}
    </div>
  );
}
