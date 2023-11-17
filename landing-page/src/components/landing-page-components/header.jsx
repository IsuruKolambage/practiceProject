import React from 'react'
import headerImg from './Images/headerImage.jpg'

function Header() {
  return (
    <div className=''>
        
        <img src= {headerImg} alt='HeaderImage' className='w-full h-1/2 z-1 ' />
        
        <div className="absolute top-1/4 left-5 text-white p-4">
        <h1 className="text-7xl font-bold mb-5 ">Starting your SEO Adventure <br/> with Positionly</h1>
        <p className='2xl mb-10'> Lorem Ipsum has been the industry's standard dummy text ever since the </p>
        <h2 className='text-3xl my-10 font-bold'> TUESDAY, JUNE 9th, 2015, <br/> DURATION 120 MINUTES </h2>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "> Register Now </button>
      </div>
    </div>
  )
}

export default Header