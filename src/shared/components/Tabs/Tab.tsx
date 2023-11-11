import { theme } from "../../../app/providers/ThemeProvider/theme";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { styled } from "@mui/material";

export const Tab = styled(BaseTab)`
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  color: ${theme.palette.common.black};
  background-color: ${theme.palette.common.white};
  box-shadow: 0px 0px 4px 0px rgba(68, 68, 68, 0.16);
  border-radius: 1.875rem;
  width: 100%;
  border: none;
  display: flex;
  direction: row;
  justify-content: center;
  margin-right: 1rem;
  &:hover {
    background-color: ${theme.palette.secondary.main};
  }

  &:focus {
    color: #fff;
    outline: none;
  }

  &.${tabClasses.selected} {
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.common.white};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
