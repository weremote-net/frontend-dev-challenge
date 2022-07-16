import React from "react"
import data from "./DataCard"
import '../../css/Testimonials.css'

const Card = ({ activeIndex }) => {
  return (
    <section id='testimonios' className="testimonial" key={data}>
            TESTIMONIOS
      {data.map((item, index) => (
        <div
          key={index}
          className={index === activeIndex ? "active" : "inactive"}
        >
          <figure className="testimonial__image">
            <img
              className="testimonial__img"
              src={item.image}
              alt={item.name}
            />
          </figure>
          <span className="testimonial__container-text">
            <h2 className="testimonial__name">
              {item.name}
            </h2>
            <h3 className="testimonial__text">
              {item.testimonial}
            </h3>
          </span>
        </div>
      ))}
    </section>
  )
}

export default Card
{
  /* <article className={position} key={id}>

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
    </section> */
}
