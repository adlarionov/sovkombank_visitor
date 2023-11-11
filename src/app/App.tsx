import AppRouterProvider from "./providers/RouterProvider";
import AppThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <>
      <AppThemeProvider>
        <AppRouterProvider />
      </AppThemeProvider>
    </>
  );
}

export default App;
