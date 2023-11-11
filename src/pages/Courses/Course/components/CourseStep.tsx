import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { palette } from "../../../../shared/config/palette";
import { styled } from "@mui/material";
import { typographyMobile } from "../../../../shared/config/typography";

const TypographyH1Mobile = styled(Typography)({
  ...typographyMobile.h1,
  color: palette.monochrome.white,
});

export default function CourseStep({
  step,
  stepId,
  stepColor
}: {
  step: string;
  stepId: number;
  stepColor: string;
}) {
  return (
    <Box
      bgcolor={palette.monochrome.white}
      width="22.5rem"
      borderRadius="1rem"
      display={"flex"}
      alignItems={"center"}
    >
      <Box position={"relative"}>
        <Box
          borderRadius={"1rem 0rem 0rem 1rem"}
          maxHeight={"6.5rem"}
          minHeight={"4.5rem"}
          width={"4.5rem"}
          bgcolor={stepColor}
        />
        <TypographyH1Mobile top={"25%"} left={"1.75rem"} position={"absolute"}>
          {++stepId}
        </TypographyH1Mobile>
      </Box>
      <Typography paddingX={"1rem"}>{step}</Typography>
    </Box>
  );
}
