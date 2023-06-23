import React, { useState } from 'react';
import { HiOutlineMenuAlt4, HiOutlineMoon } from "react-icons/hi"
import { FaMoon, FaGripLines } from "react-icons/fa"
const SideNav = () => {
    const [open, setOpen] = useState(false)
    const logo = "Dev.io"
    function handleOpen() {
        setOpen(!open)
    }
    return (
        <div className={open ? 'bg-red-900 fixed w-full py-5 h-[100vh]' : "py-5"}  >
            <div className="flex justify-between items-center m-auto w-[90%]">
                <div className="">
                    <h1 className=" text-2xl">{logo}</h1>
                </div>
                <div className="flex items-center gap-8">
                    {!open && <i className="font-semibold text-2xl hover:cursor-pointer"><HiOutlineMoon /></i>}
                    {!open && <i className=" text-4xl hover:cursor-pointer" onClick={handleOpen}><FaGripLines /></i>}
                    {open && <p className=" text-4xl font-semibold hover:cursor-pointer" onClick={handleOpen}>X</p>}
                    {/* <i className="font-semibold text-4xl hover:cursor-pointer"><HiOutlineMenuAlt4/></i> */}
                </div>
            </div>
            {open && <div className="flex flex-col justify-center h-[80vh]">
                <div className="text-center space-y-10 py-10">
                    <h1 className="hover:bg-gray-600 p-3">Home </h1>
                    <h1 className="hover:bg-gray-600 p-3">About</h1>
                </div>
            </div>}
        </div>
    );
};

export default SideNav;