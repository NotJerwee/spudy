import React from 'react';
import Navbar from '../components/Navbar'; 
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Navbar /> {/* Including the Navbar at the top */}
            <div id="home" className='w-full h-screen mt-100 flex flex-col justify-center items-center' style={{ backgroundImage: `url(/Study-unsplash.jpg)`, backgroundSize: 'cover', paddingTop: '300px'}}>
                <div className='text-center p-4'>
                    <h1 className='text-5xl font-bold mb-4'>Study, learn, plan, organize</h1>
                    <p className='text-xl mb-4'>Your ultimate study space.</p>
                    <Link to="/Signup" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Get Spudy free
                    </Link>
                    
                </div>
            </div>

            <div id="about" className="text-4xl m-20 p-10 font-bold text-gray-800 mb-6">
                <h1>About Spudy</h1>
                <p className="text-lg text-gray-600 mb-4">
                    Spudy is your ultimate study companion designed to help streamline
                    your learning experience, organize your study materials, and boost
                    your productivity. Whether you're a student, a lifelong learner, or
                    just someone looking to structure their learning, Spudy offers all
                    the tools you need to succeed.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                    We believe that effective learning is accessible, engaging, and
                    enjoyable. That's why we've built features like a customizable
                    notebook, flashcard system for memory training, and a Pomodoro timer
                    to manage your study sessions efficiently.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                    Founded in 2024, Spudy is continually evolving to meet the diverse
                    needs of learners around the globe. We're committed to helping you
                    achieve your learning goals.
                </p>
            </div>

            <div id="contact" className='bg-gray-200 text-gray-800 p-4'>
                <h2 className='text-3xl font-bold text-center'>Contact</h2>
                <p className='text-center'>Email: jerrylin2488@gmail.com</p>
            </div>
        </div>
    )
}

export default Home;
