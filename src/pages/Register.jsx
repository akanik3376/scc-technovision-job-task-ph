// Register.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Register clicked:', name, image, email, password);

        // Clear the form after submission
        setName('');
        setImage('');
        setEmail('');
        setPassword('');
    };

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Register</h2>
            <form onSubmit={handleRegister} >
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border p-2"
                        placeholder='Your name'
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-600">Image URL:</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full border p-2"
                        placeholder='Your image'
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-2"
                        placeholder='Your email'
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600">Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border p-2"
                        placeholder='Password'
                        required
                    />
                </div>
                <div className="form-control w-1/3">
                    <label className="label cursor-pointer text-blue-500">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={handleCheckboxChange}
                            className="checkbox "
                        />
                        <span className="label-text">Show Password</span>
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full font-semibold mt-3">Register</button>
            </form>

            <div className='my-3 flex items-center gap-2'>
                <span className='border-2 w-1/2 border-blue-500'></span>
                <span className='text-2xl font-semibold'>X</span>
                <span className='border-2 w-1/2 border-blue-500'></span>
            </div>

            <div className='mt-4'>

                <div className='mt-4 border-2 flex items-center justify-center text-2xl gap-x-2  w-1/2  font-semibold border-blue-500 mb-2'>
                    Register with <FcGoogle />
                </div>

                <Link to='/login'>Already Have Account? <span className='border-b-2 border-blue-500 mt-4'>Login</span></Link>
            </div>
        </div>
    );
};

export default Register;
