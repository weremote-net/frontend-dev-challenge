import React, { useState, useEffect } from "react"
import "../css/Formulario.css"

const Formulario = () => {
  const initialValues = { name: "", email: "", message: "" }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

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
    if (!values.name) errors.name = "El nombre es requerido"
    if (!values.email) errors.email = "El correo es requerido"
    else if (!regex.test(values.email))
      errors.email = "¡Introduce un correo válido!"
    if (!values.message) errors.message = "El mensaje es requerido"
    else if (values.message.length < 20)
      errors.message = "¡El mensaje es muy corto!"
    else if (values.message.length > 100)
      errors.message = "¡El mensaje es muy largo!"

    return errors
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])

  return (
    <section className="form__wrapper">
      {Object.keys(formErrors).length === 0 && isSubmit
        ? alert("Formulario enviado")
        : ""}
      <form id="contacto" className="form__container" onSubmit={handleSubmit}>
        <h1 className="form__title">Contáctanos</h1>
        <div className="form">
          <div className="form__field">
            <label className="form__label">Nombre completo</label>
            <input
              className="form__input"
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <p className="form__text">{formErrors.name}</p>
          <div className="form__field">
            <label className="form__label">Correo Electrónico</label>
            <input
              className="form__input"
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="form__text">{formErrors.email}</p>
          <div className="form__field">
            <label className="form__label">Mensaje</label>
            <textarea
              className="form__textarea"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
          </div>
          <p className="form__text">{formErrors.message}</p>
          <button className="form__btn">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default Formulario
