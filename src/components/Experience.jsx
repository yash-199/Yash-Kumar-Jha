import React from 'react'
import { Fade } from 'react-awesome-reveal';
const Experience = () => {
    return (

        <div className='flex flex-col items-center text-white mt-10 w-full'>
            <Fade triggerOnce direction="up" cascade damping={0.2}>
                <h1 className='text-center font-semibold text-4xl md:text-3xl lg:text-4xl sm:text-2xl'>Experience</h1>
                <hr className='border-none h-0.5 bg-white w-1/12 mt-4' />
            </Fade>
            {/* Details */}
            {/* Current */}
            <Fade triggerOnce direction="up" cascade damping={0.2}>
                <div className="flex items-start justify-between w-full max-sm:flex-col gap-10 px-4 mt-10 lg:px-44 sm:mt-20">
                    {/* Left side */}
                    <div className="relative w-1/2 max-sm:w-full p-1 bg-gray-800 text-white overflow-hidden z-50">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient border-animation"></div>
                        <div className="relative z-10 p-2 rounded-lg">
                            <p className="text-lg font-semibold">Full Stack Developer</p>
                            <p>Full Time | Asian Institute of Medical Sciences (Asian Hospital)</p>
                            <p>August 2024 - Present</p>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="w-1/2 max-sm:w-full">
                        <p>
                            <ul className="list-decimal pl-5 text-justify">
                                <li>
                                    Developed the Onwork.ai dashboard and Website from scratch using HTML, Materialize CSS, JavaScript, jQuery, and Google Charts. Integrated a Leaflet map for traffic display and MySQL for data presentation.
                                </li>
                                <li>
                                    Developed the Ludo Junction game, featuring secure email and phone login with OTP verification and robust coin management. Built the front end from scratch using HTML, CSS, Materialize CSS, and JavaScript, and implemented a Node.js backend to handle server-side functionalities.
                                </li>
                                <li>
                                    Developed the DWFritz website with custom functionalities and a modern design, including a responsive landing page for an ad campaign. Integrated Pardot forms to enhance lead generation.
                                </li>
                                <li>
                                    Developed the Sarvodaya TexStyle using front-end technologies with integrated validation. Ensured a seamless user experience through efficient design and functionality.
                                </li>
                            </ul>

                        </p>
                    </div>
                </div>
            </Fade>
            {/* 2years experience */}
            <Fade triggerOnce direction="up" cascade damping={0.2}>
                <div className="flex items-start justify-between w-full max-sm:flex-col gap-10 px-4 mt-10 lg:px-44 sm:mt-20">
                    {/* Left side */}
                    <div className="relative w-1/2 max-sm:w-full p-1 bg-gray-800 text-white overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient border-animation"></div>
                        <div className="relative z-10 p-2 rounded-lg">
                            <p className="text-lg font-semibold">Full Stack Developer</p>
                            <p className="text-white">Full Time | All Friends Studio</p>
                            <p className="text-white">August 2022 - August 2024</p>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="w-1/2 max-sm:w-full">
                        <p>
                            <ul className="list-decimal pl-5 text-justify">
                                <li>
                                    Developed the Onwork.ai dashboard and Website from scratch using HTML, Materialize CSS, JavaScript, jQuery, and Google Charts. Integrated a Leaflet map for traffic display and MySQL for data presentation.
                                </li>
                                <li>
                                    Developed the Ludo Junction game, featuring secure email and phone login with OTP verification and robust coin management. Built the front end from scratch using HTML, CSS, Materialize CSS, and JavaScript, and implemented a Node.js backend to handle server-side functionalities.
                                </li>
                                <li>
                                    Developed the DWFritz website with custom functionalities and a modern design, including a responsive landing page for an ad campaign. Integrated Pardot forms to enhance lead generation.
                                </li>
                                <li>
                                    Developed the Sarvodaya TexStyle using front-end technologies with integrated validation. Ensured a seamless user experience through efficient design and functionality.
                                </li>
                            </ul>

                        </p>
                    </div>
                </div>
            </Fade>
            {/* Internship */}
            <Fade triggerOnce direction="up" cascade damping={0.2}>
                <div className="flex items-start justify-between w-full max-sm:flex-col gap-10 px-4 mt-10 lg:px-44 sm:mt-20">
                    {/* Left side */}
                    <div className="relative w-1/2 max-sm:w-full p-1 bg-gray-800 text-white overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient border-animation"></div>
                        <div className="relative z-10 p-2 rounded-lg">
                            <p className="text-lg font-semibold">Front-end Developer</p>
                            <p className="text-white">Internship | All Friends Studio</p>
                            <p className="text-white">June 2022 - August 2022</p>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="w-1/2 max-sm:w-full">
                        <p>
                            <ul className="list-decimal pl-5 text-justify">
                                <li>
                                    Constructed a dynamic furniture showcasing website for Encore Prime Furniture using WordPress, enhancing the online presence and user experience through customized themes and plugins.
                                </li>
                                <li>
                                    Designed and developed WordPress-based websites for Australian agricultural companies, including Farmscan, with a focus on specialized product sales.
                                </li>
                                <li>
                                    Developed a services website for Windsor Valet and SSB Academy by integrating Divi and customizing its functionalities to meet specific client needs and enhance user experience.
                                </li>
                                <li>
                                    Developed a services website for Soundwork India by integrating Divi and customizing its functionalities to meet specific client needs and enhance user experience.
                                </li>
                                <li>
                                    Developed a services website for T27 Architecture using Divi, customizing its functionalities to meet client needs. Enhanced user experience with a playful and intuitive design.
                                </li>
                            </ul>

                        </p>
                    </div>
                </div>
            </Fade>
        </div>

    )
}

export default Experience