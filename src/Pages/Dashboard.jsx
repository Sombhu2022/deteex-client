import React, { useEffect } from "react";

import DashHeader from "../Components/dashboard/DashHeader";
import QuickAccess from "../Components/dashboard/QuickAccess";
import WorkerStatusCount from "../Components/dashboard/WorkerStatusCount";
import RecentlyAddedWorkers from "../Components/dashboard/RecentlyAddedWorkers";
import RequiredList from "../Components/dashboard/RequiredList";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/slices/authSlice";
import { getAllEmp } from "../redux/slices/employeeSlice";

const Dashboard = () => {

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllEmp())
    }, [])
    


    const {allUsers} = useSelector(selectUser)
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
