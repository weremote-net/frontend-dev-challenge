import React, { useState } from "react"
import "../../css/Navbar.css"
import logoImg from "../../../public/images/LMEM-logo.svg"

import { GiHamburgerMenu } from "react-icons/gi"
import { BiSearchAlt } from "react-icons/bi"
import Menu from "../Menu"

const Navbar = () => {
  const [menuSidebar, setMenuSidebar] = useState(false);
  const openSidebar = () => setMenuSidebar(!menuSidebar);

  return (
    <header className="header-nav">
      <aside className="wrapper__menu">
        <button type="button" onClick={openSidebar} className="wrapper__menu--btn">
          {menuSidebar ? <Menu /> : null}
          <GiHamburgerMenu />
        </button>
      </aside>

      <aside className="wrapper__logo">
        <img className="wrapper__logo--img" src={logoImg} alt="logo-lmem" />
      </aside>

      <aside className="wrapper__search">
        <BiSearchAlt />
      </aside>
    </header>
  )
}

export default Navbar
