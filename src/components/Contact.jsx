import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '../Layout/ContactForm'
import contact from "../assets/images/contact.png"

export default function Contact() {
  useEffect(() => {
    AOS.init();
 }, []);
  return (
    <>
     <div className="md:px-20 md:py-20 px-6 py-6  min-h-[90vh] bg-gradient-to-r from-amber-50  to-yellow-100">
      <h2 className="md:text-6xl text-4xl  text-center text-amber-600 capitalize font-semibold">
        get in touch
      </h2>
      <div className="my-10">
        <div className="flex  flex-col md:flex-row-reverse items-center gap-4">
          <div className="w-full md:w-3/5">
            <div className="mb-4">
              <h2 className="md:text-3xl text-xl text-amber-500 font-semibold capitalize text-center">
                tell us about your pet
              </h2>
            </div>
          <img src={contact} alt="" className="" />
          </div>
          <div className="w-full md:w-2/4 bg-white rounded-xl p-6 shadow-2xl" data-aos='zoom-in-up' data-aos-easing="linear" data-aos-duration="1500">
            <h2 className="md:text-3xl text-xl text-center text-amber-400 font-semibold mb-6">Please fill out the form</h2>
               <ContactForm/>
          </div>
       
        </div>
      </div>
     </div>
    </>
  )
}

