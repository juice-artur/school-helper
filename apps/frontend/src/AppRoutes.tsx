import { CreateTaskPage } from './pages/CreateTaskPage';
import { HomePage } from './pages/HomePage';
import { RegistrationPage } from './pages/RegistrationPage';
import { SchoolsPage } from './pages/SchoolsPage';
import { UserPage } from './pages/UserPage';
import { VerticalTabs } from './components/TeacherPageContent/TabPanel'
import { CreateSchool } from './pages/CreateShoolPage';
import DirectorTabs from './components/DirectorPageContent/TabPannel';
import { CreateTest } from './components/Test/CreateTest';

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
        path: '/teacher-page',
        element: <VerticalTabs/>
    },
    {
        path: '/director-page',
        element: <DirectorTabs/>
    },
    {
        path: '/create-school',
        element: <CreateSchool/>
    },
    {
        path: '/create-test',
        element: <CreateTest/>
    },
]

export default AppRoutes