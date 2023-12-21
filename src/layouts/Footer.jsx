
import React from 'react';
import { FaTwitterSquare, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2">SCC Technovision Inc</h2>
                        <p>Elevate efficiency with our sleek Task Management Platform.</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2">Links</h2>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                        <p>Email: ridoygh51@gmail.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-2 text-3xl">
                            <a href="#" className="text-white">
                                <i className="fab fa-facebook">
                                    <FaTwitterSquare />
                                </i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-twitter">
                                    <FaFacebook />
                                </i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-linkedin">
                                    <FaLinkedin />
                                </i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
