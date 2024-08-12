import React from 'react'
// import {FaCoins} from 'react-icons/fa'
// import { BsCcCircle } from "react-icons/bs"
import { BsCcCircleFill } from "react-icons/bs";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <BsCcCircleFill className='icon' />
        <h1> Coin <span className='blue'>Cap</span></h1>
    </div>
  )
}

export default Navbar