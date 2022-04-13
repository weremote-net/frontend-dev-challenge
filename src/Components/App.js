import React from "react";
import reactDom from "react-dom";
import { Fragment } from "react";
import '../scss/__settings.scss'
import Navbar from "./Navbar"
import SideBar from "./SideBar";
import Slider from "./Slider"
import SliderData from "./SliderImagenes";

const App = () => {
    return(
        <Fragment>
            <Navbar />
            <Slider slides={SliderData}/>
        
        </Fragment>
       
       
    )
}

export default App