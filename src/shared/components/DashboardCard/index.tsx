import Stack from "@mui/material/Stack";
import { theme } from "../../../app/providers/ThemeProvider/theme";
import Box from "@mui/material/Box";
import { typographyDesktop } from "../../config/typography";
import Typography from "@mui/material/Typography";

interface DasboardCardProps {
  title: string;
  count: number;
  color?: string;
  date: string;
}

export const DashboardCard = ({
  title,
  color,
  count,
  date,
}: DasboardCardProps) => {
  return (
    <Stack
      direction="column"
      sx={{
        background: theme.palette.background.paper,
        padding: "1.25rem",
        borderRadius: "1.25rem",
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          sx={{
            ...typographyDesktop.h1,
            color: color ?? theme.palette.common.black,
          }}
        >
          {count}
        </Typography>
        <Typography
          sx={{
            ...typographyDesktop.caption,
            color: "#BDBDBD",
          }}
        >
          {date}
        </Typography>
      </Box>
      <Typography sx={{ ...typographyDesktop.body1, marginTop: "0.62rem" }}>
        {title}
      </Typography>
    </Stack>
  );
};
