// Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold">Your Logo</div>

                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div
                    className={`lg:flex ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}
                >
                    <a href="#" className="text-white p-2">Home</a>
                    <a href="#" className="text-white p-2">About</a>
                    <a href="#" className="text-white p-2">Services</a>
                    <a href="#" className="text-white p-2">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
