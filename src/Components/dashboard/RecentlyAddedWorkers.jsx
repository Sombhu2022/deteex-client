import React from "react";

import { MdDateRange } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { FaCheckSquare, FaKey } from "react-icons/fa";

const RecentlyAddedWorkers = () => {
    const recentWorkers = [
        {
            workerId: "dtx-2500",
            date: "12-02-2023",
            post: "manager",
            company: "TCS",
        },
        {
            workerId: "dtx-2501",
            date: "12-02-2023",
            post: "manager",
            company: "TCS",
        },
        {
            workerId: "dtx-2502",
            date: "12-02-2023",
            post: "manager",
            company: "TCS",
        },
        {
            workerId: "dtx-2503",
            date: "12-02-2023",
            post: "manager",
            company: "TCS",
        },
        {
            workerId: "dtx-2504",
            date: "12-02-2023",
            post: "manager",
            company: "TCS",
        },
        {
            workerId: "dtx-2505",
            date: "12-02-2023",
            post: "manager",
            company: "TCS",
        },
        {
            workerId: "dtx-2506",
            date: "12-02-2023",
            post: "manager",
            company: "TCS",
        },
        {
            workerId: "dtx-2507",
            date: "12-02-2023",
            post: "manager",
            company: "TCS",
        },
    ];
    return (
        <div className="bg-purple-100 px-5 py-3 w-[60%] rounded-md shadow-md">
            <h1 className="text-xl font-semibold text-purple-950 mb-4">
                Recently Hired Workers
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
                    <p>Post</p>
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
                        <div className="text-center">{item.workerId}</div>
                        <div className="text-center">{item.date}</div>
                        <div className="flex w-full items-center justify-center">
                            <div className="text-center"> {item.post}</div>
                        </div>
                        <div className="text-center">{item.company}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default RecentlyAddedWorkers;
