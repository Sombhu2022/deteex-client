import React, { useEffect } from "react";
import { companyList } from "../json/companyList";
import { Link } from "react-router-dom";
import { BiSolidPhone } from "react-icons/bi";
import { FaBuilding, FaLocationDot, FaUser } from "react-icons/fa6";
import { IoBagSharp, IoCheckbox } from "react-icons/io5";
import dp from "../assets/default_Profile_Pic.png";
import { MdDelete, MdEdit } from "react-icons/md";
import Searchbar from "../Components/Searchbar";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
	clearError,
	deleteCompany,
	getAllCompany,
	selectCompany,
} from "../redux/slices/companySlice";
import { toast } from "react-toastify";

const AllCompanies = () => {
	const dispatch = useDispatch();
	const { allCompany, cmpStatus } = useSelector(selectCompany);
	useEffect(() => {
		dispatch(getAllCompany());
		if (cmpStatus.deleteCompany == 'succeeded') {
			toast.success("Company deleted")
			dispatch(clearError())
		}
	}, [dispatch, cmpStatus.deleteCompany]);
	return (
		<section id='companies'>
			<header className='w-full flex items-center justify-between sticky top-0 left-0 bg-purple-50 h-14 z-50'>
				<div className='flex'>
					<h1 className='text-purple-800 font-semibold text-xl relative after:absolute after:h-[3px] after:w-[40%] after:rounded-full after:bg-purple-400 after:left-0 after:bottom-0'>
						Company List
					</h1>
				</div>
				<Searchbar />
			</header>
			<main className='px-2'>
				<div className=' bg-purple-100 mt-4 rounded-md'>
					<div className=' mt-3'>
						<div className='p-4 px-8 grid grid-cols-[1.5fr,repeat(4,1fr),0.5fr] border-b bg-purple-200 rounded-md'>
							<p className='flex gap-1 items-center text-purple-800 text-lg font-medium'>
								<FaBuilding />
								Comapny Name
							</p>
							<p className='flex gap-1 items-center text-purple-800 text-lg font-medium'>
								<BiSolidPhone />
								Contact No.
							</p>
							<p className='flex gap-1 items-center text-purple-800 text-lg font-medium'>
								<FaLocationDot />
								Location
							</p>
							<p className='flex gap-1 items-center text-purple-800 text-lg font-medium'>
								<IoBagSharp />
								Company Type
							</p>
							<p className='flex gap-1 items-center text-purple-800 text-lg font-medium'>
								<IoCheckbox />
								Total Workers
							</p>
							<p className='flex gap-1 items-center text-purple-800 text-lg font-medium'>
								Options
							</p>
						</div>
					</div>
					{allCompany &&
						allCompany.map((cmp) => {
							return (
								<div
									key={cmp._id}
									className='px-4 py-2 grid grid-cols-[1.5fr,repeat(4,1fr),0.5fr] items-center odd:bg-purple-200 rounded-md'
								>
									<Link className='flex justify-center items-center w-[300px] '>
										<div className='size-10 w-[15%]'>
											<img
												className='h-full aspect-square rounded-full w-auto object-contain'
												src={cmp.cmpLogo.url}
												alt={cmp.cmpName}
											/>
										</div>
										<div className='w-[85%] pr-5'>
											<p className='truncate capitalize'>{cmp.cmpName}</p>
											<p className=' truncate text-slate-400 font-light w-[70%]'>
												{cmp.cmpEmail}
											</p>
										</div>
									</Link>
									<p className='flex items-center'>{cmp.phoneNo}</p>
									<p className='flex items-center'>{cmp.address}</p>
									<p className='flex items-center'>{cmp.cmpType}</p>
									<p className='flex items-center gap-2'>
										90 <FaExternalLinkAlt />
									</p>
									<div className='flex gap-3 items-center'>
										<Link onClick={() => dispatch(deleteCompany(cmp._id))}>
											<MdDelete className='size-5 transition-all text-red-500 hover:text-red-600' />
										</Link>
										<Link>
											<MdEdit className='size-5 transition-all text-green-500 hover:text-green-600' />
										</Link>
									</div>
								</div>
							);
						})}
				</div>
			</main>
		</section>
	);
};

export default AllCompanies;
