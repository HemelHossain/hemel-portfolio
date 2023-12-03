import React from 'react';
import { CgCopyright } from "react-icons/cg";
const Footer = () => {
    return (
        <div className='border-t mt-20 border-gray-400'>
        <div className='py-5 max-w-screen-lg mx-auto'>
            <p className='flex md:items-center md:justify-start justify-center md:text-base text-sm'><CgCopyright className='w-6 h-6 mr-1' /> 2023 Hemel . All Rights Reserved. Developed by HEMEL</p>
        </div>
        </div>
    );
};

export default Footer;