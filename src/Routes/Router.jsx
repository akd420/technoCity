import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddProduct from "../Pages/AddProduct";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/add",
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      }
    ],
  },
]);

export default Router;
