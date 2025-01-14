import React from 'react'

const Home = () => {
  return (
  <div>
{/* this is right texts and buttons */}
     <div class=" text-white h-screen flex flex-col items-center justify-center mt-1 ml-1 mr-96">
      <h1 class="text-4xl font-bold mb-4">Where Art Meets Skin</h1>
        <p class="text-lg ">Creative tattoo artistry that tells your story through</p>
        <p className='text-lg'>exceptional craftsmanship and unique designs.</p>
      <div class="flex space-x-4 mt-10">
        <button class="bg-white hover:bg-gray-100 text-black  py-2 px-4 rounded">Book Now</button>
        <button class="bg-black-600 hover:bg-white hover:text-black text-white border py-2 px-4 rounded">View Gallery</button>
      </div>
    </div>
{/* this is small card under big art canvas */}
    <div >
      <div className="absolute bottom-4 right-4 mb-60 mr-56 flex items-center space-x-2 bg-black/70 px-3 py-2 rounded-lg">
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span >Currently Taking Appointments</span>
      </div>
    </div>

{/* this is footer   */}

<footer >
      <div>
        
        <div className="flex space-x-4 ">
          <p>10+ Years Experience</p>
          <p>5K+ Satisfied Clients</p>
          <p>15+ Award Winning</p>
          <p>100% Safe & Hygienic</p>
        </div>
      </div>
    </footer>

  </div>
  )
}

export default Home
