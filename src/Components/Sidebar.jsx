import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { IoMdLogOut } from "react-icons/io";
import {
    FaBuilding,
    FaBuildingCircleCheck,
    FaCircleUser,
} from "react-icons/fa6";
import { RiHomeFill, RiMailSendFill, RiUserAddFill } from "react-icons/ri";

import logo from "../assets/logo.png";
import profilePic from "../assets/default_Profile_Pic.png";
import { logoutUser, selectUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
    const location = useLocation().pathname;
    const [activeLocation, setActiveLocation] = useState(location);
    const { isAuthenticated } = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div className="w-[14rem] bg-white h-screen px-7 py-2 border border-purple-100 shadow-md flex flex-col justify-between items-center">
            <div className="flex flex-col gap-7 w-full">
                <div className="flex w-full justify-between items-center">
                    <img src={logo} alt="logo" />
                    {/* <FaBarsStaggered className="text-2xl text-purple-600" /> */}
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <img
                        src={profilePic}
                        alt="name"
                        className="w-24 aspect-square rounded-full select-none mb-1"
                    />
                    <h2 className="text-xl font-medium text-purple-800">
                        John Stark
                    </h2>
                    <p className="text-sm font-light text-slate-400 w-full truncate">
                        johnstark.own@gmail.com
                    </p>
                </div>
                <div className="url_container w-full">
                    <ul className="flex flex-col gap-1 w-full">
                        <Link
                            className={
                                activeLocation === "/"
                                    ? "text-fuchsia-600 font-medium bg-purple-50 rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal  w-full px-4 py-3 rounded-full hover:bg-[rgb(252,248,255)] transition-all"
                            }
                            to="/"
                            onClick={() => setActiveLocation("/")}
                        >
                            <li className="flex gap-2 items-center">
                                <RiHomeFill /> Dashboard
                            </li>
                        </Link>
                        <Link
                            className={
                                activeLocation === "/add-workers"
                                    ? "text-fuchsia-600 font-medium bg-purple-50 rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal w-full px-4 py-3 rounded-full hover:bg-[rgb(252,248,255)] transition-all"
                            }
                            to="/add-workers"
                            onClick={() => setActiveLocation("/add-workers")}
                        >
                            <li className="flex gap-2 items-center">
                                <RiUserAddFill /> Add workers
                            </li>
                        </Link>
                        <Link
                            className={
                                activeLocation === "/workers"
                                    ? "text-fuchsia-600 font-medium bg-purple-50 rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal w-full px-4 py-3 rounded-full hover:bg-[rgb(252,248,255)] transition-all"
                            }
                            to="/workers"
                            onClick={() => setActiveLocation("/workers")}
                        >
                            <li className="flex gap-2 items-center">
                                <FaCircleUser /> Workers
                            </li>
                        </Link>
                        <Link
                            className={
                                activeLocation === "/add-company"
                                    ? "text-fuchsia-600 font-medium bg-purple-50 rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal w-full px-4 py-3 rounded-full hover:bg-[rgb(252,248,255)] transition-all"
                            }
                            to="/add-company"
                            onClick={() => setActiveLocation("/add-company")}
                        >
                            <li className="flex gap-2 items-center">
                                <FaBuildingCircleCheck /> Add Company
                            </li>
                        </Link>
                        <Link
                            className={
                                activeLocation === "/companies"
                                    ? "text-fuchsia-600 font-medium bg-purple-50 rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal w-full px-4 py-3 rounded-full hover:bg-[rgb(252,248,255)] transition-all"
                            }
                            to="/companies"
                            onClick={() => setActiveLocation("/companies")}
                        >
                            <li className="flex gap-2 items-center">
                                <FaBuilding /> Companies
                            </li>
                        </Link>
                        <Link
                            className={
                                activeLocation === "/mail-lists"
                                    ? "text-fuchsia-600 font-medium bg-purple-50 rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal w-full px-4 py-3 rounded-full hover:bg-[rgb(252,248,255)] transition-all"
                            }
                            to="mail-lists"
                            onClick={() => setActiveLocation("/mail-lists")}
                        >
                            <li className="flex gap-2 items-center">
                                <RiMailSendFill /> Mails
                            </li>
                        </Link>
                    </ul>
                </div>
                <hr className="border border-slate-200" />
            </div>
            <div className="w-full pb-10 border-t-2">
                <Link
                    onClick={handleLogout}
                    className="flex flex-row items-center justify-center w-full bg-gradient-to-tl from-indigo-600 hover:bg-indigo-700 to-fuchsia-600 hover:to-fuchsia-700 py-2 px-4 rounded-md text-white gap-2 font-medium transition-all"
                >
                    <IoMdLogOut className="text-xl" /> Logout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
