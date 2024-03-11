import React from "react";

import { data } from "../../json/worker.js";
import { Link, useParams } from "react-router-dom";

import { GoDotFill } from "react-icons/go";
import dp from "../../assets/default_Profile_Pic.png";
import back from "../../assets/background.jpeg";

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


function Profile({id , item}) {
  // const item = data[id];
  return (
    <div className=" h-full w-full p-3">


      {/* profile page */}
      <div className="grid grid-cols-[2fr,3fr] w-[45rem] bg-purple-100 mt-[120px] gap-3 mb-44 py-4 border rounded-md">
        <div className="left  flex flex-col gap-11 px-3">
          <div className="top relative flex flex-col gap-3 px-2">
            <div className="info flex flex-col items-center justify-center px-5 absolute bottom-[220px]">
              <img
                src={dp}
                alt=""
                className="w-52 h-52 aspect-square rounded-full border-4"
              />
              <p>ID:- {item.id}</p>
              <p className="w-full line-clamp-2 text-slate-500">{item.email}</p>
              <p className="flex items-center justify-center gap-1 w-full line-clamp-1"><FaLocationDot/>  {item.name}</p>
            </div>
            <div className="pt-[200px]">
              <h2 className="border-b-2 border-purple-300 font-medium"> Job Details: </h2>
              <p className="font-medium">Job roal:  <span className="font-light text-purple-900">{item.roal}</span></p>
              <p className="font-medium">Present Company: <span className="font-light text-purple-900">{item.pCompany}</span></p>
              <p className="font-medium">Privious Company: <span className="font-light text-purple-900">{item.prComnany}</span></p>
            </div>
            <div>
              <h2 className="border-b-2 border-purple-300 font-medium"> Salary Details: </h2>
              <p className="font-medium">Grand Total: <span className="font-light text-purple-900">{item.tAmmount}</span></p>
              <p className="font-medium">Payble Ammount: <span className="font-light text-purple-900">{item.pAmmount}</span></p>
            </div>
          </div>
          <div className="bottom flex justify-around mx-3">
            {/* <Link className="border flex justify-center items-center w-20 gap-1"> */}
            <Link className="border px-4 py-2 w-28 flex justify-center items-center gap-1 bg-gradient-to-br from-green-500 hover:bg-green-600 to-green-700 hover:to-green-800 rounded-md text-white  font-medium transition-all">
            <MdEdit/>
            <button>Edit</button>
            </Link>
            <Link className="border px-4 py-2 w-28 flex justify-center items-center gap-1 bg-gradient-to-br from-red-500 hover:bg-red-600 to-red-700 hover:to-red-800 rounded-md text-white  font-medium transition-all">
            <MdDelete/>
            <button>Delete</button>
            </Link>
          </div>
        </div>
        <div className="right w-full p-4 border-l-2 border-purple-300">
        {/* <div className="border-l-2 border-purple-300"> */}
            <div >
                <h2 className="font-semibold border-b-2 border-purple-300 my-2">Parsonal Details: </h2>
                <p className="font-medium"> Address :  <span className="font-light text-purple-900 line-clamp-6 border ml-6 ">{item.email}</span>{}</p>
                <p className="font-medium">Phone: <span className="font-light text-purple-900">{item.name}</span></p>
                <p className="font-medium">DOB: <span className="font-light text-purple-900">{item.name}</span> </p>
                <p className="font-medium">DOJ: <span className="font-light text-purple-900">{item.name}</span> </p>
                <p className="font-medium">Pan Number: <span className="font-light text-purple-900">{item.name}</span> </p>
                <p className="font-medium">Aadhar Number:  <span className="font-light text-purple-900">{item.name}</span></p>
            </div>
            <div>
                <h2 className="font-semibold border-b-2 border-purple-300 my-2">Bank Details: </h2>
                <p className="font-medium">Bank Name: <span className="font-light text-purple-900">{item.email}</span></p>
                <p className="font-medium">A/c Number: <span className="font-light text-purple-900">{item.name}</span> </p>
                <p className="font-medium">IFSC Code: <span className="font-light text-purple-900">{item.name}</span></p>
                <p className="font-medium">MICR Code:  <span className="font-light text-purple-900">{item.name}</span></p>
                <p className="font-medium">Brunch Code:  <span className="font-light text-purple-900">{item.name}</span></p>
                <p className="font-medium">Brunch Name:  <span className="font-light text-purple-900">{item.name}</span></p>
              <p className="font-medium">PF A/c Number:  <span className="font-light text-purple-900">{item.name}</span></p>
              <p className="font-medium">ESI A/c Number: <span className="font-light text-purple-900">{item.name}</span> </p>
              <p className="font-medium">UAN Number:  <span className="font-light text-purple-900">{item.name}</span></p>
            </div>
             
             
        </div>
        
      </div>

  
    </div>
  );
}

export default Profile;
