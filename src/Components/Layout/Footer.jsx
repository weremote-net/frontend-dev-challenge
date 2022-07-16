import React from "react"
import "../../css/Footer.css"
import footerLogo from "/images/mcontigo-logo.svg"
import lineas from "/images/lineas.svg"
import linkedin from "/images/linked-in-alt.svg"
import gmail from "/images/gmail.svg"
import github from "/images/github.svg"
import discord from "/images/discord.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <aside className="footer__aside">
        <div className="footer__aside--logo-wrapper">
          <img
            className="footer__aside--logo"
            src={footerLogo}
            alt="mcontigo-logo"
          />
          <span className="footer__aside-paragraph">
            <p className="footer__aside-txt">
              La Mente es Maravillosa is a property of Grupo MContigo
            </p>
            <p className="footer__aside-txt">© 2012 &dash; 2020.</p>
            <p className="footer__aside-txt">
              All rights reserved. Los contenidos de esta publicación se
              redactan solo con fines informativos. En ningún momento pueden
              servir para facilitar diagnósticos o sustituir la labor de un
              profesional. Le recomendamos que contacte con su especialista de
              confianza.
            </p>
          </span>
        </div>
      </aside>
      <div className="footer__aside--mid">
        <img className="footer__aside--lines" src={lineas} alt="lineas-mid" />
      </div>
      <aside className="footer__aside">
        <div className="footer__aside--polities">
          <span className="footer__aside-text">Política de Cookies</span>
          <span className="footer__aside-text">Política de Privacidad</span>
          <span className="footer__aside-text">
            Términos y condiciones de uso
          </span>
          <span className="footer__aside-text">
            Cláusula Informativa de Consentimiento
          </span>
        </div>
      </aside>
      <aside className="footer__aside-copyright">
        <p className="copyright__text">By Miguel Briceño</p>
        <article className="copyright__social">
          <a
            href="https://www.linkedin.com/in/miguelbricenodev/"
            target="_blank"
            rel="noopener noreferrer"
            className="social__wrapper-link"
          >
            <img src={linkedin} alt="linkedin" className="socialmedia" />
          </a>
          <a
            href="mailto:migueljbriceno@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social__wrapper-link"
          >
            <img src={gmail} alt="gmail" className="socialmedia" />
          </a>
          <a
            href="https://github.com/mikejbp/"
            target="_blank"
            rel="noopener noreferrer"
            className="social__wrapper-link"
          >
            <img src={github} alt="github" className="socialmedia" />
          </a>
          <a
            href="https://discord.com/invite/Maiku#4280"
            target="_blank"
            rel="noopener noreferrer"
            className="social__wrapper-link"
          >
            <img src={discord} alt="discor" className="socialmedia" />
          </a>
        </article>
      </aside>
    </footer>
  )
}

export default Footer
