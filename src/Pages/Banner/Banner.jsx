import React from 'react';
import { bannerImg } from '../../assets/Img/Img';
import { Link } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
const Banner = () => {
    const handleEmailClick = () => {
        const email = 'hemelhossain64@gmail.com';
        const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`;
        window.open(gmailUrl, '_blank');
    };
    const handleProfileClick = (profileUrl) => {
        window.open(profileUrl, '_blank', 'noopener noreferrer');
      };
    return (
        <div className='flex md:flex-row flex-col items-center justify-center gap-8  mt-28 md:mt-44'>
            <div>
                <img src={bannerImg} className='rounded-full bg-gray-100 w-72' alt="" />
            </div>
            <div className='text-center'>
                <p className='text-sm'> Hello, I'm </p>
                <h4 className='text-3xl font-bold mt-1'>HEMEL HOSSAIN</h4>
                <h6 className='text-xl mt-1'>Front end Developer</h6>
                <div className='flex items-center justify-center space-x-3 mt-3'>
                    <button className='rounded-3xl border-gray-800 border py-1 px-3'>Download Resume</button>
                    <Link2 to='contact' spy={true} smooth={true} offset={50} className='rounded-3xl bg-gray-800 text-white border py-1 px-3'>Contact Info</Link2>
                </div>
                <div className='flex items-center justify-center space-x-3 mt-3'>
                    <button onClick={() => handleProfileClick('https://www.linkedin.com/in/hemel-hossain-62b700214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR363HzHciFx7kNpFsoa2Vcr15TE90HO997BQf-oxRJzTtYUKT7FF49J-Vk')}>
                        <FaLinkedin size={20} />
                    </button>
                    <button onClick={() => handleProfileClick('https://github.com/HemelHossain')}>
                        <FaGithub size={20} />
                    </button>
                    <button onClick={handleEmailClick}><MdMail size={20} /></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;