import { Editor } from '../src/components/TextEditor/Editor';
import TextEditor from './components/TextEditor/TextEditor';
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
        // <></>
        // <TextEditor/>
        <Editor/>
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

    },
]

export default AppRoutes