import React from "react";

const About = () => {
    return (
        <div
            name="about"
            id="about"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                About
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold">
                            <p>
                                Hi. I am Atul Anand, nice to meet you. Please take a
                                look around.
                            </p>
                        </div>
                        <div>
                            <p>
                                {" "}
                                As a Full Stack Developer, I am proficient in both front-end and back-end development.
                                I am skilled in designing and implementing complex web applications that are secure, scalable, and highly responsive.
                                In terms of front-end development, I have expertise in HTML, CSS, JavaScript, and JavaScript framework React.
                                On the back-end, I am experienced in developing server-side applications using Java framework Spring.
                                I have good understanding of databases and data structures and can use SQL databases to store and manage data efficiently.
                                I am constantly learning and keeping up-to-date with the latest industry trends and technologies.


                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
