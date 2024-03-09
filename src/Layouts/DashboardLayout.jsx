import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const DashboardLayout = () => {
    return (
        <section className="max-h-screen min-h-screen min-w-full max-w-full bg-purple-50 flex flex-row">
            <Sidebar />
            <main className="w-full px-7 pt-0 pb-3 overflow-y-scroll">
                <Outlet />
            </main>
        </section>
    );
};

export default DashboardLayout;
