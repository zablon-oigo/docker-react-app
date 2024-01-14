import React from 'react'
import ReviewsCard from '../Layout/ReviewsCard'
import service from '../assets/images/service.jpg'
function Services() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-amber-100 md:px-20 md:py-20 py-6 px-6 to-yellow-200">
      <h2 className="text-6xl text-center text-amber-600">
        what we do
      </h2>
      <div className="my-10 flex flex-col md:flex-row-reverse items-center justify-between">
           <div className="md:w-2/4 w-full">
            <h2 className="text-4xl text-center mb-4">
              chose how your pet should be treated
            </h2>
            <p className="text-gray-600 text-center text-lg leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis inventore quae animi veritatis alias vel explicabo porro laboriosam deserunt ab facere dolore voluptatem qui omnis tempore excepturi corrupti culpa quia eligendi harum, doloremque aut sapiente quas? Tenetur, et provident?
            </p>
           </div>
           <div className="w-ful md:w-2/4 mb-4">
            <img src={service} alt="" className="w-full rounded-xl" />
           </div>
      </div>
      <h2 className="text-5xl text-center text-amber-600">
        Our Services
      </h2>
      <div className="">
        <ReviewsCard/>
      </div>
    </div>
    </>
  )
}

export default Services