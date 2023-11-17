import React from 'react' 
import proPic from './Images/proPic.png'

function About() {
  return (
    <div className='text-center bg-gray-200'>
      <h1 className="text-xl font font-medium py-10">About the hosts</h1>

      <div className='flex justify-center align-center gap-10'>
        <div className='w-1/5 flex flex-col items-center'>
            <h2>Anne Keger</h2>
            <h3 className='text-gray-500'>Assistent manager</h3>
            <p className='text-gray-500 pt-3 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis molestiae eligendi quod! Assumenda inventore corporis molestiae perferendis distinctio blanditiis iusto nulla cupiditate voluptatem fugit est quaerat dolorum natus, necessitatibus accusantium.</p>
            <img src= {proPic} alt='proPic' className='h-60' />
        </div>
        <div className='w-1/5 flex flex-col items-center'>
            <h2>Jessica Yang</h2>
            <h3 className='text-gray-500'>Assistent manager</h3>
            <p className='text-gray-500 pt-3 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis molestiae eligendi quod! Assumenda inventore corporis molestiae perferendis distinctio blanditiis iusto nulla cupiditate voluptatem fugit est quaerat dolorum natus, necessitatibus accusantium.</p>
            <img src= {proPic} alt='proPic' className='h-60' />
        </div>
        <div className='w-1/5 flex flex-col items-center'>
            <h2>Weroonika Weerasinghe</h2>
            <h3 className='text-gray-500'>Assistent manager</h3>
            <p className='text-gray-500 pt-3 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis molestiae eligendi quod! Assumenda inventore corporis molestiae perferendis distinctio blanditiis iusto nulla cupiditate voluptatem fugit est quaerat dolorum natus, necessitatibus accusantium.</p>
            <img src= {proPic} alt='proPic' className='h-60' />
        </div>
      </div>
    </div>
  )
}

export default About

