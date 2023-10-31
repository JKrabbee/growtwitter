import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../../pages/Login";
import DefaultLayout from "../layout/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <DefaultLayout />,
  },
  {
    path: "/explorer",
    element: <DefaultLayout />,
  },
  {
    path: "/profile",
    element: <DefaultLayout />,
  },
]);

function RoutesApp() {
  return <RouterProvider router={router} />;
}

export default RoutesApp;
