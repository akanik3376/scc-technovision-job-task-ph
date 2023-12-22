import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from '../pages/Register';
import DashBoardHome from '../pages/Dashboard/DashBoardHome';
import CreateTask from '../pages/Dashboard/CreateTask';
import ToDoList from '../pages/Dashboard/ToDoList';
import PrivetRoot from '../routes/PrivetRoot';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <h3>This is about page</h3>
            },

        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },

    // dashboard
    {
        path: '/dashboard',
        element: <PrivetRoot><Dashboard /></PrivetRoot>,

        children: [
            {
                path: '/dashboard/home',
                element: <DashBoardHome></DashBoardHome>
            },
            {
                path: '/dashboard/create-task',
                element: <CreateTask></CreateTask>
            },
            {
                path: '/dashboard/todo-task',
                element: <ToDoList></ToDoList>
            },


        ]
    },
])

export default routes;
