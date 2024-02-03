import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import "./App.css"
import Cart from './pages/Cart/Cart'
import Shop from './pages/Shop/Shop'

const App = () => {
  return (
    <>
      <div className='App'>

        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Router>

      </div>
    </>
  )
}

export default App