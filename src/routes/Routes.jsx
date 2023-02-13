import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Category, {
  loader as categoryNewsLoader,
} from "../pages/Category/Category/Category";
import Home from "../pages/Home/Home/Home";
import News, { loader as singleNewsLoader } from "../pages/News/News/News";
import Register from "../pages/Register/Register/Register";
import Login from "../pages/Login/Login/Login";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "news/:id",
        element: <PrivateRoute><News /></PrivateRoute>,
        loader: singleNewsLoader,
      },
      {
        path: "category/:id",
        element: <Category />,
        loader: categoryNewsLoader,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
