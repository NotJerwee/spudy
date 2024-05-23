import React from 'react';

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto flex justify-between items-center w-full">
                <h1 className="text-3xl font-bold">Spudy</h1>  
                <div>
                    <a href="/" className="px-4 hover:text-gray-300 text-lg">Home</a>  
                    <a href="/about" className="px-4 hover:text-gray-300 text-lg">About</a>  
                    <a href="/login" className="px-4 hover:text-gray-300 text-lg">Log in</a> 
                    <a href="/contact" className="px-4 hover:text-gray-300 text-lg">Contact</a> 
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
