import React from 'react';
import Typewriter from 'typewriter-effect';
import MyProfile from '../assets/yash.jpg';
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <Fade triggerOnce direction="up" cascade damping={0.2}>
            <div className="flex flex-col items-center text-white mt-10 w-full">
                <h1 className="text-center font-semibold text-4xl md:text-3xl lg:text-4xl sm:text-2xl">About Us</h1>
                <hr className="border-none h-0.5 bg-white w-1/12 mt-4" />
                <div className="flex items-start justify-between w-full max-sm:flex-col gap-10 px-4 mt-10 lg:px-44 sm:mt-20">
                    {/* Left side */}
                    <div className="w-1/2 max-sm:w-full">
                        <h5 className='font-semibold text-2xl'>Yash Kumar Jha</h5>
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'Full Stack Developer'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                        <p className='text-justify'>
                            With over 2 years of frontend and full-stack development experience, I am a passionate programmer dedicated to crafting innovative web solutions. My core expertise lies in Full Stack, and I’m driven by a deep enthusiasm for learning, exploring new technologies, and solving complex problems. I aim to create user-centered, accessible, and impactful applications that make the web a more open, welcoming space for everyone.
                            <br />
                            {/* I'm actively seeking job opportunities that align with my skills and passion for web development. Let's connect to build remarkable digital experiences together! */}
                        </p>
                    </div>
                    {/* Right side */}
                    <div className="w-2/2 max-sm:w-full">
                        <img src={MyProfile} className='w-80 rounded drop-shadow bg-white' alt="Yash Kumar Jha" />
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default About;
