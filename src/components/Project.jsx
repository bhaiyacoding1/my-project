import React, { Fragment } from 'react'
import darksas from '../assets/images/dark-saas-landing-page.png'
import lightsas from '../assets/images/light-saas-landing-page.png'
import aisas from '../assets/images/ai-startup-landing-page.png'
import Checkicon from '../assets/icons/check-circle.svg'
import UpArrow from '../assets/icons/arrow-up-right.svg'
import grain from '../assets/images/grain.jpg'
import Star from '../assets/icons/star.svg'

const portfolioProject = [
  {
    projectName: "Get_Me_A_Coffee",
    desc: "Crowdfunding platform for creators",
    results: [
      { title: "Built a beautiful and modern user interface." },
      { title: "Implemented NextAuth for handling user authentication" },
      { title: "Implemented strong encryption to guarantee next-level security." }
    ],
    link: 'https://get-me-a-coffee-nine.vercel.app/',
    images: darksas
  },
  {
    projectName: "E-commerce",
    desc: "Online Retail Platform For Effortless Shopping",
    results: [
      { title: "Built interactive UI & UX and faster performance." },
      { title: "Provided secure user authentication and sign-in." },
      { title: "Wide range of products, secure payment options" }
    ],
    link: '#',
    images: lightsas
  },
  {
    projectName: "Portfolio Website",
    desc: "A collection of my best work as a web developer",
    results: [
      { title: "Built using React which is fully responsive." },
      { title: "Used GSAP and Framer Motion libraries to add dynamic animations." },
      { title: "Technologies: React, TailwindCSS, GSAP and Framer Motion" }
    ],
    link: 'https://get-me-a-coffee-nine.vercel.app/',
    images: aisas
  },
]

const marqueContaine = [
  "Userfriendly",
  "Responsive",
  "Morder Design",
  "Scalable",
  "Intractive",
  "Secure",
  "User Experience",
  "Dark Design",
  "Clean Code",
  "Front-End",
]
const Project = () => {
  return (
    <>
        <section id='project' className='bg-slate-700 text-white flex justify-center'>
          <div className="container mb-10">
            <p className='text-center  uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-300 text-transparent bg-clip-text'>Real -world Results</p>
            <h2 className='font-serif text-center font-bold text-4xl mt-3'>Featured Projects</h2>
            <p className='text-center mt-4 text-white/50'>See how I transformed concepts into engaging digital Experiences.</p>
            <div className='flex flex-col mt-5 gap-8 justify-center items-center px-4 sm:px-0'>
              {portfolioProject.map((project, proidx) => {
                return (
                  <div key={project.title} className='sticky top-16 bg-gray-800 border border-white/35 rounded-3xl relative z-10 overflow-hidden flex flex-col md:flex-row gap-10 p-6 sm:p-10 md:p-20 max-w-6xl mt-14' style={{
                    top: `calc(64px + ${proidx * 40}px)`
                  }}>
                    <div className='proreladiv'></div>
                    {/* Background Image */}
                    <div className='absolute inset-0 -z-10 opacity-5' style={{ backgroundImage: `url(${grain})` }}>
                    </div>

                    <div>
                      {/* Project Name */}
                      <div>
                        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
                          <span>{project.projectName}</span>
                        </div>
                      </div>

                      {/* Project Description */}
                      <h3 className='font-serif text-3xl mt-4'>{project.desc}</h3>
                      <hr className='border-t-2 border-white/5 mt-4' />

                      {/* Project Results */}
                      <ul>
                        {project.results.map((result) => (
                          <li key={result.title} className='flex mt-6 gap-2 text-white/50'>
                            <img src={Checkicon} className='size-7 opacity-50' alt="checkicon" />
                            <span>{result.title}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Visit Live Site Button */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='relative z-20 flex items-center gap-2 mt-8 bg-white sm:w-fit justify-center w-full px-10 h-10 text-gray-900 font-semibold rounded-lg cursor-pointer'
                      >
                        <span className='cursor-pointer'>Visit Live Site</span>
                        <img src={UpArrow} className='size-5' alt="uparrow" />
                      </a>
                    </div>

                    {/* Project Image */}
                    <div className='w-full -mr-[40%] -mb-20 md:-mb-44'>
                      <img src={project.images} className='' alt={project.title} />
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </section>
      <section className='py-16 lg:py-24 overflow-x-clip bg-slate-700'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 py-3 -rotate-3 -mx-1'>
          <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transprent)]'>
            <div className="flex flex-none gap-4 animate-move-left [animation-duration:30s]">
              {[...Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {marqueContaine.map((item, itemIdx) => (
                    <div key={itemIdx} className="inline-flex gap-4 items-center">
                      <img src={Star} className="-rotate-12 size-6" alt="star" />
                      <span className="text-gray-900 font-extrabold uppercase text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project