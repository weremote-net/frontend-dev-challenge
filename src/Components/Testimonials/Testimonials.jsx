import React, { useState, useEffect } from "react"
import Card from "./Card"
import data from "./DataCard"
import ArrowLeft from "../../Hooks/ArrowLeft"
import ArrowRight from "../../Hooks/ArrowRight"
import "../../css/Testimonials.css"

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(4)
  const len = data.length - 1

  useEffect(() => {
    const interval = setInterval(() => {
      activeIndex === len ? setActiveIndex(0) : setActiveIndex(activeIndex + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <div className="testimonial__container">
      <ArrowLeft
        prevElement={() =>
          setActiveIndex(activeIndex < 4 ? len : activeIndex - 1)
        }
      />
      <Card activeIndex={activeIndex} data={data} />
      <ArrowRight
        nextElement={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </div>
  )
}

export default Testimonials
