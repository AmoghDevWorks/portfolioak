import React from 'react'
import htmlLogo from '../images/htmlLogo.png'
import cssLogo from '../images/cssLogo.png'
import jsLogo from '../images/jsLogo.png'
import cppLogo from '../images/cppLogo.png'

const language = [
  {
    imgUrl: htmlLogo,
    text: 'HTML'
  },
  {
    imgUrl: cssLogo,
    text: "CSS" 
  },
  {
    imgUrl: jsLogo,
    text: "JS"
  },
  {
    imgUrl: cppLogo,
    text:"C++"
  }
]

const Skill = () => {
  return (
    <div className='bg-customgrey max-w-screen h-fit py-20 px-6 flex items-center justify-center'>
        <div className='h-fit p-4 w-2/3 shadow-custom rounded-lg text-white'>
            <h1 className='text-4xl text-customblue mb-5'>➢&nbsp;<span className='text-white font-bold underline underline-offset-8 decoration-customblue decoration-[2px]'>SKILLS</span></h1>
            <div className='my-4 p-10'>
                <h3 className='text-2xl mb-4 font-bold text-customblue'>Languages</h3>
                <div className='flex items-center justify-evenly'>
                    {language.map((lang)=>(
                        <div className='h-1/2 flex items-center justify-center flex-col'>
                            <img src={lang.imgUrl} alt='html logo' className='rounded-md h-28 my-4' />
                            <p className='font-semibold text-xl'>{lang.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill
