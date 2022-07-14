import React from "react"
import Contenido from "./Contenido"
import ContentImg from "/images/news.svg"
import ImgContent from "/images/Group 32.svg"

const Content = () => {
  return (
    <>
      <Contenido
        id="comunicacion"
        img={ContentImg}
        h1="Comunicación"
        h4="Internet es positivo porque nos une, nos conecta."
        span1="Internet "
        p1="se ha convertido lo que solía ser un mensaje "
        span2="unidireccional"
        p2=", en un diálogo en "
        span3="tiempo real "
        p3="con millones de personas."
      />
      <hr />
      <Contenido
        id="autoestima"
        img={ImgContent}
        h1="Autoestima"
        p1="Tómate un tiempo para "
        span2="apreciar "
        p2="lo "
        span3="increíble "
        p3="que eres"
      />
    </>
  )
}

export default Content
