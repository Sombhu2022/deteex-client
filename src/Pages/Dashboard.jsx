import React from "react";
import Searchbar from "../Components/Searchbar";
import { FaCaretRight } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";

const Dashboard = () => {
    const recentWorkers = [
        {
            workerId: "dtx-2500",
            date: "12-02-2023",
            status: "Active",
            company: "TCS",
        },
        {
            workerId: "dtx-2501",
            date: "12-02-2023",
            status: "Inactive",
            company: "TCS",
        },
        {
            workerId: "dtx-2502",
            date: "12-02-2023",
            status: "Inactive",
            company: "TCS",
        },
        {
            workerId: "dtx-2503",
            date: "12-02-2023",
            status: "Active",
            company: "TCS",
        },
        {
            workerId: "dtx-2504",
            date: "12-02-2023",
            status: "Reserved",
            company: "TCS",
        },
        {
            workerId: "dtx-2505",
            date: "12-02-2023",
            status: "Reserved",
            company: "TCS",
        },
        {
            workerId: "dtx-2506",
            date: "12-02-2023",
            status: "Active",
            company: "TCS",
        },
        {
            workerId: "dtx-2507",
            date: "12-02-2023",
            status: "Reserved",
            company: "TCS",
        },
    ];

    return (
        <section id="dashboard" className="w-full flex flex-col gap-8">
            <header className="flex items-center justify-between flex-row">
                <div className="userDetails flex items-start flex-col">
                    <h1 className="text-purple-800 font-semibold text-xl">
                        Welcome back, John...
                    </h1>
                    <small className="flex gap-1 items-center text-slate-500">
                        <FaCaretRight /> Manager
                    </small>
                </div>
                <Searchbar /> {/* search bar component  */}
            </header>

            {/* ----------------------------------------------------------------- */}

            <div className="quickAccessBar grid grid-cols-4 gap-8">
                {/* containers  */}
                <div className="bg-purple-100 h-24  rounded-md px-4 py-3 border border-fuchsia-100 shadow-md w-full flex flex-col justify-around">
                    <div className="flex w-full items-center justify-between text-sm text-slate-600">
                        <div className="flex items-center gap-1 font-medium">
                            <ImUsers />
                            Total Team Members
                        </div>
                        <Link to="/">
                            <FaExternalLinkAlt />
                        </Link>
                    </div>
                    <div className="pl-4">
                        <p className="text-3xl font-medium">500</p>
                    </div>
                </div>

                {/* containers  */}
                <div className="bg-purple-100 h-24  rounded-md px-4 py-3 border border-fuchsia-100 shadow-md w-full flex flex-col justify-around">
                    <div className="flex w-full items-center justify-between text-sm text-slate-600">
                        <div className="flex items-center gap-1 font-medium">
                            <ImUsers />
                            Total Workers
                        </div>
                        <Link to="/">
                            <FaExternalLinkAlt />
                        </Link>
                    </div>
                    <div className="pl-4">
                        <p className="text-3xl font-medium">500</p>
                    </div>
                </div>

                {/* containers  */}
                <div className="bg-purple-100 h-24  rounded-md px-4 py-3 border border-fuchsia-100 shadow-md w-full flex flex-col justify-around">
                    <div className="flex w-full items-center justify-between text-sm text-slate-600">
                        <div className="flex items-center gap-1 font-medium">
                            <MdMarkEmailRead />
                            Total Mails Sends
                        </div>
                        <Link to="/">
                            <FaExternalLinkAlt />
                        </Link>
                    </div>
                    <div className="pl-4">
                        <p className="text-3xl font-medium">500</p>
                    </div>
                </div>

                {/* containers  */}
                <div className="bg-purple-100 h-24  rounded-md px-4 py-3 border border-purple-100 shadow-md w-full flex flex-col justify-around">
                    <div className="flex w-full items-center justify-between text-sm text-slate-600">
                        <div className="flex items-center gap-1 font-medium">
                            <FaRupeeSign />
                            Total Payble Amount
                        </div>
                        <Link to="/">
                            <FaExternalLinkAlt />
                        </Link>
                    </div>
                    <div className="pl-4">
                        <p className="text-3xl font-medium">50,000</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-5">
                <div className="bg-purple-100 px-9 py-5 w-[40%] rounded-md shadow-md">
                    <div className="flex items-center justify-between py-3 px-1 border-b-2 border-slate-400">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-600"></div>
                            <p>Active Workers</p>
                        </div>
                        <p className="font-medium">6,600</p>
                    </div>
                    <div className="flex items-center justify-between py-3 px-1 border-b-2 border-slate-400">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-600"></div>
                            <p>Inactive Workers</p>
                        </div>
                        <p className="font-medium">1,200</p>
                    </div>
                    <div className="flex items-center justify-between py-3 px-1 border-b-2 border-slate-400">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                            <p>Reserved Workers</p>
                        </div>
                        <p className="font-medium">200</p>
                    </div>
                </div>

                {/* Recently added workers */}
                <div className="bg-purple-100 px-5 py-3 w-[60%] rounded-md shadow-md">
                    <h1 className="text-xl font-semibold text-purple-950 mb-4">
                        Recently Added Workers
                    </h1>

                    <div className="w-full grid grid-cols-4 bg-purple-300 px-3 py-2 rounded-sm items-center justify-center">
                        <div className="flex gap-1 items-center justify-center text-purple-950 text-base font-medium">
                            <FaKey />
                            <p>Worker ID</p>
                        </div>
                        <div className="flex gap-1 items-center justify-center text-purple-950 text-base font-medium">
                            <MdDateRange />
                            <p>Date</p>
                        </div>
                        <div className="flex gap-1 items-center justify-center text-purple-950 text-base font-medium">
                            <FaCheckSquare />
                            <p>Status</p>
                        </div>
                        <div className="flex gap-1 items-center justify-center text-purple-950 text-base font-medium">
                            <FaBuilding />
                            <p>Company</p>
                        </div>
                    </div>
                    {recentWorkers.map((item, index) => {
                        return (
                            <div
                                className="w-full grid grid-cols-4 px-3 py-2 rounded-sm "
                                key={index}
                            >
                                <div className="text-center">
                                    {item.workerId}
                                </div>
                                <div className="text-center">{item.date}</div>
                                <div className="flex w-full items-center justify-center">
                                    <div
                                        className={`flex justify-center gap-1 px-2 w-fit items-center rounded-md ${
                                            item.status === "Active"
                                                ? "text-green-600 bg-green-200"
                                                : item.status === "Inactive"
                                                ? "text-red-600 bg-red-200"
                                                : item.status === "Reserved"
                                                ? "text-yellow-600 bg-amber-100"
                                                : ""
                                        }`}
                                    >
                                        <div
                                            className={`h-[6px] w-[6px] rounded-full ${
                                                item.status === "Active"
                                                    ? "bg-green-600"
                                                    : item.status === "Inactive"
                                                    ? "bg-red-600"
                                                    : item.status === "Reserved"
                                                    ? "bg-yellow-600 "
                                                    : ""
                                            }`}
                                        ></div>
                                        {item.status}
                                    </div>
                                </div>
                                <div className="text-center">
                                    {item.company}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
