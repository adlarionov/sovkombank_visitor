import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import TaskCard from "../TaskCard";
import { useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import { theme } from "../../../app/providers/ThemeProvider/theme";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { tasks } from "../../tasksDummy";

const TaskCorusel = ({ openTaskList }: { openTaskList: () => void }) => {
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = tasks.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      {tasks.length > 0 ? (
        <>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            backButton={undefined}
            nextButton={undefined}
            style={{ margin: "1rem 0", borderRadius: "2rem" }}
          />
          <Box width={"100%"}>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {tasks.map((step, index) => (
                <div key={step.id}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <TaskCard
                      title={step.title}
                      address={step.address}
                      time={step.time}
                      priority={step.priority}
                      openTaskList={openTaskList}
                    />
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
          </Box>
        </>
      ) : (
        <Box>
          <Typography marginTop="1.5rem" variant="h4">
            Задач сейчас нет
          </Typography>
          <Typography marginTop="0.5rem">
            Мы пришлём уведомление, когда появятся новая
          </Typography>
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.secondary.main,
              marginTop: " 1.5rem",
            }}
            to={"/chat"}
          >
            Чат с менеджером
          </Link>
        </Box>
      )}
    </>
  );
};

export default TaskCorusel;
