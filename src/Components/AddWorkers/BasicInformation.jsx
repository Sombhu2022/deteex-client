import React, { useState } from "react";

import { IoCall } from "react-icons/io5";
import { PiBankFill } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { RiHandbagFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";

const BasicInformation = ({
    setPhoneNo,
    setJobRole,
    setPreviousCMP,
    setAndharNo,
    setPanNo,
    setGrantedAmount,
    setPaybleAmount,
    setDateOfJoin,
    setBankDetails,
    setPFaccountNo,
    setESIaccountNo,
    setUANno,
}) => {

    const handleInputChange = (event) => {
        const { value } = event.target;
        // Convert string date to Date object
        const dateObject = new Date(value);
        setDateOfJoin(dateObject);
    };

    const handleBankDetailsChange = (event) => {
        const { name, value } = event.target;
        setBankDetails(prevBankDetails => ({
            ...prevBankDetails,
            [name]: value
        }));
    };

	

	return (
		<>
			<div className='titleSection mt-4'>
				<h1 className='text-purple-800 font-semibold text-xl m-0'>
					Basic Information
				</h1>
				<p className='text-sm text-slate-500'>
					Fillup the basic informations of the Workers
				</p>
			</div>
			<div className='container w-[610px] border border-purple-200 px-4 py-3 rounded-md bg-fuchsia-100 mt-1'>
				<div className='grid grid-cols-[1.5fr,3fr] gap-x-10 gap-y-4 items-center content-center text-purple-800 pb-3 pt-2  px-2 w-full'>
					<div className='flex items-center gap-1 font-medium'>
						<IoCall /> Phone
					</div>
					<input
						type='number'
						onChange={(e)=>setPhoneNo(e.target.value)}
						placeholder='Contact Number'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>
					{/* email  */}
					<div className='flex items-center gap-1 font-medium'>
						<RiHandbagFill /> Job Role
					</div>
					<input
                    onChange={(e)=>setPhoneNo(e.target.value)}
						type='text'
						placeholder='Job Role'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>
					<div className='flex items-center gap-1 font-medium'>
						<MdLocationPin /> Previous Company
					</div>
					<input
                    onChange={(e)=>setPreviousCMP(e.target.value)}
						type='text'
						placeholder='Previous Company'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>
					{/* email  */}
					<div className='flex items-center gap-1 font-medium'>
						<FaAddressCard /> Aadhaar Number
					</div>
					<input
						type='number'
						onChange={(e)=>setAdharNumber(e.target.value)}
						placeholder='Addhar number'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>
					<div className='flex items-center gap-1 font-medium'>
						<FaAddressCard /> Pan Number
					</div>
					<input
                    onChange={(e)=>setPanNo(e.target.value)}
						type='text'
						placeholder='Pan Card Number'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>

					{/* email  */}
					<div className='flex items-center gap-1 font-medium'>
						<GiMoneyStack /> Granted Amount
					</div>
					<input
                    onChange={(e)=>setGrantedAmount(e.target.value)}
						type='number'
						placeholder='Granted Amount'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>
					<div className='flex items-center gap-1 font-medium'>
						<GiMoneyStack /> Payble Amount
					</div>
					<input
                    onChange={(e)=>setPaybleAmount(e.target.value)}
						type='number'
						placeholder='Payble Amount'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>
					{/* email  */}
					<div className='flex items-center gap-1 font-medium'>
						<FaCalendarAlt /> Date of Join
					</div>
					<input
						onChange={handleInputChange}
						type='date'
						placeholder='DD-MM-YYYY'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>
					<div className='flex items-center gap-1 font-medium self-start pt-2'>
						<PiBankFill /> Bank Details
					</div>
					<div className='flex w-full flex-col gap-2'>
						<input
                          onChange={handleBankDetailsChange}
							type='number'
                          
                            name="accountNo"
							id=''
							placeholder='Account Number [0102561242562358]'
							className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
						/>
						<div className='flex gap-2'>
							<input
								type='text'
                                name="IFSC"
								id=''
								placeholder='IFSC Code'
								className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none w-1/2'
							/>
							<input
								type='text'
                                name="MICR"
								id=''
								placeholder='MICR Code'
								className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none w-1/2'
							/>
						</div>
						<input
							type='text'
                            name="branchCode"
							id=''
							placeholder='Brunch Code'
							className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
						/>
						<input
							type='text'
                            name="branchName"
							id=''
							placeholder='Brunch Name'
							className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
						/>
						<input
							type='text'
                            name="bankName"
							id=''
							placeholder='Bank Name'
							className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
						/>
					</div>
					<div className='flex items-center gap-1 font-medium self-start pt-2'>
						<PiBankFill /> PF Account Number
					</div>
					<input
                     onChange={(e)=>setPFaccountNo(e.target.value)}
						type='text'
						placeholder='PF Account Number'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>
					<div className='flex items-center gap-1 font-medium self-start pt-2'>
						<PiBankFill /> ESI Account No.
					</div>
					<input
                     onChange={(e)=>setESIaccountNo(e.target.value)}
						type='number'
						placeholder='ESI Account Number'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>
					<div className='flex items-center gap-1 font-medium self-start pt-2'>
						<PiBankFill /> UAN No.
					</div>
					<input
                     onChange={(e)=>setUANno(e.target.value)}
						type='number'
						placeholder='UAN Number'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>
				</div>
			</div>
		</>
	);
};

export default BasicInformation;
