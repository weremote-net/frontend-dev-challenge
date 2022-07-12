import React from "react"
import "../../css/HeroElements.css"

const HeroElements = ({ text, span, text1, text2, text3 }) => {
  return (
    <section className="section__txt">
      <div className="section__wrapper-one">
        <h1 className="wrapper__txt-one">{text}</h1>
        <span className="wapper__txt-span">{span}</span>
        <h1 className="wrapper__txt-one">{text1}</h1>
      </div>
      <div className="section__wrapper">
        <h3 className="wrapper__txt-two">{text2}</h3>
      </div>
      <div className="section__wrapper">
        <h3 className="wrapper__txt-three">{text3}</h3>
      </div>
    </section>
  )
}

export default HeroElements
