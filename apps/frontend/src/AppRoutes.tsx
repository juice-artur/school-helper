import { CreateTaskPage } from './pages/CreateTaskPage';
import { HomePage } from './pages/HomePage';
import { SchoolsPage } from './pages/SchoolsPage';

const AppRoutes = [
    {
        index: true,
        element: <HomePage/> 
    },
    {
        path: '/shools',  
        element: <SchoolsPage/>
    },
    {
        path: '/blog',
        element: 
        <></>
    },
    {
        path: '/about',
        element: <></>
    },
    {
        path: '/contacts',
        element: <></>
    },
    {
        path: '/create-task',
        element: <CreateTaskPage/>
    },
    {

    },
    {

    },
    {

    },
    {

    },
]

export default AppRoutes