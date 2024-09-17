import React from 'react'
import Uparrow from '../assets/icons/arrow-btn.svg'

const social = [
    {
        title: "YouTube",
        link: "https://www.youtube.com/@CodeBounty"
    },
    {
        title: "Github",
        link: "https://github.com/bhaiyacoding1"
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/sachin_jagdish_rathore/"
    },
    {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/sachinrathore123/"
    },
]

const Footer = () => {
    return (
        <>
            <hr className='opacity-30 rounded-sm max-w-[80%] mt-14 mx-auto' />
            <div id='footer' className='relative overflow-x-clip py-8'>
                <div className='reladiv'></div>
                <div className='container'>
                    <div className='flex flex-col md:flex-row gap-7 md:gap-0 justify-center md:justify-around items-center'>
                        {/* Copyright Text */}
                        <div className='text-white/40'>&copy; 2024. All rights reserved.</div>

                        {/* Social Links */}
                        <nav className='flex flex-col sm:flex-row gap-7'>
                            {social.map((idx) => {
                                return (
                                    <a
                                        target='_blank'
                                        className='inline-flex items-center gap-1'
                                        key={idx.title}
                                        href={idx.link}
                                    >
                                        <span className='font-semibold'>{idx.title}</span>
                                        <img src={Uparrow} className='size-5' alt="arrow" />
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer