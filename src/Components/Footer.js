import React from "react";
import reactDom from "react-dom";
import '../styles/Footer.scss'
import logo from '../Assets/logo.png'

const Footer = () => {
    return(
        <section className="SectionFooter">
            <div className="SectionFooter__content">
                <div className="SectionFooter__content__description">
                    <p>
                    La Mente es Maravillosa is a property of Grupo MContigo 2012 - 2020. All rights reserved.
                    Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional
                    .Le recomendamos que contacte con su especialista de confianza
                    </p>
                </div>
                <div className="SectionFooter__content__logo">
                    <img src={logo}/>
                </div>
            </div>
            <div className="SectionFooter__links">
            <a>Politica de cookies</a>
            <a>Politica de privacidad</a>
            <a>Terminos y condiciones de uso</a>
            <a>Clausula informativa y de consentimiento</a>
            </div>
           
        </section>
    )
}

export default Footer;