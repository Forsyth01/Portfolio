import React from 'react';

const About = () => {
    return (
        <div>
            <div className="space-y-8">
                <p className="text-xl font-bol tracking-wider leading-6">
                    Making the Web more <br /> <span className='text-[#ED8554]'>Beautiful,</span>
                    <span className='text-[#764ABC]'> Inituitive</span> and <br /> <span className='text-[#F5EB6D]'> Accessible.</span>
                </p>
                <p className="text-justify">
                    I'm a highly skilled and experienced front-end developer with a passion for creating visually appealing and user-friendly websites. With [X] years of industry experience, I have a strong command of HTML, CSS, and JavaScript, along with expertise in modern frameworks like React and Vue.js. I am committed to delivering high-quality code, pixel-perfect designs, and seamless user experiences. Let's collaborate to bring your web project to life!
                </p>
            {/* Skills */}
            <div className="">
                <h1 className="text-xl font-bold leading-6"> <span className='text-[#F5EB6D]'>Tools</span> I use
                    For Better <span className='text-[#764ABC]'>Expereience</span> </h1>
            </div>
            </div>

        </div>
    );
};

export default About;