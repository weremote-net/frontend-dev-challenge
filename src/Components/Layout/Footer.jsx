import React from 'react'
import '../../css/Footer.css'
import footerLogo from '../../../public/images/mcontigo-logo.svg'
import lineas from "../../../public/images/lineas.svg";

const Footer = () => {
  return (
    <footer className='footer'>

      <aside className='footer__aside'>
        <div className='footer__aside--logo-wrapper'>
          <img className='footer__aside--logo' src={footerLogo} alt='mcontigo-logo' />
        </div>
      </aside>
      <aside className='footer__aside'>
        <div className='footer__aside--mid'>
          <img className='footer__aside--lines' src={lineas} alt='lineas-mid' />
        </div>
      </aside>
      <aside className='footer__aside'>
        <div className='footer__aside--polities'>
          <span className='footer__aside--text'>Política de Cookies</span>
          <span className='footer__aside--text'>Política de Privacidad</span>
          <span className='footer__aside--text'>Términos y condiciones de uso</span>
          <span className='footer__aside--text'>Cláusula Informativa de Consentimiento</span>
        </div>
      </aside>

    </footer>
  )
}

export default Footer