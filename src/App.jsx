import React from "react"
import Content from "./Components/Content/Content"
import MenuFAQ from "./Components/FAQ/MenuFAQ"
import Hero from "./Components/Hero/Hero"
import Layout from './Components/Layout/Layout'

function App() {
  
  return (
    <>
      <Layout>
        <Hero />
        <Content />
        <MenuFAQ />
      </Layout>
      
    </>
  )
}

export default App
