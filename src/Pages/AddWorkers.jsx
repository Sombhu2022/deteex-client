import React, { useState } from "react";

import { FiArrowRight } from "react-icons/fi";

import BasicInformation from "../Components/AddWorkers/BasicInformation";
import PersonalInformation from "../Components/AddWorkers/PersonalInformation";

const AddWorkers = () => {
    const [selectedStatus, setSelectedStatus] = useState("reserved");

    return (
        <section id="addWorkers" className="w-full">
            <header className="w-full flex items-center sticky top-0 left-0 bg-purple-50 h-14 z-50">
                <div className="flex">
                    <h1 className="text-purple-800 font-semibold text-xl relative after:absolute after:h-[3px] after:w-[40%] after:rounded-full after:bg-purple-400 after:left-0 after:bottom-0">
                        Add Workers
                    </h1>
                </div>
            </header>

            <form className="pt-5 pl-16">
                <PersonalInformation />
                <BasicInformation />

                <div className="flex my-3 mb-7 justify-between items-center container w-[610px]">
                    <div className="flex gap-2">
                        <select
                            name="status"
                            id="status"
                            className="h-10 outline-none bg-fuchsia-100 px-3 py-2 rounded-md border border-purple-200 w-40 text-purple-800 font-medium"
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            defaultValue="reserved"
                        >
                            <option value="active">Active</option>
                            <option value="ictive">Inactive</option>
                            <option value="reserved">Reserved</option>
                        </select>
                        {selectedStatus === "reserved" ? (
                            <input
                                type="text"
                                placeholder="Reserved for which company?"
                                className="h-10 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                            />
                        ) : (
                            ""
                        )}
                    </div>
                    <button className="flex flex-row items-center justify-center bg-gradient-to-tl from-indigo-600 hover:bg-indigo-700 to-fuchsia-600 hover:to-fuchsia-700 py-2 px-4 rounded-md text-white gap-2 font-medium transition-all">
                        {" "}
                        Add User <FiArrowRight />
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddWorkers;
