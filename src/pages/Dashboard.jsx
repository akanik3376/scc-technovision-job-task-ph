// Dashboard.js

import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Dashboard = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const { user, logoutUser } = useAuth()

    const HandelLogout = () => {
        logoutUser()

    }
    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const url = <>
        <li><NavLink to="/dashboard/home" onClick={closeDrawer} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline  p-2 w-full border-red-600 " : " p-2 w-full border-red-600"
        }>Home</NavLink></li>

        <li><NavLink to="/dashboard/create-task" onClick={closeDrawer} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline  p-2 w-full border-red-600" : " p-2 w-full border-red-600"
        }>Create Task</NavLink></li>
        <li><NavLink to="/dashboard/todo-task" onClick={closeDrawer} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline  p-2 w-full border-red-600 " : " p-2 w-full border-red-600 "
        }>Task Management</NavLink></li>
    </>

    return (
        <div className="flex h-screen bg-[#f5f5f5]">

            {/* Left Sidebar */}
            <div className="p-4 hidden md:block md:w-1/6 border-r mr-4">
                <img className='w-20 rounded-full' src={user?.photoURL} alt="" />

                <h1 className="text-2xl font-semibold my-4">{user?.displayName}</h1>
                <ul className="space-y-2 font-semibold">
                    {url}
                </ul>
                <button onClick={HandelLogout} className='bg-blue-500 px-4 py-2 rounded-md mt-4 text-white font-semibold w-full'>Logout</button>
            </div>

            {/* Drawer for Small Screens */}
            <div
                className={`bg-[#f5f5f5] border-r mr-4  p-4 w-40 fixed left-0 top-0 h-full block md:hidden transition-transform transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    } `}
            >
                {isDrawerOpen && <>
                    <img className='w-20 rounded-full' src={user?.photoURL} alt="" />
                    <h1 className="text-2xl font-semibold mb-4">{user?.displayName}</h1>
                    <ul className="space-y-2 font-semibold">
                        {url}
                    </ul>
                    <button onClick={HandelLogout} className='btn'>Logout</button>
                </>}
            </div>

            {/* Content */}
            <div className="flex-1 bg-[#f5f5f5] p-4">
                {/* Hamburger Icon for Small Screens */}
                <div className="md:hidden">
                    <button onClick={toggleDrawer} className="text-gray-800">
                        ☰
                    </button>
                </div>

                {/* Content goes here */}
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
