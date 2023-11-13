import { useEffect } from "react";
import AppRouterProvider from "./providers/RouterProvider";
import AppThemeProvider from "./providers/ThemeProvider";
import { getPermission, setPermission } from "../shared/hooks/usePermission";
import useMediaSize from "../shared/hooks/useMediaSize";

function App() {
  const { isMobile } = useMediaSize();

  console.log(isMobile);

  useEffect(() => {
    const permission = getPermission();
    if (permission === null) {
      if (isMobile) {
        setPermission("visitor");
      } else {
        setPermission("manager");
      }
    }
  }, [isMobile]);

  return (
    <>
      <AppThemeProvider>
        <AppRouterProvider />
      </AppThemeProvider>
    </>
  );
}

export default App;
