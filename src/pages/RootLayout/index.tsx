import { useEffect } from "react";
import useMediaSize from "../../shared/hooks/useMediaSize";
import DesktopRootLayout from "./DesktopRootLayout";
import MobileRootLayout from "./MobileRootLayout";

import { useNavigate } from "react-router-dom";
import { getPermission } from "../../shared/hooks/usePermission";

export default function RootLayout() {
  const mediaSize = useMediaSize();
  const navigate = useNavigate();

  const permissionRole = getPermission(); //это временная заглушка по пермиссии для пользователя

  console.log(permissionRole);

  useEffect(() => {
    permissionRole === "visitor"
      ? navigate("/tasks")
      : navigate("/managerr/dashboard");

    console.log(permissionRole);
  }, []);

  return (
    <>
      <>{mediaSize.isMobile ? <MobileRootLayout /> : <DesktopRootLayout />}</>
    </>
  );
}
