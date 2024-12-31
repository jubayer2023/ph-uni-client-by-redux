import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { adminPaths } from "./admin.route";
import { routeGenerator } from "../utils/routeGenerator";
import { facultyPaths } from "./faculty.route";
import { studentPaths } from "./student.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentPaths),
  },
  {
    path: "/login",
    element: <div>Login ROutes</div>,
  },
  {
    path: "/register",
    element: <div>Register Routes</div>,
  },
]);

export default router;
