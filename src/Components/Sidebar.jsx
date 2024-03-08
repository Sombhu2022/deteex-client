import React, { useState } from "react";
import logo from "../assets/logo.png";
import profilePic from "../assets/default_Profile_Pic.png";
import { Link } from "react-router-dom";
// import { FaBarsStaggered } from "react-icons/fa6";
import { RiHomeFill, RiMailSendFill, RiUserAddFill } from "react-icons/ri";
import { FaBuilding, FaCircleUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
    // const location = useLocation().pathname;
    const [activeLocation, setActiveLocation] = useState("/dashboard");

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
                        className="w-24 aspect-square rounded-full select-none"
                    />
                    <h2 className="text-xl font-medium text-fuchsia-600">
                        John Stark
                    </h2>
                    <p className="text-sm font-light text-slate-400">
                        johnstark.own@gmail.com
                    </p>
                </div>
                <div className="url_container w-full">
                    <ul className="flex flex-col gap-1 w-full">
                        <Link
                            className={
                                activeLocation === "/dashboard"
                                    ? "text-fuchsia-600 font-medium bg-purple-50 rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal  w-full px-4 py-3 rounded-full hover:bg-[rgba(252,248,255,0.83)] transition-all"
                            }
                            to="/dashboard"
                            onClick={() => setActiveLocation("/dashboard")}
                        >
                            <li className="flex gap-2 items-center">
                                <RiHomeFill /> Dashboard
                            </li>
                        </Link>
                        <Link
                            className={
                                activeLocation === "/add-workers"
                                    ? "text-fuchsia-600 font-medium bg-purple-50 rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal w-full px-4 py-3 rounded-full hover:bg-[rgba(252,248,255,0.83)] transition-all"
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
                                    : "text-slate-400 font-normal w-full px-4 py-3 rounded-full hover:bg-[rgba(252,248,255,0.83)] transition-all"
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
                                activeLocation === "/companies"
                                    ? "text-fuchsia-600 font-medium bg-purple-50 rounded-full w-full px-4 py-3"
                                    : "text-slate-400 font-normal w-full px-4 py-3 rounded-full hover:bg-[rgba(252,248,255,0.83)] transition-all"
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
                                    : "text-slate-400 font-normal w-full px-4 py-3 rounded-full hover:bg-[rgba(252,248,255,0.83)] transition-all"
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
                <button className="flex flex-row items-center justify-center w-full bg-gradient-to-tl from-indigo-600 hover:from-fuchsia-600 to-fuchsia-600 hover:to-indigo-600 py-2 px-4 rounded-md text-white gap-2 font-medium transition-all">
                    <IoMdLogOut className="text-xl" /> Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
