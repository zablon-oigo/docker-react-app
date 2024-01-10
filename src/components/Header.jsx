import {useState,React }from 'react'
import logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import Button from '../Layout/Button';
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
    <section className={`${menu?'translate-x-0':'-translate-x-full'} duration-500 transform transition-transform bg-white absolute top-[80px] right-0 w-full h-[400px] md:hidden block`}>
    <div className="flex flex-col justify-start items-start w-full gap-6 my-6">
                  <div className="flex flex-col space-y-8 px-4 w-full">
                  <Link to="." className="text-3xl font-semibold border-b-2 border-gray-600 text-gray-700" onClick={closeMenu}>Home</Link>
            <Link to="about" className="text-3xl font-semibold border-b-2 border-gray-600 text-gray-700" onClick={closeMenu}>Who We Are</Link>
            <Link to="contact" className="text-3xl font-semibold border-b-2 border-gray-600 text-gray-700" onClick={closeMenu}>Contact</Link>
            <Link to="services" className="text-3xl font-semibold border-b-2 border-gray-600 text-gray-700" onClick={closeMenu}>Services</Link>
                  </div>
                  <div className="px-4">
                  <Button title="Download APP"/>
                  </div> 
      </div>
    </section>
      </div>
    </header>

    </>
  )
}

export default Header