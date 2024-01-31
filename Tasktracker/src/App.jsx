import React from 'react'
import Header from './components/Header'
import "./App.css"
import Footer from './components/Footer'
import Note from './components/Note'
import CreateArea from './components/CreateArea'

const App = () => {
  return (
    <div>
      <Header/>
      <CreateArea/>
      <Note key={1} title="Note title" content="Note Content"/>
      <Footer/>
    </div>
  )
}

export default App