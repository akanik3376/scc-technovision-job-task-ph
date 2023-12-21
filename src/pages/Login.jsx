// Login.js

import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import swal from 'sweetalert';

const Login = () => {

    const { LoginUser, googleLogin } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const HandelGoogleLogin = async () => {

        try {
            googleLogin()

            navigate(location?.state ? location.state : '/')
        } catch (err) {
            console.log(err)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        // Login User
        try {
            await LoginUser(email, password)
            if (user?.accessToken) {
                swal("user login success fully")
                navigate(location?.state ? location.state : '/')
            }
            else { swal("invalid-login-credentials! please try again ") }

        } catch (err) {
            console.log(err)
        }

        // Clear form fields after submission
        setEmail('');
        setPassword('');
    };

    const HandleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mt-8 max-w-md mx-auto px-2 md:px-0">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Login</h2>
            <form onSubmit={handleLogin}>
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
                        placeholder='Your password'
                        required
                    />
                </div>
                <div className="form-control w-1/3">
                    <label className="label cursor-pointer">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={HandleCheckboxChange}
                            className="checkbox "
                        />
                        <span className="label-text">Show Password</span>
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full font-semibold mt-3">Login</button>
            </form>

            {/* login with google */}
            <div className='mt-4'>

                <div onClick={HandelGoogleLogin}
                    className='mt-4 border-2 flex items-center justify-center text-2xl gap-x-2  w-1/2  font-semibold border-blue-500 mb-2'>
                    Login with <FcGoogle />
                </div>

                <Link to='/register'>Don't Have Account? <span className='border-b-2 border-blue-500'>Register</span></Link>
            </div>
        </div>
    );
};

export default Login;
