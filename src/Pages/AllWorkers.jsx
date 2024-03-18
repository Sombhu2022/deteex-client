import React, { useState } from "react";
import WorkerQuickAccess from "../Components/WorkerQuickAccess";
import { data } from "../json/worker.js";
import Searchbar from "../Components/Searchbar.jsx";

import icon1 from "../assets/workers/icon1.svg";
import icon2 from "../assets/workers/icon2.svg";
import icon3 from "../assets/workers/icon3.svg";
import icon4 from "../assets/workers/icon4.svg";
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

function AllWorkers() {
    const [heading, setHeading] = useState("All Workers");
    return (
        <div className={"h-full w-full"}>
            <div className="flex justify-between items-center mb-5 h-14 sticky top-0 left-0 bg-purple-50 z-50">
                <h1 className=" font-semibold text-lg">{heading} </h1>
                <Searchbar />
            </div>

            {/* catagory wise total workers */}
            <div className=" flex gap-5 px-2 justify-between items-center w-full ">
                <WorkerQuickAccess
                    icon={icon1}
                    heading={"All Workers"}
                    ammount={200}
                    index={1}
                    onClick={() => setHeading("All Workers")}
                />
                <WorkerQuickAccess
                    icon={icon2}
                    heading={"Inactive Workers"}
                    ammount={50}
                    index={2}
                    onClick={() => setHeading("Inactive Worker")}
                />
                <WorkerQuickAccess
                    icon={icon3}
                    heading={"Active Workers"}
                    ammount={180}
                    index={3}
                    onClick={() => setHeading("Active Worker")}
                />
                <WorkerQuickAccess
                    icon={icon4}
                    heading={"Resarve Workers"}
                    ammount={20}
                    index={4}
                    onClick={() => setHeading("Resarve Worker")}
                />
            </div>

            <div className="mt-8 border  bg-purple-100 p-2 rounded-lg">
                <div className="flex justify-between items-center border-b-2 border-b-purple-200 p-3">
                    <p className="font-semibold">{heading}</p>
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
                            Status
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
                                <Link
                                    className="flex justify-center items-center w-[300px] "
                                    to="/workers/0"
                                >
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
                                <p
                                    className={`flex justify-center gap-1 px-2 w-fit h-9 items-center rounded-md ${
                                        ele.status === "Active"
                                            ? "text-green-600 bg-green-200/[0.5] border border-green-600/[0.4]"
                                            : ele.status === "Inactive"
                                            ? "text-red-600 bg-red-200/[0.5]  border border-red-600/[0.4]"
                                            : ele.status === "Reserved"
                                            ? "text-yellow-600 bg-amber-100/[0.5] border border-yellow-600/[0.4]"
                                            : ""
                                    }`}
                                >
                                    &#9679; {ele.status}
                                </p>
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

            <div className="flex justify-between items-center my-6 pb-8">
                <p>
                    {" "}
                    <b>1-10</b> of 220
                </p>

                {/* buttons */}
                <p className="flex items-center gap-6 text-gray-800">
                    <Link>
                        <IoIosArrowBack className="bg-purple-100 size-9 p-2 border rounded-md transition-all hover:bg-purple-300 hover:scale-125 " />
                    </Link>

                    <Link>
                        <IoIosArrowForward className="bg-purple-100 size-9 p-2 border rounded-md transition-all hover:bg-purple-300 hover:scale-125 " />
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default AllWorkers;
