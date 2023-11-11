import { typographyMobile } from "../config/typography";
import { palette } from "../config/palette";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

export default function BadgeStyled({
  badgeContent,
  status,
  isIcon,
}: {
  badgeContent: string;
  status: "success" | "warning" | "danger" | "white" | "gray" | "info";
  isIcon: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        borderRadius: "1.25rem",
        background: palette.badgeStatus[status].background,
        padding: "0.25rem 0.75rem",
        width: "fit-content",
      }}
    >
      {isIcon && (
        <FiberManualRecordRoundedIcon
          htmlColor={palette.badgeStatus[status].text}
          sx={{ fontSize: "0.8rem" }}
        />
      )}
      <span
        style={{
          ...typographyMobile.caption,
          fontWeight: 500,
          color: palette.badgeStatus[status].text,
        }}
      >
        {badgeContent}
      </span>
    </div>
  );
}
