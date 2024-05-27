import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <FaCoins className='icon' />
        <h1> Coin <span className='blue'>Cap</span></h1>
    </div>
  )
}

export default Navbar