import React from 'react'
import { useRef } from 'react'
import { motion } from "framer-motion"
import Star from '../assets/icons/grastar.svg'
import book from '../assets/images/book.png'
import TechIcon from './TechIcon'
import grain from '../assets/images/grain.jpg'
import map from '../assets/images/map.png'
import smileImoji from '../assets/images/memoji-smile.png'



const hobbies = [
  {
    title: "Watching Movie",
    icons: "🍿",
    top: "80%",
    left: "5%"
  },
  {
    title: "Photography",
    icons: "📸",
    top: "80%",
    left: "65%",
  },
  {
    title: "Gaming",
    icons: "🎮",
    top: "55%",
    left: "30%",
  },
  {
    title: "Learn New",
    icons: "💻",
    top: "40%",
    left: "55%",
  },
  {
    title: "Cricket",
    icons: "🏏",
    top: "100%",
    left: "75%",
  },
  {
    title: "Travel",
    icons: "🧳",
    top: "60%",
    left: "10%",
  },
  {
    title: "Music",
    icons: "🎵",
    top: "70%",
    left: "35%",
  },
  {
    title: "Gym",
    icons: "💪",
    top: "45%",
    left: "10%",
  },
  {
    title: "Creativity",
    icons: "⌨️",
    top: "60%",
    left: "70%",
  },
]

const About = () => {
  const constraintsRef = useRef(null)
  return (
    <>
      <section id='about' className='bg-slate-700 mt-10'>
        <div className="containe ">
          <div className="mainHeading">
            <p className='text-center  uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-300 text-transparent bg-clip-text'>ABOUT ME</p>
            <h2 className='font-serif text-center font-bold text-4xl mt-3'>A Glimpse Into My World</h2>
            <p className='text-center mt-2 text-white/50' >Learn more about who I am, what I do, and what inspires me.</p>
          </div>
          <div className="cardDiv mt-8 px-32 lg:px-14 md:px-28">
            <div className="w-full flex flex-col gap-10 items-center justify-center p-10 md:p-5">
              <div className="rowOne flex flex-col sm:flex-row gap-10 justify-center items-center">
                <div className="h-[300px] w-[345px] sm:w-[250px] sm:h-[280px] card1 relative z-10 outline outline-white/10 rounded-lg p-5 overflow-hidden bg-gray-800">
                  <div className='absolute inset-0  -z-20 opacity-5 ' style={{
                    backgroundImage: `url(${grain})`
                  }}></div>
                  <div className='aboutrelavdiv'></div>
                  <div className="heading flex items-center justify-center flex-col">
                    <div className="main flex justify-center items-center gap-2">
                      <img src={Star} alt="start" className='size-8 text-white' />
                      <h3 className='font-semibold font-serif text-2xl'>My Reads</h3>
                    </div>
                    <div className="sub text-left mt-2">
                      <p className='text-white/50'>Explore the books shaping my perspective</p>
                    </div>
                  </div>
                  <div className="img  mt-5 flex items-center justify-center cursor-pointer">
                    <img src={book} className='w-36' alt="book" />
                  </div>
                </div>

                <div className=" relative bg-gray-800  z-10 card2 outline outline-white/10 rounded-lg  h-[280px] w-[345px] md:w-[500px] sm:w-[400px] overflow-hidden">
                  <div className='absolute inset-0 -z-20 opacity-5' style={{
                    backgroundImage: `url(${grain})`
                  }}></div>
                  <div className='aboutrelavdiv2'></div>
                  <div className="heading px-10 py-7">
                    <div className="main flex gap-2">
                      <img src={Star} alt="start" className='size-8 text-white' />
                      <h3 className='font-semibold font-serif text-2xl'>My Toolbox</h3>
                    </div>
                    <div className="sub maxw-[68%] mt-2 ">
                      <p className='text-white/50'>Explore the technologies and tools i use to craft exceptional digital experiences.</p>
                    </div>
                  </div>
                  <div className=" cursor-pointer img flex flex-col animate-move-left [animation-duration:30s] gap-5 py-1">
                    <TechIcon />
                    <div className='animate-move-right [animation-duration:40s] -translate-x-[205%]'>
                      <TechIcon />
                    </div>
                  </div>
                </div>

              </div>
              <div className="rowTwo flex flex-col sm:flex-row gap-10 justify-center items-center">
                <div ref={constraintsRef} className="motionDiv relative bg-gray-800  card2 outline outline-white/10 rounded-lg  h-[280px] w-[345px] md:w-[500px] sm:w-[400px] overflow-hidden">
                  <div className='absolute inset-0 -z-20 opacity-5' style={{
                    backgroundImage: `url(${grain})`
                  }}></div>
                  <div className='aboutrelavdiv1'></div>
                  <div className="heading px-10 py-7">
                    <div className="main flex gap-2">
                      <img src={Star} alt="start" className='size-8 text-white' />
                      <h3 className='font-semibold font-serif text-2xl'>Beyond the Code</h3>
                    </div>
                    <div className="sub w-[72%] mt-2 ">
                      <p className='text-white/50 text-base'>Explore my interests and hobbies beyond the digital realm.</p>
                    </div>
                  </div>
                  <div className="img flex-1">
                    {hobbies.map((hob, index) => {
                      return <motion.div drag dragConstraints={constraintsRef} whileDrag={{scale:1.2}} dragElastic={.1} dragTransition={{bounceStiffness:600, bounceDamping:10}} key={index} className='cursor-pointer gap-1 py-1  items-center absolute bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex rounded-full px-2' style={{
                        left: hob.left,
                        top: hob.top,
                      }}>
                        <span className='text-gray-900 font-semibold'>{hob.title}</span>
                        <span>{hob.icons}</span>
                      </motion.div>
                    })}
                  </div>
                </div>

                <div className=" relative h-[300px] w-[345px] sm:w-[250px] sm:h-[280px] card1 outline outline-white/5 rounded-lg ">
                  <img src={map} className=" h-full w-full object-cover object-center" alt="book" />
                  <div className="imoji cursor-pointer absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] size-16 bg-gradient-to-r from-emerald-400 to-sky-300 rounded-full after:contents[''] after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                  <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-300 -z-20 animate-ping'></div>
                  <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-sky-300 -z-10'></div>
                    <img src={smileImoji} alt='smile imoji' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default About