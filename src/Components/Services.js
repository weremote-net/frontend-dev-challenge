import React from "react";
import reactDom from "react-dom";
import { Fragment } from "react";
import {BiUpArrowAlt} from 'react-icons/bi'
import '../styles/Services.scss'
import ilustration1 from '../Assets/ilustration1.png'
import ilustration2 from '../Assets/ilustration2.png'
import ilustration3 from '../Assets/ilustration3.png'
import ilustration4 from '../Assets/ilustration4.png'

const Services = () => {
    return(
        <Fragment>
            <section className="Services">
                <div className="Services__item">
                    <img src={ilustration1}/>
                    <h1>Equipo de profesionales</h1>
                    <p>Contamos con servicios especializados en la nube, para que accedas a tu informacion desde cualquier lugar</p>
                </div>
                <div className="Services__item">
                     <img src={ilustration2}/>
                   
                    <h1>Equipo de profesionales</h1>
                    <p>Encuentra a tu medico ideal y al mejor costo. Contamos con un equipo de +100 medicos profesionales</p>
                </div>
                <div className="Services__item">
                    <img src={ilustration3}/>
                    <h1>Atencion al cliente</h1>
                     <p>Puedes aclarar todas tus dudas antes de pagar por algunos de nuestros servicios medicos </p>
                </div>
                <div className="Services__item">
                    <img src={ilustration4}/>
                    <h1>Encuentra lo que buscas</h1>
                    <p>No esperes mas! Ofrecemos asesoramiento para cualquier tipo de problema medico que poseas.</p>
                </div>
            </section>
        </Fragment>
    )
}

export default Services;