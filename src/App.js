import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Client from './components/Client'
import Manage from './components/Manage'
import Pixel from './components/Pixel'
import Local from './components/Local'
import Site from './components/Site'
import Customer from './components/Customer'
import Caring from './components/Caring'
import French from './components/French'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Client/>
      <Manage/>
      <Pixel/>
      <Local/>
      <Site/>
      <Customer/>
      <Caring/>
      <French/>
      <Footer/>
    </div>
  )
}

export default App
