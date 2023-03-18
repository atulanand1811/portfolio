import React from 'react'

function Experience() {
    return (
        <div
            name="experience"
            id="experience"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                Work Experience
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-xl font-bold">
                            <p>
                                Cognizant - Software Engineer
                            </p>
                            <i className="sm:text-right text-sm font-italic">Mar 2021 - Present</i>
                        </div>
                        <div>
                            <p>
                                <p className="font-bold">Metlife- Japan</p>
                                <li>Role - Java FSE</li>
                                <li>Responsibility - Developing Microservice architecture application.</li>
                                <li>TechStack - Java, Spring, JPA, ReactJS</li>
                            </p>
                        </div>
                        <div className="sm:text-right text-xl font-bold">
                           
                        </div>
                        <div>
                            <p>
                                <p className="font-bold">Metlife- US</p>
                                <li>Role - Java FSE</li>
                                <li>Responsibility - Bug Fixing and Code Deployment.</li>
                                <li>TechStack - ReactJS, Groovy, MongoDB</li>
                            </p>
                        </div>
                        <div className="sm:text-right text-xl font-bold">
                            <p>
                                Acupace Technology - Frontend Developer - Intern
                            </p>
                            <i className="sm:text-right text-sm font-italic">May 2020 - Jul 2020</i>
                        </div>
                        <div>
                            <p>
                                <li>Role - UI Developer</li>
                                <li>Responsibility - UI Development for Video Conferencing Application.</li>
                                <li>TechStack - Ionic</li>
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Experience;