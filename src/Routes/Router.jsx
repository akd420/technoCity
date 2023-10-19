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
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/brands/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
    ],
  },
]);

export default Router;
