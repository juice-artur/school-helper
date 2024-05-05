import { CreateTaskPage } from './pages/CreateTaskPage';
import { HomePage } from './pages/HomePage';
import { RegistrationPage } from './pages/RegistrationPage';
import { SchoolsPage } from './pages/SchoolsPage';
import { UserPage } from './pages/UserPage';

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
        path: '/user',
        element: <UserPage/>
    },
    {
        path: '/registration',
        element: <RegistrationPage/>
    },
    {

    },
    {

    },
]

export default AppRoutes