import React from 'react';
import { Fade } from 'react-awesome-reveal';
const Education = () => {
    return (
        <Fade triggerOnce direction="up" cascade damping={0.2}>
            <div className="flex flex-col items-center text-white mt-20 w-full">
                <h1 className="text-center font-semibold text-4xl md:text-3xl lg:text-4xl sm:text-2xl">Education</h1>
                <hr className="border-none h-0.5 bg-white w-1/12 my-2 mb-2" />
                <div className="flex items-start justify-between w-full max-sm:flex-col gap-10 px-4 mt-10 lg:px-44 sm:mt-20">

                    {/* Left side */}
                    <div className="w-1/2 flex justify-center max-sm:w-full">
                        <iframe
                            src="https://lottie.host/embed/da2677f0-1641-4ee3-8b0d-a422399ed030/KnmmfLyvko.json"
                            style={{ width: "400px", height: "400px" }}
                        ></iframe>
                    </div>

                    {/* Right side */}
                    <div className="w-1/2 max-sm:w-full flex flex-col gap-10">
                        <div className="relative p-1 bg-gray-800 text-white overflow-hidden mb-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient border-animation"></div>
                            <div className="relative z-10 p-2 rounded-lg">
                                <p className="text-lg font-semibold">Master of Computer Applications</p>
                                <p>Amity University</p>
                                <p>2024 - Present</p>
                            </div>
                        </div>

                        <div className="relative p-1 bg-gray-800 text-white overflow-hidden mb-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient border-animation"></div>
                            <div className="relative z-10 p-2 rounded-lg">
                                <p className="text-lg font-semibold">Bachelor of Computer Applications</p>
                                <p>Indira Gandhi National Open University</p>
                                <p>2019 - 2023</p>
                            </div>
                        </div>

                        <div className="relative p-1 bg-gray-800 text-white overflow-hidden mb-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient border-animation"></div>
                            <div className="relative z-10 p-2 rounded-lg">
                                <p className="text-lg font-semibold">Higher Secondary School</p>
                                <p>2018 - 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Education;
