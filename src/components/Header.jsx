import React from 'react'
import { Fade } from 'react-awesome-reveal';
const Header = () => {
    return (
        <Fade>
            <div className='mx-2 lg:mx-33 py-10 xl:py-5'>
                <h1 className='text-center text-2xl md:text-3xl lg:text-7xl font-semibold text-white mt-16'>Hi, I'm Yash Kumar Jha, <br /> <span className="lg:text-4xl px-2  bg-gradient-to-r from-[#312e81] to-[#6366f1] text-white rounded"
                >
                    Full Stack Developer
                </span>
                </h1>
                <div className='text-center'>
                    <p className='text-white pt-4 text-2xl font-semibold'>Based in New Delhi, India</p>
                    <p className='text-white text-2xl font-semibold py-2'>Specialized in <span className='px-2 bg-gradient-to-r from-[#312e81] to-[#6366f1] text-white rounded'>WordPress</span> and <span className='px-2 bg-gradient-to-r from-[#312e81] to-[#6366f1] text-white rounded'> Full Stack Developer</span></p>
                </div>

                <div className='flex items-center justify-center gap-5 my-4 text-white'>
                    <button className="bg-transparent text-[#312e81] py-2 px-10 uppercase rounded border-2 border-transparent hover:scale-105 transition-all duration-700"
                        style={{
                            borderImage: "linear-gradient(to right, #312e81, #6366f1) 1", color: "white",
                        }}><a href="https://wa.me/9873472655" target="_blank"> Say Hi</a></button>
                    <button className="bg-transparent text-[#312e81] py-2 px-10 uppercase rounded border-2 border-transparent hover:scale-105 transition-all duration-700"
                        style={{
                            borderImage: "linear-gradient(to right, #312e81, #6366f1) 1", color: "white",
                        }}>Resume</button>
                </div>
            </div>
        </Fade>
    )
}

export default Header