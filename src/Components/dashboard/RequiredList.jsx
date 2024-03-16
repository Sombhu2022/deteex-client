import React from "react";

import { Link } from "react-router-dom";

import { BiSolidPhone } from "react-icons/bi";
// import { MdDelete, MdEdit } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoBagSharp, IoCheckbox } from "react-icons/io5";
import { FaBuilding, FaLocationDot, FaUser } from "react-icons/fa6";

// import Searchbar from "../../Components/Searchbar";
import { requirement } from "../../json/requirement";
import dp from "../../assets/default_Profile_Pic.png";

const RequiredList = () => {




    return (
        <section id="requiredList">
            <header className="w-full flex items-center justify-between left-0 bg-purple-50 h-14 z-50">
                <div className="flex">
                    <h1 className="text-purple-800 font-semibold text-xl relative after:absolute after:h-[3px] after:w-[40%] after:rounded-full after:bg-purple-400 after:left-0 after:bottom-0">
                        Required List
                    </h1>
                </div>
            </header>
            <main className="px-2">
                <div className=" bg-purple-100 mt-4 rounded-md">
                    <div className=" mt-3 sticky top-[3.5rem]">
                        <div className="p-4 px-8 grid grid-cols-4 border-b bg-purple-200 rounded-md ">
                            <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
                                <FaBuilding />
                                Comapny Name
                            </p>
                            <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
                                <BiSolidPhone />
                                Requirements
                            </p>
                            <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
                                <IoBagSharp />
                                Company Type
                            </p>
                            <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
                                <IoCheckbox />
                                Location
                            </p>
                        </div>
                    </div>
                    {requirement.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="px-4 py-2 grid grid-cols-4 items-center odd:bg-purple-200 rounded-md"
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
                                            {item.cmpName}
                                        </p>
                                        <p className=" truncate text-slate-400 font-light w-[70%]">
                                            {item.cmpEmail}
                                        </p>
                                    </div>
                                </Link>
                                <div className="flex flex-col px-4 ">
                                    <div className="grid grid-cols-2 bg-purple-300 rounded-md">
                                        <p className="text-center">
                                            Designation
                                        </p>
                                        <p className="text-center">Capacity </p>
                                    </div>
                                    {item.designation.map((elm, ind) => {
                                        return (
                                            <div
                                                className="grid grid-cols-2 "
                                                key={ind}
                                            >
                                                <p className="text-center">
                                                    {elm.jobRole}
                                                </p>
                                                <p className="text-center">
                                                    {elm.capacity}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="flex items-center">
                                    {item.cmpType}
                                </p>
                                <p className="flex items-center gap-2">
                                    {item.loc}
                                </p>
                                {/* <div className="flex gap-3 items-center">
                                    <Link>
                                        <MdDelete className="size-5 transition-all text-red-500 hover:text-red-600" />
                                    </Link>
                                    <Link>
                                        <MdEdit className="size-5 transition-all text-green-500 hover:text-green-600" />
                                    </Link>
                                </div> */}
                            </div>
                        );
                    })}
                </div>
            </main>
        </section>
    );
};

export default RequiredList;
