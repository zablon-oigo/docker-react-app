import React from 'react'
import header from '../assets/images/header.jpg'
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
    <div className="" style={bgImage}>
        <h2 className="text-3xl text-white">Home page</h2>
    </div>

    </>
  )
}

export default Home