import React from "react";
import reactDom from "react-dom";
import { Fragment } from "react";
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
                            ¿Como puedo integrarme al grupo de profesionales?
                                <RiArrowDownSFill className="Section__accordion__icono--add"/>
            
                            </a>
                            
                            <div className="answer">
                                <p>
                                En nuestra seccion "Oportunidades" puedes encontrar mas informacion sobre
                                como integrarte a nuestro equipo, asi como tambien los numeros de contacto
                                de nuestros reclutadores 
                                    </p>
                            </div>
                        </div>
                        <div className="Section__accordion--item" id="question2">
                            <a className="Section__accordion--link" href="#question2">
                            ¿A que oficinas puedo acercarme para solicitar una consulta ?
                                <RiArrowDownSFill className="Section__accordion__icono--add"/>
                            </a>
                            <div className="answer">
                                <p>
                                Actualmente hacemos todas nuestras consultas a travez de nuestra pagina web. En
                                caso de requerir una consulta o solicitar un servicio medico con urgencia, comuniquese
                                a travez de nuestros numeros telefonicos. 
                                    </p>
                            </div>
                        </div>
                        <div className="Section__accordion--item" id="question3">
                            <a className="Section__accordion--link" href="#question3">
                            ¿En cuanto tiempo responderan a mi mensaje?
                                <RiArrowDownSFill className="Section__accordion__icono--add"/>
                            </a>
                            <div className="answer">
                                <p>
                               El tiempo de respuesta aproximado es entre 3 dias y una semana, aunque puede
                               variar dependiendo de la consulta que haga el cliente particular
                                    </p>
                            </div>
                        </div>
                        <div className="Section__accordion--item" id="question4">
                            <a className="Section__accordion--link" href="#question4">
                            ¿Que puedo hacer si no estoy satisfecho con el servicio ?
                                <RiArrowDownSFill className="Section__accordion__icono--add"/>
                            </a>
                            <div className="answer">
                                <p>
                               En caso de no quedar satisfecho/a, ya sea por actitud inadecuada de parte de nuestro
                               profesional, pocos resultados o equivocacion, contactenos y le ofreceremos devoluciones
                               dependiendo de su situacion personal.
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