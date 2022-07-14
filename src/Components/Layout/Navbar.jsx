import React, { useState } from "react"
import "../../css/Navbar.css"
import logoImg from "/images/LMEM-logo.svg"
import { GiHamburgerMenu } from "react-icons/gi"
import Menu from "../Menu"
import Modal from "../Modal"

const Navbar = () => {
  const [menuSidebar, setMenuSidebar] = useState(false)
  const openSidebar = () => setMenuSidebar(!menuSidebar)

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-nav">
      <aside className="wrapper__menu">
        <button
          type="button"
          onClick={openSidebar}
          className="wrapper__menu--btn"
        >
          {menuSidebar ? <Menu /> : null}
          <GiHamburgerMenu />
        </button>
      </aside>

      <aside className="wrapper__logo">
        <img className="wrapper__logo--img" src={logoImg} alt="logo-lmem" />
      </aside>

      <aside className="wrapper__search">
        <button className="primaryBtn" onClick={() => setIsOpen(true)}>
        Log In
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} isOpen={isOpen} />}
      </aside>
    </header>
  )
}

export default Navbar
