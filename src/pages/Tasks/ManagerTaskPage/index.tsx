import { Box } from "@mui/material";
import ManagerTasks from "./components/ManagerTasks";
import { useSearchParams } from "react-router-dom";
import ManagerChangeTaskForm from "./components/ManagerChangeTaskForm";
import { useState } from "react";
import {
  ITableData,
  tableDataTasks,
} from "../../../shared/components/Table/components/TableData";

const ManagerTaskPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tasks, setTasks] = useState<ITableData[]>(tableDataTasks);

  return (
    <Box>
      {searchParams.get("create") === "true" || searchParams.get("editTask") ? (
        <ManagerChangeTaskForm
          onSubmitForm={(newTask) =>
            setTasks((prevTask) => [...prevTask, newTask])
          }
          title={
            searchParams.get("editTask")
              ? "Редактирование типа задач"
              : "Создание типа задачи"
          }
          task={tasks.find(
            (task) => task.type === Number(searchParams.get("editTask"))
          )}
        />
      ) : (
        <ManagerTasks
          onCreate={(value) => setSearchParams(value)}
          additionalTasks={tasks}
        />
      )}
    </Box>
  );
};

export default ManagerTaskPage;
