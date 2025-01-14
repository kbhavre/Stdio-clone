import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  

  return (
  <>
    <div className='bg-zinc-800 w-screen h-screen top-0 left-0 fixed' >
      <Navbar/>
      <Home/>
      
    </div>
  </>
  )
}

export default App
