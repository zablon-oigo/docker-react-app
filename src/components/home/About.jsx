import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../../Layout/Button'
import dog from '../../assets/images/dog.png'
import { IoMdArrowDropright } from "react-icons/io";
function About() {
    useEffect(() => {
        AOS.init();
     }, []);
  return (
    <>
     <div className="min-h-[60vh] bg-gray-100">
        <div className="md:px-20 py-10 px-6 flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-1/2 w-full" data-aos='fade-right' data-aos-easing="linear" data-aos-duration="1500">
                <img src={dog} alt="" className=''/>
            </div>
            <div className="md:w-1/2 w-full" data-aos='fade-left' data-aos-easing="linear" data-aos-duration="1500">
                <p className="md:text-3xl text-2xl text-center md:text-start  font-extrabold mb-3 underline decoration-4 underline-offset-4 decoration-amber-500">
                    who we are
                </p>
                <h2 className="md:text-6xl text-center md:text-start text-3xl font-extrabold mb-2 capitalize leading-tight">
                Committed to Ensuring Your Pet's Joy and Health
                </h2>
                <p className="md:text-2xl text-lg text-center md:text-start font-light leading-relaxed">
                At our core, we are passionate about providing exceptional pet care services. We understand the unique bond you share with your furry friends, and our commitment is to love and care for them just as you do. With a focus on their happiness and well-being, our team goes above and beyond to ensure a nurturing and safe environment. Your pets are family, and at <span className="font-semibold text-amber-500">woofs & purrs</span>, they are treated with the utmost love and attention they deserve.
                </p>
                <div className="mt-4 flex justify-center md:justify-start">
                    <button className="flex items-center justify-center duration-500 bg-amber-500 capitalize  hover:bg-amber-400 text-xl text-white  py-3 px-6 rounded-xl">
                        know more
                    <IoMdArrowDropright className='text-2xl mt-1'/>
                    </button>
                    
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default About