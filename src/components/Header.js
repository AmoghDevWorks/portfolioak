import React, { useEffect, useState } from 'react'
import UnderlineButton from './HeaderBtn'
import logo from '../utils/logo.png'

const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className='w-screen h-16 bg-customgrey border-b-[1px] border-solid border-gray-200 flex items-center justify-between'>
      <div className=''>
        <img src={logo} alt='logo' className='h-12 ml-4 '/>
      </div>
      {width>767 && <div>
        <ol className='list-none text-lg font-bold text-white px-0 lg:px-20'>
            <UnderlineButton text={"HOME"}/>
            <UnderlineButton text={"ABOUT"}/>
            <UnderlineButton text={"PROJECT"}/>
        </ol>
      </div>}
    </div>
  )
}

export default Header
