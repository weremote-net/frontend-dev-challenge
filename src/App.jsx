import React from "react"
import Content from "./Components/Content/Content"
import Hero from "./Components/Hero/Hero"
import Layout from './Components/Layout/Layout'

function App() {
  
  return (
    <>
      <Layout>
        <Hero />
        <Content />
      </Layout>
    </>
  )
}

export default App
