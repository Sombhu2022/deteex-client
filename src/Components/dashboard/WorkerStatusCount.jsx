import React from "react";
import { useSelector } from "react-redux";
import { selectEmployee } from "../../redux/slices/employeeSlice";

const WorkerStatusCount = () => {
	const { allEmp } = useSelector(selectEmployee);

	const countStatusWise = (statusOfEmp) => {
		let reservedWorkersCount = 0;
		allEmp.forEach((worker) => {
			if (worker.statusOfWorker === statusOfEmp) {
				reservedWorkersCount++;
			}
		});
		return reservedWorkersCount;
	};

    let activeEmpCount = countStatusWise('active');
    let InactiveEmpCount = countStatusWise('inactive');
    let reservedEmpCount = countStatusWise('reserved');




	return (
		<div className='bg-purple-100 px-9 py-5 w-[40%] rounded-md shadow-md'>
			<div className='flex items-center justify-between py-3 px-1 border-b-2 border-slate-400'>
				<div className='flex items-center gap-2'>
					<div className='h-2 w-2 rounded-full bg-green-600'></div>
					<p>Active Workers</p>
				</div>
				<p className='font-medium'>{activeEmpCount}</p>
			</div>
			<div className='flex items-center justify-between py-3 px-1 border-b-2 border-slate-400'>
				<div className='flex items-center gap-2'>
					<div className='h-2 w-2 rounded-full bg-red-600'></div>
					<p>Inactive Workers</p>
				</div>
				<p className='font-medium'>{InactiveEmpCount}</p>
			</div>
			<div className='flex items-center justify-between py-3 px-1 border-b-2 border-slate-400'>
				<div className='flex items-center gap-2'>
					<div className='h-2 w-2 rounded-full bg-yellow-400'></div>
					<p>Reserved Workers</p>
				</div>
				<p className='font-medium'>{reservedEmpCount}</p>
			</div>
		</div>
	);
};

export default WorkerStatusCount;
