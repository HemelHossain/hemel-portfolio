import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineX, HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navOption = <>
        <li><Link activeClass="active" 
      to='about' spy={true} smooth={true} offset={50} duration={500}  className='block hover:bg-gray-500 p-2 hover:rounded'>About</Link></li>
        <li><Link to='experience' spy={true} smooth={true} offset={50} duration={500} className='block hover:bg-gray-500 p-2 hover:rounded'>Experience</Link></li>
        <li><Link to='projects' spy={true} smooth={true} offset={50} className='block hover:bg-gray-500 p-2 hover:rounded'>Projects</Link></li>
        <li><Link to='contact' spy={true} smooth={true} offset={50} className='block hover:bg-gray-500 p-2 hover:rounded'>Contact</Link></li>


    </>
    return (
        <div>
            <nav className='fixed top-0 container border-b py-3 md:py-2 bg-white'>
            <div className='flex justify-between items-center max-w-screen-lg md:mx-auto px-4  py-2'>
                <div>
                    <Link to='/' spy={true} smooth={true} offset={50} duration={500} className='text-xl font-semibold'>Hemel Hossain</Link>
                </div>
                <div className='md:block hidden'>
                    <ul className='flex items-center justify-between space-x-4'>
                        {navOption}
                    </ul>
                </div>
                <div className='cursor-pointer md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {
                        isMenuOpen ? <HiOutlineX className='w-6 h-7' /> : <HiMenuAlt3 className='w-6 h-7' />
                    }
                </div>
            </div>
            {
                isMenuOpen && (
                    <div>
                        <ul className='md:hidden bg-white absolute w-full top-full left-0 flex flex-col px-2 pb-4'>
                            {navOption}
                        </ul>
                    </div>

                )
            }
        </nav>
            <div className='md:hidden'>
            {
                isMenuOpen? <div className='h-44'></div> : <div className='h-0'></div>
            }
            </div>
        </div>
        
    );
};

export default Header;