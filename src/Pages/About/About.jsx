import React from 'react';

const About = () => {
    return (
        <div id='about' className='mt-44 md:mt-52'>
            <p className='text-sm text-center'>Get to know More</p>
            <h4 className='text-3xl text-center font-semibold'>About Me</h4>
            <div className='flex md:flex-row flex-col gap-6 justify-center items-center mx-auto mt-8 md:mt-10'>
                <div className='text-center md:mx-0 mx-[10%]'>
                    <div className='flex items-center gap-5 md:flex-row flex-col justify-center'>
                        <div className='rounded-3xl border border-gray-400 w-[80%] p-3 py-3'>
                            <h5>Experience</h5>
                            <p className='text-sm'>1 Year</p>
                            <p className='text-sm'>Front End Development</p>
                        </div>
                        <div className='rounded-3xl border border-gray-400 w-[80%] py-3 px-2'>
                            <h5>Education</h5>
                            <p className='text-sm'>Computer Science and Engineering</p>
                            <p className='text-sm'>2023-2026</p>
                        </div>
                    </div>
                    <div>
                        <p className='md:w-[45vw] text-justify mt-3'>Front End Developer with 1+ years of experience developing web applications. Works hard and learn to create effective websites. Excited to work on javascript & React.js. I wanted to bring my skills to the table and collaborate on impactful projects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;