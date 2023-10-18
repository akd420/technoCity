/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="w-screen h-screen flex items-center justify-center"><span className="loading loading-spinner text-rose  loading-lg"></span></div>
    }
    if(!user){
       return <Navigate state={location.pathname} to={"/login"}></Navigate>
    }
    return children
};

export default PrivateRoute;