import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import Table from '../../components/DashboardForm/Table';

const DashBoardHome = () => {
    const { user } = useAuth()

    const axiosPublic = useAxiosPublic()
    const { data: tasks = [], isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/api/v1/show-all-task/${user?.email}`);
                if (res.data) {

                    return res.data;
                }


            } catch (error) {
                console.error('Error fetching user data:', error);

            }
        },
    });



    return (
        <div>
            <div className='flex flex-col md:flex-row justify-around items-center mt-3'>
                <h1 className="text-2xl font-semibold">My all previous task</h1>
                <button className="font-semibold text-2xl mt-5 md:mt-0">Total Task:{tasks?.length}</button>
            </div>
            <div>

                <Table tasks={tasks} isLoading={isLoading}></Table>
            </div>
        </div>
    );
};

export default DashBoardHome;