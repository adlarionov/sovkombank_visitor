import CourseCard from "../components/CourseCard";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

import Bank from "../../../shared/assets/bank.png";
import Card from "../../../shared/assets/card.png";
import Person from "../../../shared/assets/person.png";

import { coursesDummy } from "../../../shared/coursesDummy";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import CourseStep from "./components/CourseStep";
import { useEffect } from "react";

export default function Course() {
  const navigate = useNavigate();
  const { courseId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bgColors = ["#34C759", "#40CBE0", "#007AFF"]; // FIXME: temp colors - from server or random
  const icons = [Bank, Card, Person]; // FIXME: temp icons - from server or random

  return (
    <Box marginTop="1rem">
      <Button
        style={{ padding: 0, marginBottom: "1rem" }}
        color="inherit"
        onClick={() => navigate("/courses")}
      >
        <ChevronLeftRoundedIcon />
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {courseId && (
          <CourseCard
            course={coursesDummy[parseInt(courseId)]}
            cardBgColor={bgColors[parseInt(courseId)]}
            imageSrc={icons[parseInt(courseId)]}
            cardSize="big"
          />
        )}
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
          marginBottom="6rem"
        >
          {courseId &&
            coursesDummy[parseInt(courseId)].courseSteps.map((step, index) => (
              <CourseStep
                step={step}
                key={index}
                stepId={index}
                stepColor={bgColors[parseInt(courseId)]}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
}
