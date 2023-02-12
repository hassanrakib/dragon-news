import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Category, {
  loader as categoryNewsLoader,
} from "../pages/Category/Category/Category";
import Home from "../pages/Home/Home/Home";
import News, { loader as singleNewsLoader } from "../pages/News/News/News";

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
        element: <News />,
        loader: singleNewsLoader,
      },
      {
        path: "category/:id",
        element: <Category />,
        loader: categoryNewsLoader,
      },
    ],
  },
]);
