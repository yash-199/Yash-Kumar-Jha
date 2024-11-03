import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal';
const Project = () => {
    return (
        <Fade triggerOnce direction="up" cascade damping={0.2}>
            <div className='flex flex-col items-center text-white mt-10 w-full '>
                <h1 className='text-center font-semibold text-4xl md:text:3xl lg:text-4xl sm:text-2xl'>Project</h1>
                <hr className='border-none h-0.5 bg-white w-1/12 my-2' />

                <div className='flex items-start justify-between w-full max-sm:flex-col gap-10 px-4 mt-10 lg:px-44 sm:mt-20'>
                    {/* project one */}
                    <div className="relative w-1/2 max-sm:w-full p-1  bg-gray-800 text-white overflow-hidden">
                        {/* heading */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 "></div>
                        <div className="relative z-10 p-2">
                            <p className="text-2xl m-2 font-semibold text-center">CuraConnect</p>
                            <hr className='border-none h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-12/12 mt-4' />
                            <pre className="text-[#f8f8f2] p-4 rounded-b-md overflow-x-auto whitespace-pre-wrap font-mono text-sm">
                                <code>
                                    <span className="text-pink-500">const</span> project = {'{'}{'\n'}
                                    &nbsp;&nbsp;<span className="text-purple-400">name</span>: <span className="text-yellow-400">'CuraConnect'</span>,{'\n'}
                                    &nbsp;&nbsp;<span className="text-purple-400">tools</span>: [<span className="text-yellow-400">'HTML'</span>, <span className="text-yellow-400">'Tailwind CSS'</span>, <span className="text-yellow-400">'ReactJS'</span>, <span className="text-yellow-400">'NodeJS'</span>, <span className="text-yellow-400">'MongoDB'</span>, <span className="text-yellow-400">'Razorpay'</span>],{'\n'}
                                    &nbsp;&nbsp;<span className="text-purple-400">myRole</span>: <span className="text-orange-400">Full Stack Developer</span>,{'\n'}
                                    &nbsp;&nbsp;<span className="text-purple-400">Description</span>: <span className="text-yellow-400">'This is an online appointment booking website for doctors or hospitals. The application allows users to:

                                        View multiple doctors based on specialty. Filter doctors by specialty and view details of specific doctors. Choose available date and time slots (within a 7-day window) to book appointments. View related doctors based on their specialty. Ensure a fully user-friendly and responsive design for seamless experience on all devices.'</span>,{'\n'}
                                    {'};'}
                                </code>
                            </pre>
                            <center>
                                <Link to='https://github.com/yash-199/CuraConnect-Front-and-Backend' className='text-center'>View on Github</Link>
                            </center>
                        </div>
                    </div>
                    {/* project two */}
                    <div className="relative w-1/2 max-sm:w-full p-1  bg-gray-800 text-white overflow-hidden">
                        {/* heading */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 "></div>
                        <div className="relative z-10 p-2">
                            <p className="text-2xl m-2 font-semibold text-center">Tomato Delivery</p>
                            <hr className='border-none h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-12/12 mt-4' />
                            <pre className="text-[#f8f8f2] p-4 rounded-b-md overflow-x-auto whitespace-pre-wrap font-mono text-sm mb-14">
                                <code>
                                    <span className="text-pink-500">const</span> project = {'{'}{'\n'}
                                    &nbsp;&nbsp;<span className="text-purple-400">name</span>: <span className="text-yellow-400">'Tomato Delivery'</span>,{'\n'}
                                    <span className="text-purple-400">tools</span>: [<span className="text-yellow-400">'HTML'</span>, <span className="text-yellow-400">'Tailwind CSS'</span>, <span className="text-yellow-400">'ReactJS'</span>, <span className="text-yellow-400">'NodeJS'</span>, <span className="text-yellow-400">'MongoDB'</span>, <span className="text-yellow-400">'Stripe'</span>],{'\n'}
                                    &nbsp;&nbsp;<span className="text-purple-400">myRole</span>: <span className="text-orange-400">Full Stack Developer</span>,{'\n'}
                                    &nbsp;&nbsp;<span className="text-purple-400">Description</span>: <span className="text-yellow-400">'Tomato-Delivery is a full-stack food ordering website built with React JS, MongoDB, Express, Node JS, and Stripe. This project allows users to browse food items, add them to their shopping cart, and place orders with online payment through the Stripe payment gateway.'</span>,{'\n'}
                                    {'};'}
                                </code>
                            </pre>
                            <center>
                                <Link to='https://github.com/yash-199/Tomato-Delivery' className='text-center'>View on Github</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Project