import React from 'react'
import header from '../assets/images/header.jpg'
import Button from '../Layout/Button'
function Home() {
    const bgImage={
        backgroundImage:`url(${header})`,
        height:'100vh',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'

    }
  return (
    <>
    <div className="absolute top-0 right-0 w-full -z-10" style={bgImage}>
           <div className="md:px-20 px-6 md:py-80 py-60 ">
           <div className="md:w-2/3 w-full">
          <p className="text-2xl text-center md:text-start text-white font-bold">Pet Care Services, in New York City</p>
          <h2 className="md:text-8xl text-4xl mt-6 md:mt-4 md:text-start text-center  font-extrabold text-white ">
          We Provide Care, That Your Pet Deserves!
          </h2>
          <div className="mt-4 flex justify-center md:justify-start">
            <Button title="Get Started"/>
          </div>
        </div>
           </div>
    </div>

    </>
  )
}

export default Home