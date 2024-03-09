import React from "react";

const WorkerStatusCount = () => {
    return (
        <div className="bg-purple-100 px-9 py-5 w-[40%] rounded-md shadow-md">
            <div className="flex items-center justify-between py-3 px-1 border-b-2 border-slate-400">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    <p>Active Workers</p>
                </div>
                <p className="font-medium">6,600</p>
            </div>
            <div className="flex items-center justify-between py-3 px-1 border-b-2 border-slate-400">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-600"></div>
                    <p>Inactive Workers</p>
                </div>
                <p className="font-medium">1,200</p>
            </div>
            <div className="flex items-center justify-between py-3 px-1 border-b-2 border-slate-400">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                    <p>Reserved Workers</p>
                </div>
                <p className="font-medium">200</p>
            </div>
        </div>
    );
};

export default WorkerStatusCount;
