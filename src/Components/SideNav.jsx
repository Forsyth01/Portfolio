import React from 'react';
import { HiOutlineMenuAlt4, HiOutlineMoon } from "react-icons/hi"
import { FaMoon, FaGripLines } from "react-icons/fa"
const SideNav = () => {
    const logo = "Dev.io"
    return (
        <div>
            <div className="flex justify-between items-center m-auto w-[90%]">
                <div className="">
                    <h1 className=" text-2xl">{logo}</h1>
                </div>
                <div className="flex items-center gap-8">
                    <i className="font-semibold text-2xl hover:cursor-pointer"><HiOutlineMoon /></i>
                    <i className=" text-4xl hover:cursor-pointer"><FaGripLines /></i>
                    {/* <i className="font-semibold text-4xl hover:cursor-pointer"><HiOutlineMenuAlt4/></i> */}
                </div>
            </div>
        </div>
    );
};

export default SideNav;