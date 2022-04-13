import React from "react";
import reactDom from "react-dom";
import '../styles/Contact.scss'

const Contact = () => {

    return(
        <section className="Contact">
            <div className="Contact__forms">
            <input type="text" placeholder="Primer nombre"/>
            <input type="text" placeholder="Apellido"/>
            <input type="text" placeholder="Direccion"/>
            <input type="text" placeholder="Telefono"/>

            <div className="Contact__button">
                <button onClick={()=>{ alert('Mensaje enviado'); }}><a>Enviar</a></button>
            </div>

            </div>
            <div className="Contact__textarea">
                <textarea>

                </textarea>
            </div>
        </section>
    )
}

export default Contact;