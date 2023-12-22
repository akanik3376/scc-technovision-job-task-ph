import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const AllTask = () => {
    const axiosPublic = useAxiosPublic()
    const { data: tasks = [], refetch, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/api/v1/show-all-task`);
                if (res.data) {
                    refetch()
                }
                return res.data;

            } catch (error) {
                console.error('Error fetching user data:', error);

            }
        },
    });

    return (
        <div className='container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3'>
            {tasks?.map(data => <div data-aos="fade-up" key={data?._id} className='border p-4 flex flex-col space-y-2 bg-slate-100 rounded-md'>
                <h1 className="text-2xl font-semibold">{data?.task?.title}</h1>
                <p className="">{data?.task?.description}</p>
                <p className="">{data?.task?.deadline}</p>
                <p className="">{data?.task?.priority}</p>
            </div>)}
        </div>
    );
};

export default AllTask;