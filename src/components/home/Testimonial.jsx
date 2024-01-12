import React from 'react'
import TestimonialCard from '../../Layout/TestimonialCard'

const Testimonial = () => {
  return (
    <>
    <div className="md:px-10 px-6 py-10 bg-gray-100 min-h-[50vh] bg-gradient-to-br from-amber-100 to-yellow-50">
        <h2 className="text-3xl text-center text-amber-400">testimonial</h2>
        <h2 className="md:text-5xl text-3xl text-center  font-bold text-amber-400 capitalize  ">happy faces</h2>

        <div className="">
          <TestimonialCard/>
        </div>
      
    </div>
    </>
  )
}

export default Testimonial