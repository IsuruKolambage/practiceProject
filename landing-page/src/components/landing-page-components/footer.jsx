import React from 'react'

function Footer() {
  return (
    <div className='bg-green-500 text-center'>
      <h1>Join the webinar</h1>
      <p>Lorem ipsumsto voluptas magnam et hic eos ad, molestias corrupti quae dolorem quibusdam <br />quo a omnis iure suscipit dignissimos dicta!</p>

      <div className='flex justify-center items-center'>
      <form className=''>
        <div class="mb-4">
          <label for="firstName" class="block text-gray-700 align-left">First Name</label>
          <input type="text" id="firstName" name="firstName" class="w-full border rounded-md py-2 px-3 text-gray-700"/>
        </div>
        <div class="mb-4">
          <label for="lastName" class="block text-gray-700">Last Name</label>
          <input type="text" id="lastName" name="lastName" class="w-full border rounded-md py-2 px-3 text-gray-700"/>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input type="email" id="email" name="email" class="w-full border rounded-md py-2 px-3 text-gray-700"/>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded">Save my seat</button>
      </form>
      </div>
 
    </div>
  )
}

export default Footer
