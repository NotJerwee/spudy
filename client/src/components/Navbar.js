import React from 'react';
import Navbar from './Navbar';

function NavbarPage() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">Navbar Demo Page</h1>
                <p>This page is designed to demonstrate the appearance and functionality of the Navbar component in different scenarios.</p>
                {/* Include various content or styles to test your Navbar under different conditions */}
            </div>
        </div>
    );
}

export default NavbarPage;
