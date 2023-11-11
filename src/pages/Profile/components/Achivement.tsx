import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { typographyMobile } from "../../../shared/config/typography";
import BadgeStyled from "../../../shared/components/BadgeStyled";
import { palette } from "../../../shared/config/palette";

const TypographyTitleStyled = styled(Typography)({
  ...typographyMobile.h6,
});

const TypographyTextStyled = styled(Typography)({
  ...typographyMobile.body1,
});

type TPropsAchivement = {
  emoji: JSX.Element;
  value: number;
  title: string;
  description: string;
};

export default function Achivement({
  emoji,
  value,
  title,
  description,
}: TPropsAchivement) {
  return (
    <Box
      bgcolor={palette.background.tertiary}
      width={"20.5625rem"}
      height={"9.125rem"}
      borderRadius={"0.5rem"}
      marginBottom={"0.5rem"}
      padding="1rem"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="0.5rem"
      >
        <TypographyTitleStyled>{emoji}</TypographyTitleStyled>
        <BadgeStyled
          badgeContent={`${value || 0}%`}
          status={value < 50 ? "gray" : value < 75 ? "warning" : "success"} isIcon={false}        />
      </Box>
      <Box>
        <TypographyTitleStyled marginBottom={"0.5rem"}>
          {title}
        </TypographyTitleStyled>
        <TypographyTextStyled color="#616161">
          {description}
        </TypographyTextStyled>
      </Box>
    </Box>
  );
}
