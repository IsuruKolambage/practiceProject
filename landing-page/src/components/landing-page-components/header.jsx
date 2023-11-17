import React from 'react'
import headerImg from './Images/headerImage.jpg'

function Header() {
  return (
    <div className=''>
        
        <img src= {headerImg} alt='HeaderImage' className='w-full h-1/2 z-1 opacity-80' />
        
        <div className="absolute top-0 left-0 text-white p-4">
        <h1 className="text-4xl font-bold">Starting your SEO Adventure with Positionly</h1>
      </div>
    </div>
  )
}

export default Header