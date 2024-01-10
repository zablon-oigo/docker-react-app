import {useState,React }from 'react'
import logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
function Header() {
  const[menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    setMenu(!menu)
  }
  const closeMenu=()=>{
    setMenu(false)
  }

  return (
    <>
    <header className="" >
      <div className="">
      <nav className="bg-gray-800 drop-shadow-2xl flex items-center justify-between md:px-20 py-3 px-5">
       <div className="">
       <Link to='/' smooth={true} spy={true} duration={500} >
       <img src={logo} alt="logo" className=''/>
       </Link>
      
       </div>
       <div className="md:block hidden">
        <Navbar/>
       </div>
       <button className="md:hidden block" onClick={toggleMenu}>
        {menu?<LiaTimesSolid  className='text-4xl text-amber-500'/> :<HiMiniBars3BottomRight className='text-4xl text-amber-500'/>}
       
       
       </button>

    </nav>
      </div>
    </header>

    </>
  )
}

export default Header