import React from 'react';

function Navbar() {
  return (
    <div className='bg-zinc-800 '>
    <nav className='flex justify-between text-white '>
      <div className='font-bold gap-4 mt-8 ml-20'>
        <h1>INK STUDIO</h1>
      </div>
      <ul className='flex justify-between gap-10 mt-8 ml-96'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/artists">Artists</a></li>
        <li><a href="/services">Services</a></li>
      </ul>
      <button className='mt-6 mr-96 bg-zinc-800  text-white rounded-md px-4 py-2 hover:bg-gray-800 border'>Contact</button>
    </nav>
    </div>
  );
}

export default Navbar