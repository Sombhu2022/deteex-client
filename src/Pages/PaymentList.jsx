import React, { useState } from "react";
import { data } from "../json/worker.js";
import dp from "../assets/default_Profile_Pic.png";

import { Link } from "react-router-dom";

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

import { FaUser } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoBagSharp } from "react-icons/io5";
import { IoCheckbox } from "react-icons/io5";

const PaymentList = () => {
    const [activeBtn, setActiveBtn] = useState("worker");

    return (
        <section id="paymentList" className="w-full">
            <header className="w-full flex items-center sticky top-0 left-0 bg-purple-50 h-14 z-50">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-purple-800 font-semibold text-xl relative after:absolute after:h-[3px] after:w-[40%] after:rounded-full after:bg-purple-400 after:left-0 after:bottom-0">
                        Payment Lists
                    </h1>

                    <div className="flex gap-2">
                        <button
                            className={
                                activeBtn === "worker"
                                    ? "bg-fuchsia-500"
                                    : "bg-fuchsia-100"
                            }
                            onClick={() => setActiveBtn("worker")}
                        >
                            Pay Worker
                        </button>
                        <button
                            className="bg-fuchsia-500 px-3 py-1 rounded-2xl"
                            onClick={() => setActiveBtn("teamMembers")}
                        >
                            Pay Team Member
                        </button>
                    </div>
                </div>
            </header>

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
                            <p className="flex items-center">{ele.location}</p>
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
        </section>
    );
};

export default PaymentList;
