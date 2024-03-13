import React, { useState } from "react";
import { data } from "../json/worker.js";
import Searchbar from "../Components/Searchbar.jsx";

import dp from "../assets/default_Profile_Pic.png";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

import { FaUser } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoBagSharp } from "react-icons/io5";
import { IoCheckbox } from "react-icons/io5";

function TeamMembers() {
    return (
        <div className="h-full w-full">
            <div className="flex justify-between items-center mb-5 h-14 sticky top-0 left-0 bg-purple-50 z-50">
                <h1 className=" font-semibold text-lg">Team Members </h1>
                <Searchbar />
            </div>

            {/* catagory wise total workers */}

            <div className="mt-8 border  bg-purple-100 p-2 rounded-lg">
                <div className="flex justify-between items-center border-b-2 border-b-purple-200 p-3">
                    <p className="font-semibold">Team Members</p>
                    <p>
                        {" "}
                        <b className="text-purple-600">1-10</b> of 200{" "}
                    </p>
                </div>

                {/* workers container */}
                <div className=" mt-3">
                    <div className="p-4 px-8 grid grid-cols-[1.5fr,repeat(4,1fr),0.5fr] border bg-purple-200 rounded-md">
                        <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
                            <FaUser />
                            Name
                        </p>
                        <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
                            <BiSolidPhone />
                            Phone
                        </p>
                        <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
                            <FaLocationDot />
                            Location
                        </p>
                        <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
                            <IoBagSharp />
                            Company
                        </p>
                        <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
                            <IoCheckbox />
                            Position
                        </p>
                        <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
                            Options
                        </p>
                    </div>
                    {data.map((ele, index) => {
                        return (
                            <div
                                key={index}
                                className="p-4 grid grid-cols-[1.5fr,repeat(4,1fr),0.5fr] items-center odd:bg-purple-200 rounded-md"
                            >
                                <Link className="flex justify-center items-center w-[300px] ">
                                    <div className="size-10 w-[15%]">
                                        <img
                                            className="h-full aspect-square rounded-full w-auto object-contain"
                                            src={dp}
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[85%] pr-5">
                                        <p className="truncate capitalize">
                                            {ele.name}
                                        </p>
                                        <p className=" truncate text-slate-400 font-light">
                                            {ele.email}
                                        </p>
                                    </div>
                                </Link>
                                <p className="flex items-center">{ele.phone}</p>
                                <p className="flex items-center">
                                    {ele.location}
                                </p>
                                <p className="flex items-center  gap-1 capitalize">
                                    <img
                                        className="h-full aspect-square rounded-full object-contain size-10 w-[13%] "
                                        src={dp}
                                        alt=""
                                    />

                                    {ele.company}
                                </p>
                                <p className="flex gap-3 items-center">HR</p>
                                <div className="flex gap-3 items-center">
                                    <Link>
                                        <MdDelete className="size-5 transition-all text-red-500 hover:text-red-600" />
                                    </Link>
                                    <Link>
                                        <MdEdit className="size-5 transition-all text-green-500 hover:text-green-600" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="h-12 w-full"></div>
        </div>
    );
}

export default TeamMembers;
