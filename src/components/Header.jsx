import React from 'react'
import logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

function Header() {

  return (
    <>
    <header className="" >
      <div className="">
      <nav className="flex items-center justify-between md:px-20 py-3 px-5">
       <div className="">
       <Link to='/' smooth={true} spy={true} duration={500} >
       <img src={logo} alt="logo" className=''/>
       </Link>
      
       </div>
       <div className="md:block hidden">
        <Navbar/>
       </div>

    </nav>
      </div>
    </header>

    </>
  )
}

export default Header