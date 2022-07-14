import React from "react"
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import "../css/Modal.css"
import { RiCloseLine } from "react-icons/ri"

const Modal = ({ setIsOpen, isOpen }) => {
  const stop = (e) => e.stopPropagation()

  return ReactDOM.createPortal(
    <CSSTransition in={isOpen} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="darkBG" onClick={() => setIsOpen(false)}>
        <section className="modal__container">
          <form className="modal__wrapper">
            <aside className="modal__close-btn">
              <button
                className="modal__closeBtn"
                onClick={() => setIsOpen(false)}
              >
                <RiCloseLine style={{ marginBottom: "-3px" }} />
              </button>
            </aside>
            <h1 className="modal__title">Login Form</h1>
            <div className="modal" onClick={stop}>
              <div className="modal__field">
                <label className="modal__label">Username</label>
                <input
                  className="modal__input"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <p className="modal_text">{""}</p>
              <div className="modal__field">
                <label className="modal__label">Email</label>
                <input
                  className="modal__input"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <p className="modal_text">{""}</p>
              <div className="modal__field">
                <label className="modal__label">Password</label>
                <input
                  className="modal__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <p className="modal_text">{""}</p>
              <button className="modal__btn">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  )
}

export default Modal
