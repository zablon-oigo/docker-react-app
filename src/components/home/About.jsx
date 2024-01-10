import React from 'react'
import Button from '../../Layout/Button'
import dog from '../../assets/images/dog.png'
import { IoMdArrowDropright } from "react-icons/io";
function About() {
  return (
    <>
     <div className="min-h-[60vh] bg-gray-100">
        <div className="md:px-20 py-10 px-6 flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="md:w-1/2 w-full">
                <img src={dog} alt="" className=''/>
            </div>
            <div className="md:w-1/2 w-full">
                <p className="md:text-3xl text-2xl text-center md:text-start  font-extrabold mb-3 underline decoration-4 underline-offset-4 decoration-amber-500">
                    who we are
                </p>
                <h2 className="md:text-6xl text-center md:text-start text-3xl font-extrabold mb-2 capitalize leading-tight">
                We Love Your Pet, Just as You Do!
                </h2>
                <p className="md:text-2xl text-lg text-center md:text-start font-light leading-relaxed">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis esse consequatur labore consequuntur veniam possimus ratione obcaecati, expedita accusantium minima earum suscipit, magnam aut debitis nisi quod nostrum dolorem iste aperiam dolore laborum molestiae ullam nam. Aspernatur voluptates fugit excepturi!
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