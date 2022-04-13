import React, {useState} from "react";
import reactDom from "react-dom";
import { Fragment } from "react";
import { SliderData } from "./SliderTestimonials";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../styles/Testimonials.scss'

const TestimonialSlider = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }


    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return(
        <Fragment>
            <section className="Slider">
            <FaArrowAltCircleLeft className="Slider__left--arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="Slider__right--arrow" onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
            return(
                <div className={index === current ? 'Slider__slide active' : 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt='imagen 1' className="Slider__image" />)}
                </div>
            )
 })}
            </section>
        </Fragment>
    )
}

export default TestimonialSlider;