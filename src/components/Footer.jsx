import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegTimesCircle, FaBusinessTime } from "react-icons/fa";
function Footer() {
  return (
    <>
         <div className="bg-amber-50 min-h-[400px] md:px-20 px-5 py-10">
            <div className="flex justify-between flex-col md:flex-row  gap-x-6 gap-y-4">
              <div className="w-full md:w-2/5">
                <img src={logo} alt="" className="" />
                <div className="">
                  <p className="font-light leading-tight text-xl text-amber-900">
                  Established in 2019, our journey began with a sincere passion for pet care. Since our inception, we've grown and flourished, driven by a deep commitment to the well-being of every furry companion. At our core, we believe in providing unparalleled care and building lasting connections with pets, fostering an environment where they can thrive and feel loved.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-3/4 flex flex-col md:flex-row justify-between">
               <div className="w-full mb-6">
               <h2 className="text-3xl text-amber-500 font-semibold mb-6">Quick Links</h2>
                     <div className="flex flex-col items-start  space-y-6">
                        <Link to="." className="text-xl font-medium text-amber-800">Home</Link>
                        <Link to="about" className="text-xl font-medium text-amber-800">Who We Are</Link>
                        <Link to="contact" className="text-xl font-medium text-amber-800">Contact</Link>
                        <Link to="services" className="text-xl font-medium text-amber-800">Services</Link> 
                     </div>
               </div>
               <div className="w-full ">
               <h2 className="text-3xl text-amber-500 font-semibold mb-6">Visit Us</h2>
               <div className="mb-6">
                        <div className="flex items-center mb-3 gap-2">
                        <FaLocationDot className='text-amber-500 text-3xl '/> <p className="font-light text-xl text-amber-800">123 Main Street, New York, NY 10001</p>
                        </div>
                      <div className="flex items-center mb-3 gap-2">
                      <IoMdCall  className='text-amber-500 text-3xl '/><p className="font-light text-xl text-amber-800">+(1) 123-456-7890</p>
                      </div>
                  <div className="flex items-center mb-3 gap-2">
                  <MdEmail  className='text-amber-500 text-3xl '/><p className="font-light text-xl text-amber-800">hello@pet.com</p>
                  </div>
                 <div className="flex items-center mb-3 gap-2 ">
                        <FaBusinessTime className='text-amber-500 text-3xl '/> <p className="font-light text-xl text-amber-800">Mon - Fri: 9:00 AM - 5:00 PM</p>
                 </div>
                 <div className="flex items-center mb-3 gap-2  ">
                      <FaBusinessTime className='text-amber-500 text-3xl '/> <p className="font-light text-xl text-amber-800">Saturday: 9:00 AM - 12:00 PM</p>
                 </div>
                  <div className="flex items-center mb-3 gap-2 ">
                   <FaRegTimesCircle className='text-amber-500 text-3xl '/>            <p className="font-light text-xl text-amber-800">Sunday: Closed</p>
                  </div>

               </div>
                  <div className="">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03599286225!2d-74.30931915280787!3d40.6975399765283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2ske!4v1704876454057!5m2!1sen!2ske" className='w-[400px] h-[200px]  border-none' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
               </div>
              </div>
            </div>
            <p className="text-amber-400 text-center mt-10">Copyright &copy; {new Date().getFullYear()}. All rights reserved</p>
         </div>
    </>
  )
}

export default Footer