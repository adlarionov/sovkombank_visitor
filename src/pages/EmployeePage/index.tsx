import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import EmployeeChangeForm from "./components/EmployeeChangeForm";
import Employees from "./components/Employees";
import {
  ITableDataEmployees,
  tableDataEmployees,
} from "../../shared/components/Table/components/TableData";

const EmployeePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [employeesList, setEmployeesList] =
    useState<ITableDataEmployees[]>(tableDataEmployees);

  return (
    <>
      {searchParams.get("create") === "true" ||
      searchParams.get("editEmployee") ? (
        <EmployeeChangeForm
          onSubmitForm={(values) =>
            setEmployeesList((prevValue) => [...prevValue, values])
          }
          type={searchParams.get("editEmployee") ? "edit" : "create"}
          employee={employeesList.find(
            (employee) => employee.number === searchParams.get("editEmployee")
          )}
        />
      ) : (
        <Employees
          employeesList={employeesList}
          onCreate={(searchParam) => setSearchParams(searchParam)}
        />
      )}
    </>
  );
};

export default EmployeePage;
