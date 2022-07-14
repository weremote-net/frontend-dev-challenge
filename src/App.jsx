import React from "react"
import Content from "./Components/Content/Content"
import Testimonials from "./Components/Testimonials/Testimonials"
import MenuFAQ from "./Components/FAQ/MenuFAQ"
import Hero from "./Components/Hero/Hero"
import Layout from "./Components/Layout/Layout"
import Formulario from "./Components/Form/Formulario"

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Content />
        <MenuFAQ />
        <Formulario />
      </Layout>
      
    </>
  )
}

export default App
