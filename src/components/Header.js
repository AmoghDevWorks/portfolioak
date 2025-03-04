import React, { useEffect, useState } from 'react'
import UnderlineButton from './HeaderBtn'
import logo from '../images/logo.png'
import { Link } from "react-scroll";

const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className='w-screen fixed z-50 h-16 bg-customgrey border-b-[1px] border-solid border-gray-200 flex items-center justify-between'>
      <div className=''>
        <img src={logo} alt='logo' className='h-12 ml-4 '/>
      </div>
      {width>767 && <div>
        <ol className='list-none text-lg font-bold text-white px-0 lg:px-20'>
          <Link to='home' smooth={true} duration={500} ><UnderlineButton text={"HOME"}/></Link>
          <Link to='about' smooth={true} duration={500} ><UnderlineButton text={"ABOUT"}/></Link>
          <Link to='skills' smooth={true} duration={500} ><UnderlineButton text={"SKILLS"}/></Link>
          <Link to='projects' smooth={true} duration={500} ><UnderlineButton text={"PROJECTS"}/></Link>
        </ol>
      </div>}
    </div>
  )
}

export default Header
