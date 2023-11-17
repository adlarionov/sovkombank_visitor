import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";

import { useState } from "react";
import { StyledButtonMobile } from "../../pages/Login/MobileLogin";
import { styled } from "@mui/material";
import { typographyMobile } from "../config/typography";

const TypographyH3Mobile = styled(Typography)({
  ...typographyMobile.h3,
  marginBottom: "1rem",
  width: "13.9375rem",
});

export default function ConfirmDialog({
  buttonText,
  onConfirmClick,
  isDisabled,
}: {
  buttonText: string;
  onConfirmClick: () => void;
  isDisabled: boolean;
}) {
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);

  const handleConfirmToggle = () => {
    setConfirmOpen((prevValue) => !prevValue);
  };

  const handleConfirmClick = () => {
    setConfirmOpen(false);
    onConfirmClick();
  };

  return (
    <>
      <StyledButtonMobile
        onClick={handleConfirmToggle}
        sx={{ mt: "1rem", backgroundColor: isDisabled ? "#DBDBDB" : "#FC5055" }}
        variant="outlined"
        disabled={isDisabled}
      >
        {buttonText}
      </StyledButtonMobile>
      <Dialog open={confirmOpen} onClose={handleConfirmToggle}>
        <DialogTitle>
          <TypographyH3Mobile>
            Вы уверены, что хотите {buttonText.toLowerCase()} задачу?
          </TypographyH3Mobile>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleConfirmToggle} variant="outlined">
            Нет
          </Button>
          <Button
            onClick={handleConfirmClick}
            sx={{ boxShadow: "none" }}
            variant="contained"
            autoFocus
          >
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
