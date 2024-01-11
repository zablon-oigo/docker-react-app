import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import review from '../../assets/images/review.jpg'
import { FaFacebook,FaTwitter } from "react-icons/fa6";
import { GrPinterest } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
function Reviews() {
  useEffect(() => {
    AOS.init();
 }, []);
    const bgImage = {
        backgroundImage:`url(${review})`,
        height:'280px',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    }
  return (
    <>
    <section className="bg-gray-100 min-h-[280px] px-20 relative" style={bgImage}>
     <div className="bg-black h-[280px] py-20 w-full absolute top-0 left-0 bg-opacity-50" >
           <h2 className="capitalize text-center md:text-6xl text-3xl text-amber-500 font-extrabold" data-aos-easing="linear" data-aos='fade-left' data-aos-duration='1500'>
            review us
           </h2>
           <div className="flex justify-center gap-4 items-center mt-4" data-aos='fade-right' data-aos-duration='1500' data-aos-easing="linear">
           <FaFacebook className='text-4xl text-white hover:rotate-12 hover:scale-110 duration-300'/>
           <FaTwitter className='text-4xl text-white hover:rotate-12 hover:scale-110 duration-300'/>
           <GrPinterest className='text-4xl text-white hover:rotate-12 hover:scale-110 duration-300'/>
           <GrInstagram className='text-4xl text-white hover:rotate-12 hover:scale-110 duration-300'/>
           </div>
        </div>
   
    </section>
    </>
  )
}

export default Reviews