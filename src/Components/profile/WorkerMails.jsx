import React from 'react'


import { FaUser } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoBagSharp } from "react-icons/io5";
import { IoCheckbox } from "react-icons/io5";
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";

import dp from "../../assets/default_Profile_Pic.png";
import mail from "../../assets/mail.svg"

function WorkerMails({ item }) {
  return (
    <div className=" w-[65rem] ml-3  odd:bg-purple-200  bg-purple-100 p-2 rounded-lg border">
     
    <div className="p-4 px-8 grid grid-cols-[1.5fr,repeat(3,1fr)] border bg-purple-200 rounded-md">
      <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
        <FaUser />
        Mails
      </p>
      <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
        <BiSolidPhone />
        Title
      </p>
      <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
        <FaLocationDot />
        Date
      </p>
      <p className="flex gap-1 items-center text-purple-800 text-lg font-medium">
        <IoBagSharp />
        Company
      </p>
    </div>
           {

    item.mails.map((ele , index)=>{
              return(

        <div key={index} className="p-4 grid grid-cols-[1.5fr,repeat(3,1fr)] items-center odd:bg-purple-200 rounded-md">

          <div className="flex justify-center items-center w-[300px] gap-1 ">
           
          <div className="size-12 w-[15%]">
                    <img
                      className="h-full aspect-square rounded-full w-auto object-contain"
                      src={mail}
                      alt=""
                    />
                  </div>
                  <div className="w-[85%] pr-5">
                    <p className="truncate capitalize">{item.email}</p>
                    <p className="truncate text-slate-400 font-light">
                      {ele.subject}
                    </p>
                  </div>
          </div>
          
          <p className="flex items-center">{ele.title}</p>
          <p className="flex items-center">{ele.date}</p>
          <p className="flex items-center  gap-1 capitalize">
                    <img
                      className="h-full aspect-square rounded-full object-contain size-10 w-[13%] "
                      src={dp}
                      alt=""
                    />
                

                  {ele.company}
                </p>
        
        </div>
              )
            })
           }
  </div>
  )
}

export default WorkerMails