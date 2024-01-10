import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ios from '../../assets/images/ios.png'
import app from '../../assets/images/app.png'
import playstore from '../../assets/images/playstore.png'
import { FaLocationDot } from "react-icons/fa6";
function Location() {
  useEffect(() => {
    AOS.init();
 }, []);
  return (
    <>
      <div className="md:px-20 px-6 py-10 min-h-[90vh] bg-gradient-to-br from-amber-500 to-amber-800">
              <div className="flex items-center justify-center gap-4  flex-col md:flex-row">
              <div className="w-full md:w-3/4">
          <div className="">
          <FaLocationDot className='md:text-6xl mb-6 text-4xl text-white'/>
            <h2 className=" text-3xl text-white font-extrabold capitalize mb-4">
              locate your pet anytime anywhere
            </h2>
            <p className="font-light text-xl text-white  mb-4">
            Download our user-friendly app to effortlessly track and monitor your pet's location in real-time. With just a few taps, you can ensure the safety and well-being of your furry companion, whether you're at home or on the go. Experience the convenience of staying connected with your pet directly from the map feature within our app.
            </p>
            <div className="flex items-center">
                   <img src={ios} alt="" className="w-40 h-20" />
                   <img src={playstore} alt="" className="w-40 h-20" />
            </div>

          </div>
       
        </div>
        <div className="w-full md:w-1/2" data-aos='zoom-in-up' data-aos-easing="linear" data-aos-duration="1500" >
 
          <img src={app} alt="" className="" />
        </div>
              </div>
      </div>
    </>
  )
}

export default Location