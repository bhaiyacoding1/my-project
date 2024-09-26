import React from 'react'
import UpArow from '../assets/icons/arrow-btn.svg'

const Contect = () => {
  return (
    <>
    <div className=' mt-36 py-10 pt-0 px-10 sm:px-0 flex items-center justify-center '>
      <div className='container w-auto bg-gradient-to-r from-emerald-400 to-sky-400 max-lg:w-full rounded-2xl px-10 py-10'>
        <div className="flexFooter flex flex-col sm:flex-row sm:gap-2 gap-5 text-center sm:text-left items-center justify-center">
          <div className="title">
            <h3 className='font-bold text-gray-950 text-3xl font-serif'>Let's create something amazing together</h3>
            <p className='mt-2 text-gray-950  text-sm font-medium w-[85%]'>Ready to bring your next project to life? Let's connect and discuss how i can help you achive your goals.</p>
          </div>
          <div className="btn ">
            <button className='flex items-center justify-center gap-1 bg-black px-8 py-2 rounded-lg w-max'>
              <span className='text-white font-semibold'>
              <a href="mailto:sachinrathore112233@gmail.com" target="_blank"
                class="contact-subtitle">Contect Me</a></span>
              <img src={UpArow}  alt="uparrow" className='text-white size-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contect