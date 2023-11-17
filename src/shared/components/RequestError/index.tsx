import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function RequestError({
  errorDescription,
  reload,
}: {
  errorDescription: string;
  reload: () => void;
}) {
  return (
    <>
      <Alert
        severity="error"
        action={
          <Button onClick={() => reload()}>
            <RefreshIcon />
          </Button>
        }
      >
        <AlertTitle>Ошибка запроса</AlertTitle>
        {errorDescription.toString()}
      </Alert>
    </>
  );
}
