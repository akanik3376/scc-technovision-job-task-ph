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
import AllTask from '../pages/AllTask';
import List from '../pages/Dashboard/List';
import About from '../pages/About';
import EditTask from '../components/DashboardForm/UpdateTask';


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
                element: <About></About>
            },
            {
                path: '/all-task',
                element: <AllTask></AllTask>
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
            {
                path: '/dashboard/list',
                element: <List />
            },



        ]
    },
    {
        path: '/update-task/:id',
        element: <EditTask></EditTask>,
        loader: ({ params }) => fetch(`http://localhost:3000/api/v1/show-task/${params.id}`)
    },
])

export default routes;
