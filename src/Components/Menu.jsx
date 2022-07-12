import React, { useState } from "react"
import "../css/Menu.css"
import imgLogo from "/images/LMEM-logo.svg"

import { VscChromeClose, VscArrowRight } from "react-icons/vsc"

const Menu = () => {
  const [menu, setMenu] = useState(false)

  const closeMenu = () => setMenu(!menu)

  const stop = (e) => e.stopPropagation()

  return (
    <aside className="menu__container">
      <section className="menu__wrapper" onClick={stop}>
        <div className="menu__wrapper-btn__close">
          <button onClick={closeMenu} className="btn__close">
            {menu ? (
              <section className={menu ? "menu__wrapper-close" : ""}></section>
            ) : null}
            <VscChromeClose style={{ fontSize: "2rem" }} />
          </button>
          <header className="menu__wrapper-header">
            <img className="logo" src={imgLogo} alt="logo" />
          </header>
        </div>
        <article className="menu__wrapper-content">
          <nav className="nav__wrapper">
            <div className="nav__wrapper-container">
              <h2 className="nav__wrapper-subtitle">Embarazo</h2>
              <hr />
              <div className="nav__wrapper-links">
                <span className="nav__wrapper-position">
                  <p className="nav__wrapper-text">
                    Quiero ser mamá
                  </p>
                  <div className="nav_wrapper-icon">
                    <VscArrowRight />
                  </div>
                </span>

                <span className="nav__wrapper-position">
                  <p className="nav__wrapper-text">
                    Voy a ser mamá
                  </p>
                  <div className="nav_wrapper-icon">
                    <VscArrowRight />
                  </div>
                </span>
                <span className="nav__wrapper-position">
                  <p className="nav__wrapper-text">
                    Parto
                  </p>
                  <div className="nav_wrapper-icon">
                    <VscArrowRight />
                  </div>
                </span>
              </div>
            </div>
            <div className="nav__wrapper-container">
              <h2 className="nav__wrapper-subtitle">Embarazo</h2>
              <hr />
              <div className="nav__wrapper-links">
                <span className="nav__wrapper-position">
                  <p className="nav__wrapper-text">
                    Quiero ser mamá
                  </p>
                  <div className="nav_wrapper-icon">
                    <VscArrowRight />
                  </div>
                </span>

                <span className="nav__wrapper-position">
                  <p className="nav__wrapper-text">
                    Voy a ser mamá
                  </p>
                  <div className="nav_wrapper-icon">
                    <VscArrowRight />
                  </div>
                </span>
                <span className="nav__wrapper-position">
                  <p className="nav__wrapper-text">
                    Parto
                  </p>
                  <div className="nav_wrapper-icon">
                    <VscArrowRight />
                  </div>
                  
                </span>
              </div>
            </div>
            
            {/* */}
          </nav>
        </article>
      </section>
    </aside>
  )
}

export default Menu
