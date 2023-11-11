import { useEffect } from "react";
import AppRouterProvider from "./providers/RouterProvider";
import AppThemeProvider from "./providers/ThemeProvider";
import { getPermission, setPermission } from "../shared/hooks/usePermission";

function App() {
  useEffect(() => {
    const permission = getPermission();
    if (permission === null) {
      setPermission("visitor");
    }
  }, []);

  return (
    <>
      <AppThemeProvider>
        <AppRouterProvider />
      </AppThemeProvider>
    </>
  );
}

export default App;
