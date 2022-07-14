import React, { useState } from "react"
import "../../css/MenuFAQ.css"
import { DataFAQ } from "./DataFAQ"

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

const MenuFAQ = () => {
  const [accordion, setActiveAccordion] = useState(-1)

  const toggleAccordion = (index) => {
    if (index === accordion) {
      setActiveAccordion(-1)
      return
    }
    setActiveAccordion(index)
  }
  return (
    <>
      <section className="container">
        <div className="container__title">
          <span id="faq" className="accordion__title">FAQ</span>
        </div>
        <div className="accordion__faq">
          {DataFAQ.map((item, index) => (
            <aside
              className="accordion__faq-aside"
              key={index}
              onClick={() => toggleAccordion(index)}
            >
              <header
                className={
                  accordion === index
                    ? "accordion__faq-heading"
                    : "heading-inactive"
                }
              >
                <h3
                  className={accordion === index ? "active-h3" : "inactive-h3"}
                >
                  {item.question}
                </h3>

                <div className="accordion__faq-icon">
                  {accordion === index ? (
                    <>
                      <span className="faq-icon">
                        <AiOutlineMinusCircle />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="faq-icon">
                        <AiOutlinePlusCircle />
                      </span>
                    </>
                  )}
                </div>
              </header>
              <article className="accordion__faq-answer">
                <p className={accordion === index ? "active-p" : "inactive"}>
                  <span className="faq__answer-txt">{item.answer}</span>
                  <span className="faq__answer-txt">{item.answer2}</span>
                  <span className="faq__answer-txt">{item.answer3}</span>
                  <span className="faq__answer-txt">{item.answer4}</span>
                  <span className="faq__answer-txt">{item.answer4}</span>
                  <span className="faq__answer-txt">{item.answer5}</span>
                  <span className="faq__answer-txt">{item.answer6}</span>
                  <span className="faq__answer-txt">{item.answer7}</span>
                </p>
              </article>
            </aside>
          ))}
        </div>
      </section>
    </>
  )
}

export default MenuFAQ
