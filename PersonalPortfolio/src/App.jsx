import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'

const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
      </div>
    </>
  )
}

export default App