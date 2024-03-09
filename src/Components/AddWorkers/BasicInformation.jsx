import React from "react";

import { IoCall } from "react-icons/io5";
import { PiBankFill } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { RiHandbagFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";

const BasicInformation = () => {
    return (
        <>
            <div className="titleSection mt-4">
                <h1 className="text-purple-800 font-semibold text-xl m-0">
                    Personal Information
                </h1>
                <p className="text-sm text-slate-500">
                    Fillup the personal informations of the Workers
                </p>
            </div>
            <div className="container w-[610px] border border-purple-200 px-4 py-3 rounded-md bg-fuchsia-100 mt-1">
                <div className="grid grid-cols-[1.5fr,3fr] gap-x-10 gap-y-4 items-center content-center text-purple-800 pb-3 pt-2  px-2 w-full">
                    <div className="flex items-center gap-1 font-medium">
                        <IoCall /> Phone
                    </div>
                    <input
                        type="number"
                        maxLength={10}
                        placeholder="Contact Number"
                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                    />
                    {/* email  */}
                    <div className="flex items-center gap-1 font-medium">
                        <RiHandbagFill /> Job Role
                    </div>
                    <input
                        type="text"
                        placeholder="Job Role"
                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                    />
                    <div className="flex items-center gap-1 font-medium">
                        <MdLocationPin /> Previous Company
                    </div>
                    <input
                        type="text"
                        placeholder="Previous Company"
                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                    />
                    {/* email  */}
                    <div className="flex items-center gap-1 font-medium">
                        <FaAddressCard /> Aadhaar Number
                    </div>
                    <input
                        type="number"
                        maxLength={12}
                        placeholder="Addhar number"
                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                    />
                    <div className="flex items-center gap-1 font-medium">
                        <FaAddressCard /> Pan Number
                    </div>
                    <input
                        type="text"
                        placeholder="Pan Card Number"
                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                    />

                    {/* email  */}
                    <div className="flex items-center gap-1 font-medium">
                        <GiMoneyStack /> Granted Amount
                    </div>
                    <input
                        type="number"
                        placeholder="Granted Amount"
                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                    />
                    <div className="flex items-center gap-1 font-medium">
                        <GiMoneyStack /> Payble Amount
                    </div>
                    <input
                        type="number"
                        placeholder="Payble Amount"
                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                    />
                    {/* email  */}
                    <div className="flex items-center gap-1 font-medium">
                        <FaCalendarAlt /> Date of Join
                    </div>
                    <input
                        type="date"
                        placeholder="DD-MM-YYYY"
                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                    />
                    <div className="flex items-center gap-1 font-medium self-start pt-2">
                        <PiBankFill /> Bank Details
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <input
                            type="number"
                            name=""
                            id=""
                            placeholder="Account Number [0102561242562358]"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="IFSC Code"
                                className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none w-1/2"
                            />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="MICR Code"
                                className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none w-1/2"
                            />
                        </div>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Brunch Code"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Brunch Name"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Bank Name"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-1 font-medium self-start pt-2">
                        <PiBankFill /> PF Account Number
                    </div>
                    <input
                        type="text"
                        placeholder="PF Account Number"
                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                    />
                    <div className="flex items-center gap-1 font-medium self-start pt-2">
                        <PiBankFill /> ESI Account No.
                    </div>
                    <input
                        type="number"
                        placeholder="ESI Account Number"
                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                    />
                    <div className="flex items-center gap-1 font-medium self-start pt-2">
                        <PiBankFill /> UAN No.
                    </div>
                    <input
                        type="number"
                        placeholder="UAN Number"
                        className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                    />
                </div>
            </div>
        </>
    );
};

export default BasicInformation;
