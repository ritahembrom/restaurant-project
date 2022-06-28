import React from "react";
import { Navigate,Outlet } from "react-router-dom";
const ProtectedRoute=()=>{
    const isAuth=window.sessionStorage.getItem('Token value')
    return isAuth?<Outlet/>:<Navigate to="/Login"/>;
};
export default ProtectedRoute;