import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', description: 'Description 1', status: 'todo' },
        { id: 2, title: 'Task 2', description: 'Description 2', status: 'ongoing' },
        { id: 3, title: 'Task 3', description: 'Description 3', status: 'completed' },
        // Add more tasks as needed
    ]);

    const columns = useMemo(
        () => [
            { Header: 'Title', accessor: 'title' },
            { Header: 'Description', accessor: 'description' },
            { Header: 'Status', accessor: 'status' },
            { Header: 'Update', accessor: 'Update' },
            { Header: 'Delete', accessor: 'Delete' },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: tasks });

    const moveTask = (id, status) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? { ...task, status } : task))
        );
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="min-h-screen flex  justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-md  w-full md:w-5/6">
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Task Management</h2>

                        {/* React Table */}
                        <table {...getTableProps()} className="table-auto w-full">
                            <thead className="bg-gray-200">
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()} className="py-2 px-4">
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()} className="border-t">
                                            {row.cells.map((cell) => (
                                                <td
                                                    {...cell.getCellProps()}
                                                    className="py-2 px-4"
                                                    style={{ cursor: 'grab', userSelect: 'none' }}
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default TaskManager;
