import React from "react";

import { FaCaretRight } from "react-icons/fa6";

import Searchbar from "../Searchbar";

const DashHeader = () => {
    return (
        <header className="flex items-center justify-between flex-row sticky top-0 h-14 bg-purple-50 z-50">
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
    );
};

export default DashHeader;
