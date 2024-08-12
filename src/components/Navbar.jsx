import React from 'react'
// import {FaCoins} from 'react-icons/fa'
// import { BsCcCircle } from "react-icons/bs"
import { BsCcCircleFill } from "react-icons/bs";
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to='/'>
      <div className="navbar">
          <BsCcCircleFill className='icon' />
          <h1> Coin <span className='blue'>Cap</span></h1>
      </div>
    </Link>
  )
}

export default Navbar