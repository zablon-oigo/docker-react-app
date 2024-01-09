import React from 'react'
import {Link } from 'react-router-dom'
import Button from '../Layout/Button'
function Navbar() {

  return (
    <>
    <div className="flex items-center  space-x-6">
            <Link to="." className="text-xl font-medium text-white">Home</Link>
            <Link to="about" className="text-xl font-medium text-white">Who We Are</Link>
            <Link to="contact" className="text-xl font-medium text-white">Contact</Link>
            <Link to="services" className="text-xl font-medium text-white">Services</Link>
            <div className="mx-2">
       <Button title="Download APP"/>
       </div> 
       </div>

    </>
  )
}

export default Navbar