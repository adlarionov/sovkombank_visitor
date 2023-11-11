import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { palette } from "../../../shared/config/palette";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { typographyMobile } from "../../../shared/config/typography";
import BadgeStyled from "../../../shared/components/BadgeStyled";
import { ICourse } from "../../../shared/interfaces/ICourse";
import { StyledButtonMobile } from "../../Login/MobileLogin";

const TypographyTitleCard = styled(Typography)({
  ...typographyMobile.h6,
  marginBottom: "1.75rem",
  maxWidth: "20rem",
  minHeight: "3.75rem",
});

const TypographyBody = styled(Typography)({
  ...typographyMobile.body1,
  marginBottom: "1.5rem",
  paddingRight: "1rem",
});

const TypographyTitleCaption = styled(Typography)({
  ...typographyMobile.caption,
  color: "#BDBDBD",
});

export default function CourseCard({
  cardBgColor,
  imageSrc,
  course,
  cardSize,
}: {
  cardBgColor: string;
  imageSrc: string;
  course: ICourse;
  cardSize: "small" | "big";
}) {
  return (
    <Box
      width="22.5rem"
      marginBottom={cardSize === "small" ? "0" : "1rem"}
      paddingBottom={"1rem"}
      bgcolor={palette.monochrome.white}
      borderRadius={"1rem"}
    >
      <Box
        width={"22.5rem"}
        height={"7.5rem"}
        borderRadius="1rem 1rem 0rem 0rem"
        bgcolor={cardBgColor}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Chip
            label={course.courseLevel}
            variant="outlined"
            sx={{ backgroundColor: "white", marginLeft: "1rem" }}
          />
          <Box
            component={"img"}
            src={imageSrc}
            marginTop="2.25rem"
            marginRight="1rem"
          />
        </Box>
      </Box>
      <Box margin={"1rem 0 0 1rem"}>
        <TypographyTitleCard>Курс «{course.courseTitle}»</TypographyTitleCard>
        {cardSize === "big" && (
          <TypographyBody>{course.courseDescription}</TypographyBody>
        )}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginRight="1rem"
        >
          <TypographyTitleCaption>
            {course.courseLength} уроков
          </TypographyTitleCaption>
          {cardSize === "small" && (
            <BadgeStyled
              isIcon={false}
              badgeContent={`${course.courseCompleteness || 0}%`}
              status={
                course.courseCompleteness < 50
                  ? "white"
                  : course.courseCompleteness < 75
                  ? "warning"
                  : "success"
              }
            />
          )}
        </Box>
        {cardSize === "big" && (
          <Box>
            <TypographyBody marginTop="0.5rem">
              <strong>Пройдено уроков:</strong> 4 из {course.courseLength}
            </TypographyBody>
            <StyledButtonMobile
              variant="outlined"
              sx={{ width: "20.5rem", margin: 0 }}
            >
              {course.courseCompleteness === 0
                ? "Начать"
                : "Продолжить обучение"}
            </StyledButtonMobile>
          </Box>
        )}
      </Box>
    </Box>
  );
}
