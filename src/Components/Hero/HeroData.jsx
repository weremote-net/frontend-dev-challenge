import React, { useState, useEffect } from "react"
import "../../css/Hero.css"
import "../../css/Testimonials.css"
import { HeroImg } from "./HeroImg"
import HeroElements from "./HeroElements"
import { FcPrevious, FcNext } from "react-icons/fc";

const ImgSlider = ({ slides }) => {
  const [currentImg, setCurrentImg] = useState(0)
  const len = slides.length

  const nextSlide = () => {
    setCurrentImg(currentImg === len - 1 ? 0 : currentImg + 1)
  }

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? len - 1 : currentImg - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      currentImg === len - 1 ? setCurrentImg(0) : setCurrentImg(currentImg + 1)
    }, 20000)
    return () => clearInterval(interval)
  }, [currentImg])

  /*   if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  } */
  
  return (
    <section className="slider">
      <FcPrevious className="slider__left-arrow" onClick={prevSlide} />
      <FcNext className="slider__right-arrow" onClick={nextSlide} />
      {HeroImg.map((slide, index) => {
        return (
          <div
            className={
              index === currentImg ? "slider__active" : "slider__inactive"
            }
            key={index}
          >
            {index === currentImg && (
              <img src={slide.image} alt="HeroPhoto" className="slider__img" />
            )}
            <div
              className={
                currentImg === 0 ? "slider__txt" : "slider__txt-hidden"
              }
            >
              <HeroElements
                text="Su viaje de"
                span="salud emocional"
                text1="empieza aquí"
                text2="Conoce a nuestros profesionales con licencia"
                text3="Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad."
              />
            </div>
            <div
              className={
                currentImg === 1 ? "slider__txt" : "slider__txt-hidden"
              }
            >
              <HeroElements
                text="Su viaje de"
                span="salud emocional"
                text1="empieza aquí"
                text2="Conoce a nuestros profesionales con licencia"
                text3="Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad."
              />
            </div>
            <div
              className={
                currentImg === 2 ? "slider__txt" : "slider__txt-hidden"
              }
            >
              <HeroElements
                text="Su viaje de"
                span="salud emocional"
                text1="empieza aquí"
                text2="Conoce a nuestros profesionales con licencia"
                text3="Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad."
              />
            </div>
            <div
              className={
                currentImg === 3 ? "slider__txt" : "slider__txt-hidden"
              }
            >
              <HeroElements
                text="Su viaje de"
                span="salud emocional"
                text1="empieza aquí"
                text2="Conoce a nuestros profesionales con licencia"
                text3="Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad."
              />
            </div>
            <div
              className={
                currentImg === len - 1 ? "slider__txt" : "slider__txt-hidden"
              }
            >
              <HeroElements
                text="Su viaje de"
                span="salud emocional"
                text1="empieza aquí"
                text2="Conoce a nuestros profesionales con licencia"
                text3="Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad."
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ImgSlider
