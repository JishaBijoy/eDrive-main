import { Navigate, Outlet, useLocation } from "react-router-dom";
import { GetLocalStorage } from "../localStorage/LocalStorage";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthProvider";


const UserRefresh = () => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();   
    return (
        auth?.tokenKey  ? <Outlet/> : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default UserRefresh;