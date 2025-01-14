import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between text-white  bg-slate-900 shadow-xl shadow-white px-20 py-4">
        <div className="flex items-center justify-center ">
        <h1 className="font-bold text-xl ">INK STUDIO</h1>
        </div>
        

      <ul className="flex justify-between items-center gap-10 ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/artists">Artists</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>

        <button className="bg-white text-black px-6 py-2 rounded-md ">
        Contact
      </button>
      </ul>
      
    </nav>
  );
}

export default Navbar;
