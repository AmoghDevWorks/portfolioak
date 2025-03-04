import React from 'react'
import GitHubBtn from '../utils/Gitbtn'
import LinkedInButton from '../utils/LinkedInBtn'
import LeetCodeButton from '../utils/LeetCodeBtn'
import CodeChefButton from '../utils/CodeChefBtn'

const App = () => {
  return (
    <div className='bg-customgrey min-h-[100vh] flex items-center justify-between px-20'>
      <div className='w-1/2'>
        <h2 className='text-3xl font-semibold text-white'>&nbsp;Hello, I'm</h2>
        <h2 className='font-bold my-3 text-6xl text-customblue'>Amogh Kashyap S N</h2>
        <p className='my-2 text-white font-semibold text-lg'>&nbsp;Undergraduate Engineering Student at SIT, Tumakuru</p>
        <p className='my-2 text-white font-semibold text-lg'>&nbsp;C++ enthusiast | Exploring Web Development</p>
        <ol className='list-none mt-5 flex items-center gap-5 mx-3'>
          <GitHubBtn />
          <LinkedInButton />
          <LeetCodeButton />
          <CodeChefButton />
        </ol>
      </div>
      
    </div>
  )
}

export default App
