import React from 'react';
import DataTable from 'react-data-table-component';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';

const DashBoardHome = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { data: tasks = [], refetch, isLoading } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/api/v1/show-all-task/${user?.email}`);
                if (res.data) {
                    console.log(res.data)
                    refetch()
                }
                return res.data;

            } catch (error) {
                console.error('Error fetching user data:', error);

            }
        },
    });
    if (isLoading) {
        return ('Loading...')
    }

    // table row
    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1
        },
        {
            name: "Name",
            selector: (row) => row.name
        },
        {
            name: "Email",
            selector: (row) => row.email
        },
        {
            name: "User",
            selector: (row) => row.role === 'user' ? 'user' : ''
        },
        {
            name: "Pro User",
            selector: (row) => row.role === 'pro-user' ? 'pro-user' : ''
        },
        {
            name: "Admin Role",
            cell: (row) => {
                return row.role === "admin" ? 'Admin'
                    : (
                        <button onClick={() => HandelMakeAdmin(row._id)} className=" text-xl text-[#5ae4a7]  flex ">
                            <GrUserAdmin />
                        </button>
                    )
            }


        },
        {
            name: "Surveyor Role",
            cell: (row) => {
                return row.role === "surveyor" ? 'Surveyor' : (
                    <button onClick={() => HandelMakeSavior(row._id)} className=" text-xl text-[#2a2a2a]  flex ">
                        <FaUserEdit />
                    </button>
                )
            }

        },
        {
            name: "Action",
            cell: (row) => (
                <button onClick={() => HandelDeleteUser(row._id)} className="bg-[#ed5e68] px-3 py-1 rounded text-white flex items-center gap-1">
                    <AiFillDelete className="text-lg" />  Delete
                </button>
            )
        }
    ]

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-around mt-3'>
                <h1 className="text-2xl font-semibold">My all previous task</h1>
                <button className="font-semibold text-2xl mt-5">Total Task:{'00'}</button>
            </div>
            <div>

                <div className="px-6 mb-5 fob">
                    {/* <label className="text-lg font-medium" htmlFor="roleFilter">Filter by Role: </label> */}
                    {/* <select className=" text-base md:text-lg"
                        id="roleFilter"
                        onChange={(e) => setSelectedRole(e.target.value)}
                        value={selectedRole}
                    >
                        <option value="">All</option>
                        <option value="user">User</option>
                        <option value="pro-user">Pro User</option>
                        <option value="admin">Admin</option>
                        <option value="surveyor">Surveyor</option>
                    </select> */}
                </div>
                {/* table */}
                <div className="my-10 px-6" >
                    <DataTable
                        columns={columns}
                        // data={filteredUsers}
                        pagination
                        highlightOnHover
                        responsive
                    />
                </div>
            </div>
        </div>
    );
};

export default DashBoardHome;