import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import logo from '../assets/demo_logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logoutUser, user } = useAuth()

    const HandelLogout = () => {
        logoutUser()
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4 relative z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold">
                    <img src={logo} alt="" />
                </div>

                <div className="md:hidden">
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
                    className={`md:flex ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0 absolute md:relative`}
                >
                    {/* Home */}
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white p-2 w-full border-red-600 bg-gray-800" : "text-white p-2 w-full border-red-600 bg-gray-800"
                        }
                    >
                        Home
                    </NavLink>
                    {/* About */}
                    <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white p-2 w-full border-red-600 bg-gray-800" : "text-white p-2 w-full border-red-600 bg-gray-800"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/all-task"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-white p-2 w-full border-red-600 bg-gray-800" : "text-white p-2 w-full border-red-600 bg-gray-800"
                        }
                    >
                        Tasks
                    </NavLink>

                    {
                        user && <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-white p-2 w-full border-red-600 bg-gray-800" : "text-white p-2 w-full border-red-600 bg-gray-800"
                            }
                        >
                            Dashboard
                        </NavLink>
                    }

                    {
                        user ? <NavLink onClick={HandelLogout}
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-white p-2 w-full border-red-600 bg-gray-800" : "text-white p-2 w-full border-red-600 bg-gray-800"
                            }
                        >
                            Logout
                        </NavLink>
                            :
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-white p-2 w-full border-red-600 bg-gray-800" : "text-white p-2 w-full border-red-600 bg-gray-800"
                                }
                            >
                                Login
                            </NavLink>
                    }


                </div>
            </div>
        </nav>
    );
};

export default Navbar;
