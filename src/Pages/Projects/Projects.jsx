import React, { useState } from 'react';
import { AdminDashboad, dreamExplorer, projectImg } from '../../assets/Img/Img';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [isProjectOneOpen, setisProjectOneOpen] = useState(false);
    const [isProjecttwoOpen, setisProjecttwoOpen] = useState(false);
    
    const handleLinks = (link) => {
        window.open(link, '_blank', 'noopener noreferrer');
      };
    return (
        <div id='projects' className='mt-44 md:mt-52 mb-20'>
            <p className='text-xs text-center'>Browse My Recent</p>
            <h4 className='text-3xl font-semibold text-center'>Projects</h4>
            <div className='flex justify-center items-center md:flex-row flex-col gap-10 mt-12'>
                <div className='flex justify-center border border-gray-500 rounded-2xl gap-8 py-2 px-2'>
                    <img className='h-[300px] w-[250px] rounded-xl' src={projectImg} alt="" />
                </div>
                <div className='md:mx-0 mx-[10%] md:text-left text-center'>
                    <h4 className='text-3xl font-bold'>AUTOMOTIVE CAR</h4>
                    <p className='md:w-[35vw] text-justify text-sm mt-6'>
                    Our Car Dealer Website connects buyers and dealers seamlessly through an intuitive platform. Features include detailed car listings, user inquiries, secure online booking with Stripe integration, and a robust admin dashboard. Built with React, Firebase, Node.js, MongoDB, and hosted on Vercel and Firebase for optimal performance.
                    </p>
                    <div className='flex items-center md:justify-start justify-center space-x-3 mt-8'>
                        <button onClick={() => handleLinks('https://automotive-car-d90a6.web.app')} className='rounded bg-gray-800 text-white py-1 md:px-10 px-6'>Live Site</button>
                        <button onClick={() => {setisProjectOneOpen(!isProjectOneOpen)}} className='rounded border-gray-800 border py-1 md:px-10 px-6'>Github</button>
                    </div>
                    {
                        isProjectOneOpen? <div className='flex items-center justify-center space-x-3 mt-8'>
                        <button onClick={() => handleLinks('https://github.com/HemelHossain/AutoMotive-client-side')} className='rounded bg-gray-800 text-white py-1 md:text-base text-sm md:px-10 px-2'>Frontend Code</button>
                        <button onClick={() => handleLinks('https://github.com/HemelHossain/AutoMotive-server-side')} className='rounded border-gray-800 border py-1 md:text-base text-sm md:px-10 px-2'>Backend Code</button>
                    </div>: <></>
                    }
                </div>
            </div>
            <div>
            <div className='flex justify-center md:flex-row flex-col items-center gap-10 mt-20'>
                <div className='flex justify-center border border-gray-500 rounded-2xl gap-8 py-2 px-2'>
                    <img className='h-[250px] w-[250px] rounded-xl' src={   AdminDashboad} alt="" />
                </div>
                <div className='md:mx-0 mx-[10%] md:text-left text-center'>
                    <h4 className='text-3xl font-bold'>ADMIN DASHBOAD</h4>
                    <p className='md:w-[35vw] text-justify text-sm mt-6'>Admin Dashboard, featuring widgets for quick insights, intuitive transaction tables, FAQ section, and interactive charts. Built with HTML, CSS, JavaScript, React, and hosted on Netlify for optimal performance.</p>
                    <div className='flex items-center md:justify-start justify-center space-x-3 mt-8'>
                        <button onClick={() => handleLinks('https://inspiring-cocada-1ca05b.netlify.app/')} className='rounded bg-gray-800 text-white  py-1 md:px-10 px-6'>Live Site</button>
                        <button onClick={() => handleLinks('https://github.com/HemelHossain/React-Admin-Dashboard')} className='rounded border-gray-800 border py-1 md:px-10 px-6'>Github</button>
                    </div>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center md:flex-row flex-col gap-10 mt-12'>
                <div className='flex justify-center border border-gray-500 rounded-2xl gap-8 py-2 px-2'>
                    <img className='h-[300px] w-[250px] rounded-xl' src={dreamExplorer} alt="" />
                </div>
                <div className='md:mx-0 mx-[10%] md:text-left text-center'>
                    <h4 className='text-3xl font-bold'>DREAM EXPLORER</h4>
                    <p className='md:w-[35vw] text-justify text-sm mt-6'>A travel Agency Website. Explore meticulously designed packages, personalize your travel plans, and enjoy a seamless booking process. Stay informed with real-time trip notifications through our user-friendly dashboard. Built with React, Node.js, Express.js, MongoDB, and hosted on Vercel for a seamless travel experience.</p>
                    <div className='flex items-center md:justify-start justify-center space-x-3 mt-8'>
                        <button onClick={() => handleLinks('https://dream-explorer-10095.web.app/')} className='rounded bg-gray-800 text-white  py-1 md:px-10 px-6'>Live Site</button>
                        <button onClick={() => {setisProjecttwoOpen(!isProjecttwoOpen)}} className='rounded border-gray-800 border py-1 md:px-10 px-6'>Github</button>
                    </div>
                    {
                        isProjecttwoOpen? <div className='flex items-center justify-center space-x-3 mt-8'>
                        <button onClick={() => handleLinks('https://github.com/HemelHossain/dream-explorer-client')} className='rounded bg-gray-800 text-white  py-1 md:text-base text-sm md:px-10 px-2'>Frontend Code</button>
                        <button onClick={() => handleLinks('https://github.com/HemelHossain/dream-explorer-server')} className='rounded border-gray-800 border py-1 md:text-base text-sm md:px-10 px-2'>Backend Code</button>
                    </div>: <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;