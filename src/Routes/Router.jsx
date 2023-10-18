import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddProduct from "../Pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import BrandDetails from "../Components/BrandDetails";

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
      },{
        path: "/brands/:brand.name",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch("/brands.json"),
      }
    ],
  },
]);

export default Router;
