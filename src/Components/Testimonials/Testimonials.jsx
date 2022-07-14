import React, { useState, useEffect } from "react"
import Card from "./Card"
import data from "./DataCard"
import Arrows from "../../Hooks/Arrow"
import "../../css/Testimonials.css"

const Testimonials = (props) => {
  const [activeIndex, setActiveIndex] = useState(4)
  const len = data.length - 1

    useEffect(() => {
    const interval = setInterval(() => {
      activeIndex === len ? setActiveIndex(0) : setActiveIndex(activeIndex + 1)
    }, 1500)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <div className="testimonial__container">
      <Card activeIndex={activeIndex} data={data} />
      <Arrows
        prevElement={() =>
          setActiveIndex(activeIndex < 4 ? len : activeIndex - 1)
        }
        nextElement={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </div>
  )
}

export default Testimonials
