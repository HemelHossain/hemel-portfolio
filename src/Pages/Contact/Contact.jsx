import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs.sendForm('service_06uj0m3', 'template_bpaxm2j', form.current, 'h5JXM7ncfGpDJbGml')
            .then((result) => {
                e.target.reset();
                alert('Email send Successfully')

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact' className='max-w-screen-lg mt-44 md:mt-52 mx-auto'>
            <div className='bg-gray-900 text-white text-center mx-auto pb-20 pt-10'>
                <h4 className='text-3xl'>Let's talk About Everything</h4>
                <p>Don't like forms? Send me an Email</p>
                <form ref={form} onSubmit={sendEmail} action="">
                    <input name="user_email" className='bg-white text-black rounded-2xl mt-4 w-[30%] py-1 px-2' type="email" placeholder='Enter Your Email' />
                    <input className='rounded-2xl ml-2 bg-white text-black px-4 py-1' value='Submit' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;