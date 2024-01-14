import React from 'react'
import notfound from '../assets/images/404.png'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <>
    <div className="min-h-[60vh] bg-gradient-to-tr from-amber-50 to-yellow-50">

      <div className="relative">
        <img src={notfound} alt="" className="mx-auto" />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-center text-4xl font-semibold text-emerald-700">
            Page Not Found
            
          </h3>
          <p className="text-center mt-4 text-xl text-gray-900">The page you are looking for does not exist !!!!</p>
          <div className="my-4 flex justify-center">
          
              <Link to='.' duration={500} spy={true} smooth={true} className='bg-amber-500 hover:bg-amber-400 text-xl font-semibold text-white  py-3 px-6 rounded-full'>
                home
              </Link>
        
          </div>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default NotFound