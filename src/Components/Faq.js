import React from "react";
import reactDom from "react-dom";
import { Fragment } from "react";
import Accordion from "./Accordion";
import '../styles/Faq.scss'
import photo5 from '../Assets/photo5.png' 

const Faq = () => {
    return(
        <Fragment>
            <section className="Faq">
                <div className="Faq__content">
                    <h1>Su viaje de</h1><span>salud emocional</span><h1>empieza aqui</h1>
                    <p>conoce nuestros profesionales con licencia</p>
                    <p>Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.</p>
                </div>
                <div className="Faq__accordion">
                    <Accordion />
                </div>
            </section>
        </Fragment>
    )
}

export default Faq;