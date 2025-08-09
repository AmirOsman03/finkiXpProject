import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;