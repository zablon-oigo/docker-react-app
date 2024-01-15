import React from 'react'
import ReviewsCard from '../Layout/ReviewsCard'
import service from '../assets/images/service.jpg'
function Services() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-amber-100 md:px-20 md:py-20 py-6 px-6 to-yellow-200">
      <h2 className="md:text-6xl text-3xl font-semibold capitalize text-center text-amber-600">
        what we do
      </h2>
      <div className="my-10 flex flex-col md:flex-row-reverse items-center justify-between gap-6 ">
           <div className="md:w-2/4 w-full">
            <h2 className="text-4xl md:text-start capitalize text-center mb-4 text-amber-500 font-semibold ">
            Choose how your pet should be pampered
            </h2>
            <p className="text-gray-600 md:text-start text-center text-lg leading-tight">
            At <span className=" text-amber-500"> woofs & purrs</span>, we believe in providing your furry companions with the utmost care and attention. Select from a range of personalized treatment options tailored to your pet's unique needs. Whether it's a soothing massage, a delightful playtime session, or a gourmet feast, our dedicated team ensures your pet experiences pure joy and contentment. Because every pet deserves to be treated like royalty. Your pet's happiness is our priority!
            </p>
           </div>
           <div className="w-ful md:w-2/3 mb-4">
            <img src={service} alt="" className="w-full rounded-xl" />
           </div>
      </div>
      <h2 className="md:text-6xl text-3xl font-semibold  mb-4 text-center text-amber-600">
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