import React from "react"
import "../../css/Card.css"
import People from "./DataCard"

import { FaQuoteRight } from 'react-icons/fa';

const Card = ({ id, image, name, quote, title, personIndex, index }) => {
  let position = "nextSlide"
  if(personIndex === index) position = 'activeSlide'
  if(personIndex === index - 1 || (index === 0 && personIndex === People.length - 1)) position = 'lastSlide'

  return (
    <section className={position} key={id}>
      <article className="card__container">
        <aside className="card__container-img">
          <img className="card__img" src={image} alt={name} />
        </aside>
        <aside className="card__container-text">
          <FaQuoteRight className="tex__icon" />
          <p className="card__text-text">{quote}</p>
          <p className="card__container-name">
            <span className="card__name-span">{name}</span>, {title}
          </p>
        </aside>
      </article>
    </section>
  )
}

export default Card
{/* <article className={position} key={id}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
        </article> */}