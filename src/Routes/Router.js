import { createBrowserRouter } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import Main from "../Layout/Main/Main";
import Body from "../Pages/Body/Body";
import Courses from "../Pages/courses/Courses";
import Courses1 from "../Pages/courses/Courses1";

export let routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Body></Body>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children:[
                    {
                        path: '/courses',
                        loader:()=> fetch('http://localhost:5000'),
                        element: <Courses1></Courses1>
                    }
                ],
            }
        ],
    },
]);