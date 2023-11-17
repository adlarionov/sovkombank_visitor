import { createBrowserRouter } from "react-router-dom";
import { EErrorTexts } from "../../../shared/enums/EErrorTexts.tsx";

import LoginPage from "../../../pages/Login/index.tsx";
import Tasks from "../../../pages/Tasks/index.tsx";
import Chat from "../../../pages/Chat/index.tsx";
import Courses from "../../../pages/Courses/index.tsx";
import RootLayout from "../../../pages/RootLayout/index.tsx";
import Error from "../../../pages/Error/index.tsx";
import Profile from "../../../pages/Profile/index.tsx";
import DashboardPage from "../../../pages/Dashboard/index.tsx";
import ManagerChatPage from "../../../pages/Chat/ManagerChatPage/index.tsx";
import DepartmentsPage from "../../../pages/DepartmentPage/index.tsx";
import EmployeePage from "../../../pages/EmployeePage/index.tsx";
import ManagerTaskPage from "../../../pages/Tasks/ManagerTaskPage/index.tsx";

import DialogChat from "../../../pages/Chat/DialogChat.tsx/index.tsx";
import Course from "../../../pages/Courses/Course/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        path: "/tasks",
        element: <Tasks />,
      },

      {
        path: "/chats",
        element: <Chat />,
      },
      {
        path: "/chats/:chatId",
        element: <DialogChat />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:courseId",
        element: <Course />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/managerr/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/managerr/tasks",
        element: <ManagerTaskPage />,
      },
      {
        path: "/managerr/chats",
        element: <ManagerChatPage />,
      },
      {
        path: "/managerr/chats/:chatId",
        element: <ManagerChatPage />,
      },
      {
        path: "/managerr/departments",
        element: <DepartmentsPage />,
      },
      {
        path: "/managerr/employees",
        element: <EmployeePage />,
      },
    ],
    errorElement: <Error errorReason={EErrorTexts.Error404} />,
  },
  { path: "*", element: <Error errorReason={EErrorTexts.Error404} /> },
]);
