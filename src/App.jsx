import Router from './utils/Router'
import Navbar from './components/navbar/Navbar'
import { useEffect, useCallback } from 'react'
import gsap from 'gsap'
import Footer from './components/footer/Footer'

const App = () => {
  const mouseFollower = useCallback((e) => {
    gsap.to(".mouseFollower", {
      x: e.clientX - 5,
      y: e.clientY - 5,
      opacity: 1,
      duration: 0.2
    })
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => mouseFollower(e)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseFollower])

  return (
    <div className='w-screen h-[100svh] relative overflow-hidden'>
      <span className="mouseFollower hidden absolute lg:block opacity-0 w-[12px] h-[12px] rounded-full bg-[#3d3d3d] top-0 left-0 z-[100] pointer-events-none"></span>
      <div className="outer-container w-full h-full overflow-y-auto flex flex-col items-center bg-[#fff]">
        <Navbar />
        <div className='container w-full'>
          <main>
            <Router />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App