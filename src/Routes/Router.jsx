import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../Pages/Banner/Banner';
import Experience from '../Pages/About/About';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'experience',
                element: <Experience></Experience>
            }
        ]
    }
])

export default Router;