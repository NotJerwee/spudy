import React from 'react';

function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Spudy</h1>
                <div>
                    <a href="/" className="px-4 hover:text-gray-300">Home</a>
                    <a href="/about" className="px-4 hover:text-gray-300">About</a>
                    <a href="/features" className="px-4 hover:text-gray-300">Features</a>
                    <a href="/contact" className="px-4 hover:text-gray-300">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
