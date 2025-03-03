import React from 'react'
import UnderlineButton from './HeaderBtn'

const Header = () => {
  return (
    <div className='w-screen h-16 bg-customgrey border-b-[1px] border-solid border-gray-200 flex items-center justify-around'>
      <div className=''>

      </div>
      <div>
        <ol className='list-none text-lg font-bold text-white'>
            <UnderlineButton text={"HOME"}/>
            <UnderlineButton text={"ABOUT"}/>
            <UnderlineButton text={"PROJECT"}/>
        </ol>
      </div>
    </div>
  )
}

export default Header
