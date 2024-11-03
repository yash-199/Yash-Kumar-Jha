import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import Expertise from '../components/Expertise'
import Project from '../components/Project'
import Education from '../assets/Education'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Experience />
            <Expertise />
            <Project />
            <Education />
            <Contact />
        </div>
    )
}

export default Home