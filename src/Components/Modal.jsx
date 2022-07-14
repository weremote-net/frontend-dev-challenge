import React, { useState } from 'react'
import '../css/Modal.css'

const Modal = () => {

  return (
    <section className="container">
      <form className="form__container">
        <h1 className="form__title">Login Form</h1>
        <div className="form">
          <div className="form__field">
            <label className="form__label">Username</label>
            <input
              className="form__input"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <p className="form_text">{""}</p>
          <div className="form__field">
            <label className="form__label">Email</label>
            <input
              className="form__input"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <p className="form_text">{""}</p>
          <div className="form__field">
            <label className="form__label">Password</label>
            <input
              className="form__input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <p className="form_text">{""}</p>
          <button className="form__btn">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default Modal