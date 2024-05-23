import React from 'react';
import Navbar from '../components/Navbar'; 

function Home() {
    return (
        <div>
            <Navbar /> {/* Including the Navbar at the top */}
            <div className='w-full h-screen flex flex-col justify-center items-center' style={{ backgroundImage: `url(/Study-unsplash.jpg)`, backgroundSize: 'cover' }}>
                <div className='text-center p-4'>
                    <h1 className='text-5xl font-bold mb-3'>Welcome to Spudy!</h1>
                    <h1 className='text-5xl font-bold mb-4'>Study, learn, plan, organize</h1>
					<p className='text-xl mb-4'>Your ultimate study space.</p>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Get Started
                    </button>
                </div>
            </div>
            <div className='bg-white text-gray-800 py-8 px-4'>
                <h2 className='text-3xl font-bold text-center'>Features</h2>
                <ul className='list-disc space-y-2 p-4 m-4'>
                    <li>Notes: Take and organize your notes efficiently.</li>
                    <li>Flashcards: Create and review flashcards to enhance your learning.</li>
                    <li>Pomodoro Timer: Manage your study sessions with a built-in Pomodoro timer.</li>
                </ul>
            </div>
            <div className='bg-gray-200 text-gray-800 p-4'>
                <h2 className='text-3xl font-bold text-center'>Contact</h2>
                <p className='text-center'>Email: jerrylin2488@gmail.com</p>
            </div>
        </div>
    )
}

export default Home;
