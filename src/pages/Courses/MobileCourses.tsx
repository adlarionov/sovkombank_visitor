import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CourseCard from "./components/CourseCard";
import { typographyMobile } from "../../shared/config/typography";
import { styled } from "@mui/material";
import { palette } from "../../shared/config/palette";
import { useState, useEffect } from "react";

import Bank from "./../../shared/assets/bank.png";
import Card from "./../../shared/assets/card.png";
import Person from "./../../shared/assets/person.png";

import { ICourse } from "../../shared/interfaces/ICourse";
import { Link } from "react-router-dom";
import { coursesDummy } from "../../shared/coursesDummy";

const TypographyH1Mobile = styled(Typography)({
  ...typographyMobile.h1,
  marginBottom: "1rem",
  width: "13.9375rem",
});

const LinkStyled = styled(Link)({
  textDecoration: "none",
  color: "black",
});

export default function MobileCourses() {
  const [courseData, setCourseData] = useState<ICourse[]>();

  const bgColors = ["#34C759", "#40CBE0", "#007AFF"]; // FIXME: temp colors - from server or random
  const icons = [Bank, Card, Person]; // FIXME: temp icons - from server or random

  useEffect(() => {
    setCourseData(coursesDummy);
  }, []);

  return (
    <Box
      marginTop="1rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bgcolor={palette.background.tertiary}
    >
      <Box marginBottom="2rem">
        <TypographyH1Mobile>Продолжить обучение</TypographyH1Mobile>
        {courseData && (
          <LinkStyled to={`/courses/${courseData[0].courseId}`}>
            <CourseCard
              cardSize={"small"}
              course={courseData[0]}
              cardBgColor={bgColors[0]}
              imageSrc={icons[0] as string}
            />
          </LinkStyled>
        )}
      </Box>
      <Box marginBottom="2rem">
        <TypographyH1Mobile>Все курсы</TypographyH1Mobile>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
          marginBottom={"4rem"}
        >
          {courseData &&
            courseData.slice(1).map((course) => {
              return (
                <LinkStyled
                  to={`/courses/${course.courseId}`}
                  key={course.courseId}
                >
                  <CourseCard
                    cardSize={"small"}
                    course={course}
                    cardBgColor={bgColors[course.courseId]}
                    imageSrc={icons[course.courseId] as string}
                  />
                </LinkStyled>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}
