import React from 'react'
import {BsStarFill,BsStarHalf} from 'react-icons/bs'
// import { RxDotFilled } from "react-icons/rx";
import {FaQuoteRight} from 'react-icons/fa'
import test1 from '../assets/testimonial/test1.jpg'
import test2 from '../assets/testimonial/test2.jpg'
import test3 from '../assets/testimonial/test3.jpg'
function TestimonialCard() {
    const card = [
        {
          id: 1,
          title: 'Peter & Sarah',
          image: test3,
          review: 'Exceptional pet care services that truly prioritize the happiness and well-being of our furry friends. The dedicated team goes above and beyond, creating an environment where pets thrive and families find peace of mind.',
        },
        {
          id: 2,
          title: 'Jane Smith',
          image: test2,
          review: 'Unparalleled commitment to pet care excellence. From grooming to playtime, every aspect of the service is delivered with care and expertise. Our pets have never been happier!',
        },
        {
          id: 3,
          title: 'John Doe',
          image: test1,
          review: 'A reliable partner in pet care, providing top-notch services since 2019. The team\'s passion shines through, ensuring that every pet receives the attention and love they deserve. Trustworthy and highly recommended.',
      },
      ]
      
  return (
    <>
    <div className="my-20 flex items-center justify-center gap-4  flex-col md:flex-row">
        {card.map((item)=>{
            return(
                <div className="" key={item.id}>
              <div className="px-6 py-6 bg-white rounded-xl shadow-2xl">
                    <div className="flex items-center justify-between">
                        <div className="">
                        <img src={item.image} alt="" className="w-[80px] h-[80px] rounded-full ring-2 ring-amber-300 mr-2" />
                        </div>
                         <div className="">
                         <h2 className=" md:text-lg text-md mb-2">{item.title}</h2>
                    <div className="flex items-center gap-1">
                    <BsStarFill className='text-amber-600'/>
                    <BsStarFill className='text-amber-600'/>
                    <BsStarFill className='text-amber-600'/>
                    <BsStarFill className='text-amber-600'/>
                    <BsStarHalf className='text-amber-600'/>
                    
                </div>
                         </div>
                    <span className="ml-10">
                        <FaQuoteRight className='text-6xl text-[#FDE9CC]'/>
                    </span>
                         </div>
                        <div className="mt-2">
                             <p className="text-lg leading-tight font-light text-gray-400">{item.review}</p>
                        </div>
              </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default TestimonialCard