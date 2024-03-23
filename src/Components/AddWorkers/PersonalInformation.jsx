import React, { useState } from "react";

import { MdPhoto } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { FaCalendarAlt, FaPenFancy, FaUser } from "react-icons/fa";

import defaultDp from "../../assets/default_Profile_Pic.png";
import { HiLocationMarker } from "react-icons/hi";

const PersonalInformation = ({
	setName,
	setEmail,
	setBirthDay,
	setAvatar,
	setAddress,
	setLocation,
}) => {
	const [file, setFile] = useState(defaultDp);
	console.log(file);
	function fileHandle(event) {
		const image = event.target.files[0];

		if (image) {
			const readar = new FileReader();

			readar.addEventListener("load", function () {
				setFile(readar.result);
				setAvatar(readar.result);
			});

			readar.readAsDataURL(image);
		}
	}

	return (
		<>
			<div className='titleSection'>
				<h1 className='text-purple-800 font-semibold text-xl m-0'>
					Personal Information
				</h1>
				<p className='text-sm text-slate-500'>
					Fillup the personal informations of the Workers
				</p>
			</div>
			<div className='container w-[610px] border border-purple-200 px-4 py-3 rounded-md bg-fuchsia-100 mt-1'>
				<div className='grid grid-cols-[1.5fr,3fr] gap-x-10 gap-y-4 items-center content-center text-purple-800 pb-3 pt-2  px-2'>
					<div className='flex items-center gap-1 font-medium'>
						<FaUser /> Full Name{" "}
					</div>
					<input
						onChange={(e) => setName(e.target.value)}
						required
						type='text'
						placeholder='Full name'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
						/>
					{/* email  */}
					<div className='flex items-center gap-1 font-medium'>
						<IoMdMailOpen /> Email Address{" "}
					</div>
					<input
						onChange={(e) => setEmail(e.target.value)}
						required
						type='email'
						placeholder='Email Id'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none lowercase'
					/>
					<div className='flex items-center gap-1 font-medium'>
						<FaCalendarAlt /> Date of Birth
					</div>
					<input
						onChange={(e) => setBirthDay(e.target.value)}
						required
						type='date'
						placeholder='DD-MM-YYYY'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>

					<div className='flex items-center gap-1 font-medium'>
						<MdPhoto />
						Profile Photo{" "}
					</div>
					<div className='flex flex-row gap-2 items-start'>
						<img
							src={file}
							alt=''
							id='image'
							className='h-24 w-24 aspect-square rounded-full'
						/>
						<input
							required
							id='imageUpload'
							type='file'
							accept='image/*'
							placeholder='Enter the workers full name'
							className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none hidden'
							onChange={fileHandle}
						/>
						<div className='text-left py-2'>
							<label
								className='font-medium text-fuchsia-700 relative after:absolute after:h-[2px] after:w-full after:bg-fuchsia-700 after:bottom-0 after:left-0'
								htmlFor='imageUpload'
							>
								Click to Upload
							</label>
							<span>&nbsp; svg,png,jpg or gif (max 800px x 800px)</span>
						</div>
					</div>

					{/* address  */}
					<div className='flex items-center gap-1 font-medium'>
						<FaPenFancy /> Address
					</div>
					<textarea
                    onChange={(e)=>setAddress(e.target.value)}
                    required
                    placeholder='Address'
                    className='h-24 resize-none rounded-md border-purple-300 border p-2 outline-none focus:outline-none'
					/>
					<div className='flex items-center gap-1 font-medium'>
						<HiLocationMarker /> Location
					</div>
					<input
                    onChange={(e)=>setLocation(e.target.value)}
						required
						type='text'
						placeholder='Location'
						className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none'
					/>
				</div>
			</div>
		</>
	);
};

export default PersonalInformation;
