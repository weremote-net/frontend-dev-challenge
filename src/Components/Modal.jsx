import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { CSSTransition } from "react-transition-group"
import "../css/Modal.css"
import { RiCloseLine } from "react-icons/ri"

const Modal = ({ setIsOpen, isOpen }) => {
  const initialValues = { username: "", email: "", password: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const stop = (e) => e.stopPropagation()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  const validate = (values) => {
    const errors = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (!values.username) errors.username = "El usuario es requerido"
    if (!values.email) errors.email = "El correo es requerido"
    else if (!regex.test(values.email))
      errors.email = "¡Introduce un correo válido!"
    if (!values.password) errors.password = "La contraseña es requerida"
    else if (values.password.length < 4)
      errors.password = "¡La contraseña es muy corta!"
    else if (values.password.length > 10)
      errors.password = "¡La contraseña es muy larga!"
    return errors
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])

  return ReactDOM.createPortal(
    <CSSTransition in={isOpen} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="darkBG" onClick={() => setIsOpen(false)}>
        <section className="modal__container">
          {Object.keys(formErrors).length === 0 && isSubmit
            ? alert("Formulario enviado")
            : ""}
          <form className="modal__wrapper" onSubmit={handleSubmit}>
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
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
              <p className="modal__text">{formErrors.username}</p>
              <div className="modal__field">
                <label className="modal__label">Email</label>
                <input
                  className="modal__input"
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p className="modal__text">{formErrors.email}</p>
              <div className="modal__field">
                <label className="modal__label">Password</label>
                <input
                  className="modal__input"
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p className="modal__text">{formErrors.password}</p>
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
