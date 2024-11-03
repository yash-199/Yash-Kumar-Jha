import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../assets/menu.png';
import Close from '../assets/close.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className='flex items-center justify-between text-sm p-4 mb-5 bg-gray-900'>
            <h1 className='text-white font-semibold text-2xl uppercase sm:text-1xl'>Yash Kumar Jha</h1>

            {/* Desktop Menu */}
            <ul className='hidden md:flex items-start gap-5 font-semibold uppercase text-white'>
                <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
                    <li className='py-1'>Home</li>
                </NavLink>
                <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>
                    <li className='py-1'>About</li>
                </NavLink>
                <NavLink to='/experience' className={({ isActive }) => isActive ? 'active' : ''}>
                    <li className='py-1'>Experience</li>
                </NavLink>
                <NavLink to='/skill' className={({ isActive }) => isActive ? 'active' : ''}>
                    <li className='py-1'>Skill</li>
                </NavLink>
                <NavLink to='/education' className={({ isActive }) => isActive ? 'active' : ''}>
                    <li className='py-1'>Education</li>
                </NavLink>
                <NavLink to='/project' className={({ isActive }) => isActive ? 'active' : ''}>
                    <li className='py-1'>Project</li>
                </NavLink>
            </ul>

            <button className='hidden md:block bg-white border px-6 py-3 font-medium rounded-full cursor-pointer hover:scale-105 transition-all duration-700'>
                Get Resume
            </button>

            {/* Mobile Menu Toggle */}
            <div className='md:hidden text-white cursor-pointer' onClick={toggleMenu}>
                <img src={isOpen ? Close : Menu} alt="menu-icon" className="w-6 h-6" />
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 left-0 h-full w-3/4  text-white transform z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
                <ul className='flex flex-col items-start gap-5 p-6 font-semibold uppercase'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
                        <li className='py-2'>Home</li>
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
                        <li className='py-2'>About</li>
                    </NavLink>
                    <NavLink to='/experience' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
                        <li className='py-2'>Experience</li>
                    </NavLink>
                    <NavLink to='/skill' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
                        <li className='py-2'>Skill</li>
                    </NavLink>
                    <NavLink to='/education' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
                        <li className='py-2'>Education</li>
                    </NavLink>
                    <NavLink to='/project' className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleMenu}>
                        <li className='py-2'>Project</li>
                    </NavLink>
                    <button className='mt-4 bg-white text-gray-900 px-6 py-3 font-medium rounded-full hover:scale-105 transition-all duration-700' onClick={toggleMenu}>
                        Get Resume
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
