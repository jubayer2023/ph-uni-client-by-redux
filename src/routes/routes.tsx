import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { adminRoutes } from "./admin.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
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
