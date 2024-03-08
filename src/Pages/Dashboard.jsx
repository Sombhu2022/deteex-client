import React from "react";
import Searchbar from "../Components/Searchbar";

const Dashboard = () => {
    return (
        <section id="dashboard" className="w-full px-3 py-2">
            <header className="flex items-center justify-between flex-row">
                <div className="userDetails flex items-start flex-col">
                    <h1 className="text-purple-800 font-semibold">
                        Welcome back, John...
                    </h1>
                    <small>Manager</small>
                </div>
                <Searchbar />
            </header>
        </section>
    );
};

export default Dashboard;
