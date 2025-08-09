import React from 'react';
import {Outlet} from "react-router";
import useAuth from "../../../hooks/useAuth.js";
import Error401Page from "../../pages/Error401Page/Error401Page.jsx";
import Error403Page from "../../pages/Error403Page/Error403Page.jsx";

const ProtectedRoute = ({role}) => {
    const {user, loading} = useAuth();

    if (loading)
        return null;

    if (!user) {
        return <Error401Page/>;
    }

    if (role && !user.role.includes(role)) return <Error403Page />;

    return <Outlet/>;
};

export default ProtectedRoute;
