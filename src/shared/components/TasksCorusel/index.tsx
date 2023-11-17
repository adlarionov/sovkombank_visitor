import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import TaskCard from "../TaskCard";
import { useEffect, useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import { theme } from "../../../app/providers/ThemeProvider/theme";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ITask from "../../interfaces/ITask";
import TasksService from "../../services/tasksService";
import useSWR from "swr";
import RequestError from "../RequestError";
import { getUser } from "../../hooks/useUser";

const getTasks: () => Promise<ITask[]> = async () =>
  await TasksService.getTasks(Number(getUser()));

const TaskCorusel = ({ openTaskList }: { openTaskList: () => void }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const { data, error, mutate } = useSWR<ITask[]>(
    "/workers/get_tasks",
    getTasks
  );

  useEffect(() => {
    if (data) setTasks(data);
  }, [data]);

  const formatTime = (time: number): string => {
    const hours = (time - (time % 60)) / 60;
    const minutes = time % 60;
    return `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  };

  const maxSteps = tasks.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  if (error) {
    console.error(error);
    return <RequestError errorDescription={error} reload={mutate} />;
  }

  console.log(data);

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
              {tasks
                .sort((a, _) => (a.status !== "начато" ? 1 : -1))
                .map((step, index) => (
                  <div key={step.order}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <TaskCard
                        status={step.status}
                        worker_id={step.worker_id}
                        isList={false}
                        title={step.task_type}
                        address={step.address}
                        time={formatTime(step.duration)}
                        priority={step.priority}
                        openTaskList={openTaskList}
                        taskNumber={step.order}
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
