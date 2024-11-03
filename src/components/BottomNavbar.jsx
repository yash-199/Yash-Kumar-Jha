import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Add custom styles here or use inline styles

const BottomNavbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Adjust scroll threshold as needed
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`bottom-navbar ${isVisible ? 'visible' : 'hidden'}`}
            style={{
                position: 'fixed',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#1a1a2e', // Adjust background color
                color: '#fff',
                borderRadius: '15px',
                padding: '10px 20px',
                display: 'flex',
                gap: '20px',
                transition: 'opacity 0.3s ease',
                opacity: isVisible ? 1 : 0,
            }}
        >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    );
};

export default BottomNavbar;
