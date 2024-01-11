import React from 'react'
import ReviewsCard from '../../Layout/ReviewsCard'
import puppies from '../../assets/images/puppies.png'
import Button from '../../Layout/Button'

function Services() {
  return (
    <>
       <div className="min-h-screen bg-gradient-to-r from-amber-50 to-yellow-50  md:px-20 px-6 py-10">
        <div className="flex md:flex-row-reverse  flex-col-reverse items-center justify-between gap-10">
            <div className="w-full md:w-1/2">
                <img src={puppies} alt="" className="" />
              
            </div>
            <div className="w-full md:w-2/3">
                <h2 className="md:text-4xl text-xl text-center md:text-start font-extrabold text-amber-500 uppercase mb-2">
                Tailored Pet Care Solutions Just for Your Furry Friend
                </h2>
                <p className="font-light md:text-xl text-lg text-center md:text-start  mb-2 leading-tight">
                Discover personalized care plans designed to meet the unique needs of your pet. Whether it's specialized attention, engaging activities, or health-focused services, we offer a range of options to ensure your furry companion receives the care that suits them best. Our commitment is to provide exceptional and customized care experiences, ensuring the well-being and happiness of your beloved pet.
                </p>
                <div className="flex justify-center md:justify-start mt-4">
                    <Button title="Contact Us"/>
                </div>
            </div>
        </div>
       <div className="">
       <ReviewsCard/>
       </div>
       </div>
    </>
  )
}

export default Services