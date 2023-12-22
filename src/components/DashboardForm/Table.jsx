import React from 'react';
import DataTable from 'react-data-table-component';

const Table = ({ isLoading, tasks }) => {
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

export default Table;