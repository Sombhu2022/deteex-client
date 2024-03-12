import React from "react";

import DashHeader from "../Components/dashboard/DashHeader";
import QuickAccess from "../Components/dashboard/QuickAccess";
import WorkerStatusCount from "../Components/dashboard/WorkerStatusCount";
import RecentlyAddedWorkers from "../Components/dashboard/RecentlyAddedWorkers";
import RequiredList from "../Components/dashboard/RequiredList";

const Dashboard = () => {
    return (
        <section id="dashboard" className="w-full flex flex-col gap-8">
            <DashHeader />
            <QuickAccess />
            <div className="flex gap-5 px-2">
                <WorkerStatusCount />
                <RecentlyAddedWorkers />
            </div>
            <RequiredList />
        </section>
    );
};

export default Dashboard;
