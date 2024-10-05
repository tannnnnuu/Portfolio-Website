import React from 'react'
import avatarImg from '../../assets/tannu_avatar.jpg'
import TextChange from '../TextChange'

const Home = () => {
  return (
    <div className='text-white flex flex-col md:flex-row w-full h-screen justify-between items-center md:items-start p-10 md:p-20'>
      
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <TextChange />
        </h1>
        <p className='text-sm md:text-2xl tracking-tight'>
          Final Year ECE Undergraduate Student from National Institute of Technology Arunachal Pradesh.
        </p>
        <button className='mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          Contact Me
        </button>
      </div>

      <div className='mt-10 md:mt-0 md:ml-10'>
        <img className='h-60 mb-20 md:h-60 lg:h-80 rounded-full shadow-xl' src={avatarImg} alt='' />
      </div>
      
    </div>
  )
}

export default Home

