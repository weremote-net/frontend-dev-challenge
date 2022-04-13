import React from "react";
import reactDom from "react-dom";
import { Fragment } from "react";
import {IoIosRemoveCircleOutline} from 'react-icons/io'
import {RiArrowDownSFill} from 'react-icons/ri'
import '../styles/Accordion.scss'


const Accordion = () => {
    return(
        <Fragment>
            <section className="Section">
                <div className="Section__container">
                    <div className="Section__accordion">
                        <div className="Section__accordion--item" id="question">
                            <a className="Section__accordion--link" href="#question">
                                How often do you go to beach ?
                                <RiArrowDownSFill className="Section__accordion__icono--add"/>
            
                            </a>
                            
                            <div className="answer">
                                <p>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                                    </p>
                            </div>
                        </div>
                        <div className="Section__accordion--item" id="question2">
                            <a className="Section__accordion--link" href="#question2">
                                How often do you go to beach ?
                                <RiArrowDownSFill className="Section__accordion__icono--add"/>
                            </a>
                            <div className="answer">
                                <p>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                                    </p>
                            </div>
                        </div>
                        <div className="Section__accordion--item" id="question3">
                            <a className="Section__accordion--link" href="#question3">
                                How often do you go to beach ?
                                <RiArrowDownSFill className="Section__accordion__icono--add"/>
                            </a>
                            <div className="answer">
                                <p>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                                    </p>
                            </div>
                        </div>
                        <div className="Section__accordion--item" id="question4">
                            <a className="Section__accordion--link" href="#question4">
                                How often do you go to beach ?
                                <RiArrowDownSFill className="Section__accordion__icono--add"/>
                            </a>
                            <div className="answer">
                                <p>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Accordion;