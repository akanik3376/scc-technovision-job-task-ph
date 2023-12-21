
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2">About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-2">
                            <a href="#" className="text-white">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-linkedin"></i>
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
