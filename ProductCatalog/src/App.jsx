import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import "./App.css"
import Cart from './pages/Cart/Cart'
import Shop from './pages/Shop/Shop'
import ShopContextProvider from './context/ShopContext'
import ProductDetail from './pages/Shop/ProductDetails'

const App = () => {
  return (
    <>
      <div className='App'>

        <ShopContextProvider>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path="/product/:id" element={<ProductDetail/>} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Router>
        </ShopContextProvider>

      </div>
    </>
  )
}

export default App