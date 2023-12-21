import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import bgImg from '../../assets/her_micronet.jpg'

const Banner = () => {
    return (
        <div className="hero h-[90vh]" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-3xl font-semibold mb-5">Elevate efficiency with our sleek Task Management Platform.</h1>

                    <Link to='/login'>
                        <button className="px-4 gap-x-2 flex justify-center items-center bg-blue-500 py-2 rounded-md font-semibold w-40 mx-auto hover:text-black">Let’s Explore <FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;