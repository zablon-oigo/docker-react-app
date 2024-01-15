import React from 'react'
import {Link } from 'react-router-dom'
import Button from '../Layout/Button'
function Navbar() {

  return (
    <>
    <div className="flex items-center  space-x-6">
            <Link to="." className="duration-300 text-xl font-medium text-white relative group">
              Home
              <span className="duration-300 inset-x-0 absolute bottom-0  h-0.5 bg-amber-500 origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform "></span>
              </Link>
            <Link to="about" className="text-xl font-medium text-white relative group duration-300">
              Who We Are
              <span className="duration-300 inset-x-0 absolute bottom-0  h-0.5 bg-amber-500 origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform "></span>
              </Link>
              <Link to="services" className="text-xl font-medium text-white relative group duration-300">
              Services
              <span className="duration-300 inset-x-0 absolute bottom-0  h-0.5 bg-amber-500 origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform "></span>
              </Link>
            <Link to="contact" className="text-xl font-medium text-white relative group duration-300">
              Contact
              <span className="duration-300 inset-x-0 absolute bottom-0  h-0.5 bg-amber-500 origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform "></span>
              </Link>
            
            <div className="mx-2">
                <Button title="Download APP"/>
            </div> 
       </div>

    </>
  )
}

export default Navbar