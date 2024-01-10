import React from 'react'
import review from '../../assets/images/review.jpg'
function Reviews() {
    const bgImage = {
        backgroundImage:`url(${review})`,
        height:'250px',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    }
  return (
    <>
    <section className="bg-gray-100 min-h-screen px-20 relative" >
        <div className="bg-black h-[400px] py-14 w-full absolute top-0 left-0" style={bgImage}>
           <h2 className="capitalize text-center text-6xl text-white font-extrabold">
            review us
           </h2>
        </div>
    </section>
    </>
  )
}

export default Reviews