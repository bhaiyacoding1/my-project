import React from 'react'
import Avtarimoji from '../assets/images/memoji-computer.png'
import ArrowDown from '../assets/icons/arrow-down.svg'
import grainImage from '../assets/images/grain.jpg'


const Home = () => {
  return (
    <>
      <div className="py-32 md:py-48 lg:py-36 bg-slate-700 text-white flex justify-center">
        <div className="container relative z-10">
          <div className='absolute inset-0 -z-10 opacity-5' style={{ backgroundImage: `url(${grainImage})` }}>
        </div>
          <span className='homediv absolute top-[50%] left-[50%]'></span>
          <div className="flex flex-col items-center">
            <img src={Avtarimoji} width={120} alt="Person peeking fron behind laptop" />
            <div className='flex items-center gap-3 bg-gray-900 border-gray-800 px-4 py-1.5 rounded-lg'>
              <div className='bg-green-500 size-2.5 rounded-full'></div>
              <div className="text-sm font-medium">
                Available for opportunities
              </div>
            </div>
          </div>
          <div className='max-w-lg mx-auto px-8 sm:px-0'>
            <h1 className='font-serif text-3xl md:text-5xl text-center mt-5 tracking-wide leading-[1.2rem]'>Hello there👋, i'm Sachin Rathore</h1>
            <p className='mt-4 text-center text-white/60 md:text-lg '>For Building Modern User Experiences,I specialize in trasforming designs into functional, high-performing web applications. Let's discuss
              your next project.
            </p>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-4'>
            <a href="#project" smooth={true} duration={500} className='flex cursor-pointer flex-row items-center gap-2 border border-gray-900 px-4 py-1.5 rounded-lg backdrop:blur bg-slate-900/50 font-semibold'>
              <span>Explore My Work</span>
              <img src={ArrowDown} width={20} alt="arrow-down" />
            </a>
            <a href='https://www.linkedin.com/in/sachinrathore123/' className='font-semibold bg-white px-4 py-1.5 text-black rounded-lg'>
              <span>👋</span>
              <span>Let's Connect</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home