import React from 'react';

const Project = () => {
    return (
        <div className='my-20'>
            <div className="">
                <h1 className="text-xl font-bold leading-6 my-10">
                    Take a Look at some of my <span className='text-[#ED8554]'> Projects.</span>
                </h1>
                <div className="space-y-10">
                    <div className="space-y-4">
                        <div className="bg-[#D9D9D9] h-[384px] w-full rounded-xl"></div>
                        <h1 className="text-[#ED8554] text-[34px] font-bold">01</h1>
                        <h1 className="text-text-[#764ABC] text-[34px] font-light">The Hand</h1>
                        <p className="tracking-wider leading-6 font-light text-sm">I am committed to delivering high-quality code, pixel-perfect designs, and seamless user experiences. Let's collaborate to bring your web project to life!</p>
                        <div className="flex gap-5 font-bold text-[#ED8554]">
                            <a href="" className="">Github</a>
                            <a href="" className="">LiveSite</a>
                        </div>
                    </div>
                    {/* project 2 */}
                    <div className="space-y-4">
                        <div className="bg-[#D9D9D9] h-[384px] w-full rounded-xl"></div>
                        <h1 className="text-[#ED8554] text-[34px] font-bold">02</h1>
                        <h1 className="text-[34px] font-light">Extraction App</h1>
                        <p className="tracking-wider leading-6 font-light text-sm">I am committed to delivering high-quality code, pixel-perfect designs, and seamless user experiences. Let's collaborate to bring your web project to life!</p>
                        <div className="flex gap-5 font-bold text-[#ED8554]">
                            <a href="" className="">Github</a>
                            <a href="" className="">LiveSite</a>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="space-y-4">
                        <div className="bg-[#D9D9D9] h-[384px] w-full rounded-xl"></div>
                        <h1 className="text-[#ED8554] text-[34px] font-bold">03</h1>
                        <h1 className="text-[34px] font-light">Okoeguale App</h1>
                        <p className="tracking-wider leading-6 font-light text-sm">I am committed to delivering high-quality code, pixel-perfect designs, and seamless user experiences. Let's collaborate to bring your web project to life!</p>
                        <div className="flex gap-5 font-bold text-[#ED8554]">
                            <a href="" className="">Github</a>
                            <a href="" className="">LiveSite</a>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Project;