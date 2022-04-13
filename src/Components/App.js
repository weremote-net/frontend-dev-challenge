import React from "react";
import reactDom from "react-dom";
import { Fragment } from "react";
import '../scss/__settings.scss'
import Navbar from "./Navbar"
import SideBar from "./SideBar";
import Slider from "./Slider"
import SliderData from "./SliderImagenes";
import Services from "./Services"
import TestimonialSlider from "./TestimonialSlider";

const App = () => {
    return(
        <Fragment>
            <Navbar />
            <Slider slides={SliderData}/>
            <Services />
            <TestimonialSlider slides={SliderData}/>
        </Fragment>
       
       
    )
}

export default App