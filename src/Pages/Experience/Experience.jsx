import React from 'react';
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
    return (
        <div className='mt-44 md:mt-52' id='experience'>
            <p className='text-xs text-center'>Explore My</p>
            <h4 className='text-3xl font-semibold text-center'>Experience</h4>
            <div className='flex justify-center md:flex-row flex-col gap-10 items-center md:mx-[15%] mx-[10%] mt-7'>
                <div className='border border-gray-500 p-2 w-full h-[200px] rounded-2xl'>
                    <h5 className='text-center text-xl font-bold'>
                        Frontend Development
                    </h5>
                    <div className='flex justify-between items-center md:gap-16 mt-6 mx-[5%] font-semibold text-gray-600 md:text-base text-sm'>
                        <ul>
                            <li className='flex items-center'><HiBadgeCheck /><p>HTML</p></li>
                            <li className='flex items-center mt-5'><HiBadgeCheck /><p>Bootstrap</p></li>
                            <li className='flex items-center mt-5'><HiBadgeCheck /><p>Javascript</p></li>
                        </ul>
                        <ul>
                            <li className='flex items-center'><HiBadgeCheck /><p>Css</p></li>
                            <li className='flex items-center mt-5'><HiBadgeCheck /><p>Tailwind Css</p></li>
                            <li className='flex items-center mt-5'><HiBadgeCheck /><p>React Js</p></li>
                        </ul>
                    </div>
                </div>
                <div className='border border-gray-500 p-2 w-full h-[200px] rounded-2xl'>
                    <h5 className='text-center text-xl font-bold'>
                        Backend Development
                    </h5>
                    <div className='flex items-center justify-between md:gap-16 mt-6  mx-[5%] font-semibold md:text-base text-sm text-gray-600'>
                        <ul>
                            <li className='flex items-center'><HiBadgeCheck /><p>Node Js</p></li>
                            <li className='flex items-center mt-5'><HiBadgeCheck /><p>Firebase</p></li>
                        </ul>
                        <ul>
                            <li className='flex items-center'><HiBadgeCheck /><p>Express Js</p></li>
                            <li className='flex items-center mt-5'><HiBadgeCheck /><p>MongoDb</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;