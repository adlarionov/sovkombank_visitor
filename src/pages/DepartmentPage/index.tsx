import { useEffect, useState } from "react";
import { ITableDataAddresses } from "../../shared/components/Table/components/TableData";
import { useSearchParams } from "react-router-dom";
import Departments from "./components/Departments";
import DepartmentChangeForm from "./components/DepartmentChangeForm";
import PointService from "../../shared/services/pointService";

const DepartmentsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [departmentList, setDepartmentList] = useState<ITableDataAddresses[]>(
    []
  );

  const getPoints = async () => {
    const points = await PointService.getPoints();
    setDepartmentList(points);
  };

  useEffect(() => {
    getPoints();
  }, []);

  const handleAddNewAddress = (values: ITableDataAddresses) => {
    setDepartmentList((prevValues) => [...prevValues, values]);
  };

  return (
    <>
      {searchParams.get("create") === "true" ||
      searchParams.get("editDepartment") ? (
        <DepartmentChangeForm
          onSubmitForm={handleAddNewAddress}
          type={searchParams.get("editDepartment") ? "edit" : "create"}
          department={departmentList.find(
            (department) =>
              department.id.toString() === searchParams.get("editDepartment")
          )}
        />
      ) : (
        <Departments
          departmentList={departmentList}
          onCreate={(searchParam) => setSearchParams(searchParam)}
        />
      )}
    </>
  );
};

export default DepartmentsPage;
