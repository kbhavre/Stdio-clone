import React from 'react'

const Home = () => {
  return (
    <div>
     <div class=" text-white h-screen flex flex-col items-center justify-center mt-1 ml-1 mr-96">
      <h1 class="text-4xl font-bold mb-4">Where Art Meets Skin</h1>
        <p class="text-lg ">Creative tattoo artistry that tells your story through</p>
        <p className='text-lg'>exceptional craftsmanship and unique designs.</p>
      <div class="flex space-x-4 mt-10">
        <button class="bg-white hover:bg-gray-100 text-black  py-2 px-4 rounded">Book Now</button>
        <button class="bg-black-600 hover:bg-white hover:text-black text-white border py-2 px-4 rounded">View Gallery</button>
      </div>
     </div>

     

    </div>
  )
}

export default Home
