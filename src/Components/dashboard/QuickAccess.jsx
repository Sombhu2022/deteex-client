import React from "react";
import { Link } from "react-router-dom";

import { ImUsers } from "react-icons/im";
import { FaRupeeSign } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

const QuickAccess = () => {
    return (
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
    );
};

export default QuickAccess;
