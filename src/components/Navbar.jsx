import React from 'react'
import "../styles/navbar.css"
const name = "DevJuwon"
const job = "developer"

const Navbar = () => {
  return (
    <nav>
     <a className='logo' href="">
        <img src="./assets/icon.png" alt="" />
        <h1 className='logo-name'>Nexcent</h1>
        </a>
      
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Service</a>
        </li>
        <li>
          <a href="">Feature</a>
        </li>
        <li>
          <a href="">Product</a>
        </li>
        <li>
          <a href="">Testimonial</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
      </ul>

      <div className="btn-container">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  )
}

export default Navbar
