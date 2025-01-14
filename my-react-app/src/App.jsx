import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  

  return (
  <>
    <div className='bg-zinc-800 w-screen h-screen top-0 left-0 fixed' >
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  </>
  )
}

export default App
