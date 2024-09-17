import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-center bg-slate-700 text-white'>
                <nav className='w-fit backdrop:blur text-white  flex items-center justify-center ring-1 ring-white ring-opacity-20 rounded-full mt-2'>
                    <ul className='flex'>
                        <a href='#home' className='cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-white/10 transition duration-300'>Home</a>
                        <a href='#about' className='cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-white/10 transition duration-300'>About</a>
                        <a href='#project' className='cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-white/10 transition duration-300'>Project</a>
                        <a href='#contect' className='cursor-pointer px-5 py-2 rounded-full font-semibold hover:bg-white/10 transition duration-300'>Contect</a>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;