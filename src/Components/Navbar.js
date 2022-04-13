import React from "react";
import reactDom from "react-dom";
import { Fragment } from "react";
import '../styles/Navbar.scss'
import logo from '../Assets/logo.png'
import SideBar from "./SideBar";

const Navbar = () => {
    return(
        <Fragment>
            <SideBar/>
            <nav className="nav">
            <div className="nav__logo">
                <img src={logo} className="nav__logo__image"/>
            </div>
            <div className="nav__items">
            <a>Servicios</a>
            <a>Testimonios</a>
            <a>FAQ</a>
            <a>Contact</a>
            </div>
            </nav>
        </Fragment>
       
    )
}

export default Navbar