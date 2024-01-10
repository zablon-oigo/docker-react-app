import React from 'react'
import header from '../../assets/images/header.jpg'
import Button from '../../Layout/Button'

function Header() {
    const bgImage={
        backgroundImage:`url(${header})`,
        height:'100vh',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'

    }
  return (
    <>
          <div className="min-h-screen" style={bgImage}>
           <div className="md:px-20 px-6 py-60 ">
           <div className="md:w-2/3 w-full">
          <p className="text-2xl text-center md:text-start text-amber-300 font-bold">Pet Care Services, in New York City</p>
          <h2 className="md:text-8xl text-3xl mt-6 md:mt-4 md:text-start text-center  font-extrabold text-white ">
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

export default Header