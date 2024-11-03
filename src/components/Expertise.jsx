import React from 'react';
import html from '../assets/html.webp';
import css from '../assets/css.webp';
import Tailwind from '../assets/Tailwind.png';
import Bootstrap from '../assets/Bootstrap.png';
import materialize from '../assets/materialize.webp';
import JavaScript from '../assets/JavaScript.png';
import ReactLogo from '../assets/React.png';
import nodejs from '../assets/nodejs.webp';
import mongodb from '../assets/mongodb.svg';
import php from '../assets/php.svg';
import Elementor from '../assets/elementor.png';
import Wordpress from '../assets/wordpress.webp';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Fade } from 'react-awesome-reveal';
const Expertise = () => {
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
    };

    return (
        <Fade triggerOnce direction="up" cascade damping={0.2}>
            <div className='flex flex-col items-center text-white mt-10 w-full'>
                <h1 className='text-center font-semibold text-4xl md:text:3xl lg:text-4xl sm:text-2xl'>Expertise</h1>
                <hr className='border-none h-0.5 bg-white w-1/12 mt-4' />

                <div className='w-10/12 m-10'>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        pauseOnHover={true}  // Pauses the carousel on hover
                    >
                        {[{ src: html, label: 'HTML' }, { src: css, label: 'CSS' }, { src: Tailwind, label: 'Tailwind CSS' },
                        { src: Bootstrap, label: 'Bootstrap' }, { src: materialize, label: 'Materialize CSS' },
                        { src: JavaScript, label: 'JavaScript' }, { src: ReactLogo, label: 'ReactJs' },
                        { src: nodejs, label: 'Node.js' }, { src: mongodb, label: 'MongoDB' },
                        { src: php, label: 'PHP' }, { src: Elementor, label: 'Elementor' },
                        { src: Wordpress, label: 'WordPress' }].map((item, index) => (
                            <div key={index} className='flex flex-col items-center transform transition-transform duration-200 hover:scale-110 cursor-pointer'>
                                <img src={item.src} alt={`${item.label} Expertise`} className='w-20 h-20 rounded-full border border-white-300' />
                                <p className='mt-2'>{item.label}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </Fade>
    );
}

export default Expertise;
