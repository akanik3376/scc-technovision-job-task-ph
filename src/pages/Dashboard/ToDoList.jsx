import React, { useState, useMemo } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import DataTable from 'react-data-table-component';
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GrUpdate } from "react-icons/gr";

const TaskManager = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const { data: tasks = [], isLoading, refetch } = useQuery({
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

    //delete user
    const HandelDeleteUser = (row) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/api/v1/show-all-task/${row._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `User deleted successfully`,
                                'success'
                            );
                        }
                    })
            }
        });
    };




    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1
        },
        {
            name: "Title",
            selector: (row) => row.task.title
        },
        {
            name: "Priority",
            selector: (row) => row.task.priority
        },
        {
            name: "Email",
            selector: (row) => row.email
        },
        {
            name: "Deadline",
            selector: (row) => row.task.deadline
        },
        {
            name: "Delete",
            cell: (row) => (
                <button onClick={() => HandelDeleteUser(row)} className="bg-[#ed5e68] px-3 py-1 rounded text-white flex items-center gap-1">
                    <AiFillDelete className="text-lg" />  Delete
                </button>
            )
        },
        {
            name: "Update",
            cell: (row) => (
                <Link to={`/update-task/${row._id}`}>
                    <button className="bg-blue-500 px-3 py-1 rounded text-white flex items-center gap-1">
                        <GrUpdate className="text-lg" />  Update
                    </button>
                </Link>
            )
        }



    ]


    if (isLoading) {
        return ('Loading...')
    }

    return (
        <div>

            {/* table */}
            <div className="my-10 px-6" >
                <DataTable
                    columns={columns}
                    data={tasks}

                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    );
};

export default TaskManager;
