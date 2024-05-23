import React from 'react';
import style from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={style.navbar}>
            <div className="container mx-auto flex justify-between items-center w-full">
                <h1 className="text-3xl font-bold">Spudy</h1>
                <div>
                    <a href="#home" className={style.link}>Home</a>
                    <a href="#about" className={style.link}>About</a>
                    <a href="/Login" className={style.link}>Log in</a> 
                    <a href="#contact" className={style.link}>Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
