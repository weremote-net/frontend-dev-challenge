import React from "react";
import {slide as Menu} from 'react-burger-menu';
import '../styles/SideBar.scss'

export default props => {
    return(
        <Menu className="Menu">
            <a className="menu__item">Servicios
            </a>

            <a className="menu__item">Testimonios
             </a>

            <a className="menu__item">FAQ
             </a>

        <a className="menu__item">Contact
        </a>
        </Menu>
    )
}