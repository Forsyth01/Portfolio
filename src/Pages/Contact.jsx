import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold leading-8 tracking-wide">
                Let's discuss on how we <br />
                can work
                <span className='text-[#764ABC]'> Together</span> ?
            </h1>
            <div className="space-y-6 py-16">
                <div className="">
                    <h1 className="font-semibold">Email:</h1>
                    <p className="text-sm font-light">forsythokoeguale01@gmail.com</p>
                </div>
                <div className="">
                    <h1 className="font-semibold">Phone:</h1>
                    <p className="text-sm font-light">+234 9061 3827 27</p>
                </div>
                <div className="">
                    <h1 className="font-semibold">Connect via:</h1>
                    <i className="text-sm font-light">Linkedin</i>
                    <i className="text-sm font-light">Github</i>
                </div>
            </div>
        </div>
    );
};

export default Contact;