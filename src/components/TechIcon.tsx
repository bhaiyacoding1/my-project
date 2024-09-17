import React, { Fragment } from 'react'
import Js from '../assets/icons/js.svg'
import Html from '../assets/icons/html5.svg'
import Css from '../assets/icons/css3.svg'
import Git from '../assets/icons/github.svg'
import Reactjs from '../assets/icons/react.svg'
import Chrome from '../assets/icons/chrome.svg'


const toolboxitem = [
    {
        title: "JavaScript",
        iconType: Js
    },
    {
        title: "HTML5",
        iconType: Html
    },
    {
        title: "CSS3",
        iconType: Css
    },
    {
        title: "React",
        iconType: Reactjs
    },
    {
        title: "Chrome",
        iconType: Chrome
    },
    {
        title: "Github",
        iconType: Git
    },
]

const TechIcon = () => {
    return (
        <>
            <div className='flex flex-row flex-none gap-6'>
                {[...Array(2)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                        {toolboxitem.map((tech) => {
                            return <div key={tech.title} className='inline-flex gap-2 pr-10 px-2 py-2 rounded-lg mt-0 items-center outline outline-1 outline-white/10'>
                                <img src={tech.iconType} alt={tech.title} className='size-8' />
                                <span className='font-semibold'>{tech.title}</span>
                            </div>
                        })}
                    </Fragment>
                ))}
            </div>
        </>
    )
}

export default TechIcon