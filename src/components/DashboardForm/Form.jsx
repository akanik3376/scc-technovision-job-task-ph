// TaskForm.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import swal from 'sweetalert';
const TaskForm = ({ onSubmit }) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (task) => {
        const email = user?.email;
        const data = { email, task };

        try {
            setLoading(true);

            const res = await axiosPublic.post("/api/v1/create-task", data);

            if (res?.data?.insertedId) {
                swal('Task successfully created!');
            } else {

                swal('Unexpected response from the server. Please try again later.', 'error');
            }
        } catch (error) {

            swal(`Error: ${error.message}. Please try again later.`, 'error');
        } finally {
            setLoading(false);
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full md:w-2/3 mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold mb-4">Create New Task</h2>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
            </label>
            <input
                type="text"
                id="title"
                {...register('title', { required: true })}
                className="mt-1 p-2 w-full border rounded-md"
            />

            <label htmlFor="description" className="block mt-4 text-sm font-medium text-gray-700">
                Description
            </label>
            <textarea
                id="description"
                {...register('description')}
                className="mt-1 p-2 w-full border rounded-md"
            />

            <label htmlFor="deadline" className="block mt-4 text-sm font-medium text-gray-700">
                Deadline
            </label>
            <input
                type="date"
                id="deadline"
                {...register('deadline')}
                className="mt-1 p-2 w-full border rounded-md"
            />

            <label htmlFor="priority" className="block mt-4 text-sm font-medium text-gray-700">
                Priority
            </label>
            <select id="priority" {...register('priority')} className="mt-1 p-2 w-full border rounded-md">
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
            </select>

            <button type="submit" className="mt-4 bg-blue-500 text-white w-full font-semibold p-2 rounded-md">
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
