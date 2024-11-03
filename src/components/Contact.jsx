import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Email from '../assets/email.png'
import Phone from '../assets/phone-call.png'
// import Location from '../assets/location.png
import { Fade } from 'react-awesome-reveal';
import github from '../assets/github.png'
import Linkdin from '../assets/message.png'
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your EmailJS values
        emailjs.send('service_kwrv0ws', 'template_09lvc81', formData, 'Dt0Py9hWgdSHekEF3')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                // Clear form data or show success message
                setFormData({ name: '', email: '', subject: '', message: '' });
                alert("Email sent successfully!"); // Optional: Show success message to the user
            })
            .catch((error) => {
                console.log('Failed to send email.', error);
                alert("Failed to send email. Please try again."); // Optional: Show error message to the user
            });
    };
    return (
        <Fade triggerOnce direction="up" cascade damping={0.2}>
            <div className="flex flex-col items-center text-white mt-20 w-full">
                <h1 className="text-center font-semibold text-4xl md:text-3xl lg:text-4xl sm:text-2xl">Contact Us</h1>
                <hr className="border-none h-0.5 bg-white w-1/12 my-2 mb-2" />

                <div className='flex items-start justify-between w-full max-sm:flex-col gap-10 px-4 mt-10 lg:px-44 sm:mt-20'>
                    {/* Left side */}
                    <div className="w-1/2 max-sm:w-full">
                        <iframe src="https://lottie.host/embed/bb192a72-5749-4799-8c81-0075c92db720/swlooYR9wY.json" style={{ width: "400px", height: "400px" }}></iframe>
                        <div className='flex items-center gap-10 mb-10'>
                            <a href="mailto:byash0720@gmail.com"><img src={Email} alt="" className='w-14 border border-white p-2 rounded-full' /></a>
                            <a href="tel:+919873472655"><img src={Phone} alt="" className='w-14 border border-white p-2 rounded-full' /></a>
                            <a href="https://github.com/yash-199/"><img src={github} alt="" className='w-14 border border-white p-2 rounded-full' /></a>
                            <a href="https://www.linkedin.com/feed/"><img src={Linkdin} alt="" className='w-14 border border-white p-2 rounded-full' /></a>
                        </div>
                    </div>

                    {/* Right Side*/}
                    <div className='w-1/2 max-sm:w-full flex flex-col gap-10'>
                        <h1 className='text-4xl font-semibold m-0 p-0'>Let’s Discuss Your Project</h1>
                        <p>Always available for freelancing if the right project comes along, feel free to contact me</p>

                        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                            <div className='flex w-full gap-5'>
                                <div className='w-1/2'>
                                    <p>Name</p>
                                    <input
                                        className='border border-zinc-300 rounded w-full p-2 mt-2'
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <p>Email</p>
                                    <input
                                        className='border border-zinc-300 rounded w-full p-2 mt-2'
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <p>Subject</p>
                                <input
                                    className='border border-zinc-300 rounded w-full p-2 mt-2'
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='w-full'>
                                <p>Message</p>
                                <textarea
                                    className='border border-zinc-300 rounded w-full p-2 mt-2'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <center>
                                <button type='submit' className='bg-white text-black w-40 py-2 rounded-md text-base hover:scale-105 transition-all duration-700'>Submit</button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </Fade >
    )

}

export default Contact