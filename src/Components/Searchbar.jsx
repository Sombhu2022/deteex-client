import React from "react";

import { IoIosSearch } from "react-icons/io";

const Searchbar = () => {
    return (
        <div className="group flex items-center">
            <div className="flex h-10 pl-5 border-2 border-purple-200 rounded-l-md group-focus-within:border-purple-300 ">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search..."
                    className="bg-transparent outline-none text-purple-800 pr-5 w-[25rem]"
                />
            </div>
            <button
                title="Search"
                className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-purple-200 rounded-r-md bg-purple-800/[0.1]"
            >
                <IoIosSearch className="text-purple-800 text-xl " />
            </button>
        </div>
    );
};

export default Searchbar;
