import React from "react"
import "../../css/Contenido.css"

const Contenido = ({ id, img, h1, h4, p1, p2, p3, span1, span2, span3 }) => {
  return (
    <section id={id} className="content__container">
      <div className="content__wrapper">
        <aside className="content__wrapper-img">
          <img className="content__img" src={img} alt="content" />
        </aside>
        <aside className="content__wrapper-txt">
          <h1 className="content__txt-h1">{h1}</h1>
          <h4 className="content__txt-h4">{h4}</h4>
          <p className="content__txt-p">
            <span className="context__txt-span1">{span1}</span>
            {p1}
            <span className="context__txt-span2">{span2}</span>
            {p2}
            <span className="context__txt-span3">{span3}</span>
            {p3}
          </p>
        </aside>
      </div>
    </section>
  )
}

export default Contenido
