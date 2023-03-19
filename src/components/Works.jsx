import React from 'react';
import code from '../assets/code.png';

const Works = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Projects
                    </p>
                    <p className='py-6 text-2xl'>Check out some of my most recent work</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${code})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Lets Connect
                            </span>
                            <p className='text-center'>
                                <li>Developed one to one video calling web application.</li>
                                <li>TechStack - ReactJs, ExpressJS, SocketIO</li>
                            </p>
                            <div className='pt-8 text-center'>
                                <a href='https://frabjous-pie-cab044.netlify.app/' target='_blank'
                                    rel='noreferrer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Open APP
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${code})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Smart Driving
                            </span>
                            <p className='text-center'>
                                <li>Developed Machine Learning Model to detect drowsiness and reduce distractions while driving.</li>
                                <li>TechStack - Python, Twilio Platform, Camera Module, Rasberry Pi, Pytts and FacialLandMark Library .</li>
                                <li><b>Won prize @13th ISEC, IIIT Jabalpur</b></li>
                            </p>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${code})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                My Portfolio
                            </span>
                            <p className='text-center'>
                                <li>Developed portfolio web application of mine using ReactJS.</li>
                            </p>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Open APP
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${code})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                My Shopping Cart
                            </span>
                            <p className='text-center'>
                                <li>An online shopping web application, where user can search and order different category of products.</li>
                                <li>TechStack: - Spring, ReactJS, MySQL</li>
                            </p>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${code})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Voice Assistance
                            </span>
                            <p className='text-center'>
                                <li>A CLI based application which responds according to the voice commands given by the user.</li>
                                <li>TechStack - Python.</li>
                            </p>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${code})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                StudentManagementSystem
                            </span>
                            <p className='text-center'>
                                <li>Web Application to manage and store student information.</li>
                                <li>TechStack: - HTML, CSS, JavaScript, PHP, MySQL.</li>
                                <li><b>This is my first web application &#128522;</b></li>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Works;