import { useState } from 'react'
import './index.css';
import "./App.css";
import SideNav from './Components/SideNav';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
function App() {

  return (
    <div className="text-[#D3D0D0] font-light py-5">
      <SideNav />
      <div className="m-auto w-[90%]">
        <header className="header h-[85vh]">
          <div className="space-y-2 flex flex-col justify-center h-[80vh] xl:h-[50vh] text-center xl:text-left">
            <h1 className=" text-3xl xl:text-6xl font-semibold tracking-widest text-[#F5EB6D uppercase">Forsyth Okoeguale.</h1>
            {/* <p className="text-2xl leading-7">
              A <span className='text-[#764ABC'>Front-End Developer</span>  <br />
              and <span className='text-[#F5EB6D'>solutions</span> <span className='text-[#ED8554'>architec </span>
            </p> */}
            <h1 className="tracking-wider ">A Front-End Developer</h1>
          
            <div className="">
              <button className="border-b px-4 py-2 hover:rounded hover:border-[#FFFFFF] hover:scale-[104%] border-[#ED8554] text-sm font-semibold"><h1 className='font-semibold tracking-wider'>View Project</h1></button>
            </div>
          </div>
        </header>
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
