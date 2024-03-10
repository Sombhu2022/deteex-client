import React from "react";

import { data } from "../../json/worker.js";
import { Link, useParams } from "react-router-dom";

import { GoDotFill } from "react-icons/go";
import dp from "../../assets/default_Profile_Pic.png";
import back from "../../assets/background.jpeg";

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


function Profile() {
  const { id } = useParams();
  const item = data[id];
  return (
    <div className=" h-full w-full p-3">
      <div>
        <h1 className="font-semibold">{item.name}</h1>
        <p className="flex gap-1 ">
          <p
            className={`  ${
              item.status === "Active"
                ? "text-green-600 "
                : item.status === "Inactive"
                ? "text-red-600 "
                : item.status === "Reserved"
                ? "text-yellow-600"
                : ""
            }`}
          >
            &#9679;
          </p>
          <p className="text-slate-400">{item.status}</p>
        </p>
      </div>

      {/* profile page */}
      <div className="grid grid-cols-[2fr,3fr] w-[45rem] bg-purple-100 mt-[120px] gap-3 mb-44 py-4">
        <div className="left  flex flex-col gap-11 px-3">
          <div className="top relative flex flex-col gap-3 px-2">
            <div className="info flex flex-col items-center justify-center px-5 absolute bottom-[250px]">
              <img
                src={dp}
                alt=""
                className="w-52 h-52 aspect-square rounded-full border-4"
              />
              <p>ID:- {item.id}</p>
              <p className="w-full line-clamp-1 text-slate-500">{item.email}</p>
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
                <p className="font-medium"> Address :  <span className="font-light text-purple-900">{item.name}</span>{}</p>
                <p className="font-medium">Phone: <span className="font-light text-purple-900">{item.name}</span></p>
                <p className="font-medium">DOB: <span className="font-light text-purple-900">{item.name}</span> </p>
                <p className="font-medium">DOJ: <span className="font-light text-purple-900">{item.name}</span> </p>
                <p className="font-medium">Pan Number: <span className="font-light text-purple-900">{item.name}</span> </p>
                <p className="font-medium">Aadhar Number:  <span className="font-light text-purple-900">{item.name}</span></p>
            </div>
            <div>
                <h2 className="font-semibold border-b-2 border-purple-300 my-2">Bank Details: </h2>
                <p className="font-medium">Bank Name: <span className="font-light text-purple-900">{item.name}</span></p>
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
        {/* </div> */}
      </div>

      {/* profile section */}

      {/* <div className="border rounded-lg mt-32 grid grid-cols-[1fr,1.5fr] gap-6 px-4 py-6 bg-purple-100 w-[800px]">

        left part
        <div className="flex flex-col justify-between  px-3">

          <div className="w-[300px] flex flex-col items-center pb-5 border-b-2 border-purple-300 ">

            <div className=" h-60 w-60 border-4 rounded-full">
            <img src={dp} className="h-full w-full rounded-full" alt="" />
            </div>
            <p className="text-center">{item.id}</p>
            <p className="text-center truncate w-[100%] text-slate-500">{item.email}</p>
          </div>
          <div  className="">
            <p>job roal: {item.roal}</p>
            <p>present company: {item.pCompany}</p>
            <p>privious company: {item.prComnany}</p>
          </div>
          <div>
            <h1> Salary Details: </h1>
            <p>Grand Total: {item.tAmmount}</p>
            <p>Payble Ammount: {item.pAmmount}</p>
          </div>
          <div>
            <Link>
               <button> Edit </button>
            </Link>
            <Link>
               <button> Delete </button>
            </Link>
          </div>
        </div>

        right part
        <div className="border-l-2 border-purple-300">
            <div >
                <h2>Parsonal Details: </h2>
                <p> Address : {}</p>
                <p>Phone:</p>
                <p>DOB: </p>
                <p>DOJ: </p>
                <p>Pan Number: </p>
                <p>Aadhar Number: </p>
            </div>
            <div>
                <h2>Bank Details: </h2>
                <p>Bank Name:</p>
                <p>A/c Number: </p>
                <p>IFSC Code:</p>
                <p>MICR Code: </p>
                <p>Brunch Code: </p>
                <p>Brunch Name: </p>
            </div>
             <div>
              <p>PF A/c Number: </p>
              <p>ESI A/c Number: </p>
              <p>UAN Number: </p>
             </div>
        </div>
      </div> */}
    </div>
  );
}

export default Profile;
