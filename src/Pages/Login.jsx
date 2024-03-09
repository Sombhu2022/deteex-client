import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/background1.jpeg";
import { FcGoogle } from "react-icons/fc";


function Login() {
  return (
    <div
      className={
        "flex flex-col justify-center items-center h-screen w-screen  bg-cover bg-top  "
      }
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className=" h-full w-full backdrop-blur-sm flex items-center justify-center">

      <div className=" bg-[#ffffffa3] border-2 border-purple-200 h-40 w-80 rounded-md flex justify-center items-center flex-col  z-10 backdrop-blur-sm gap-6">
        <h1 className=" text-purple-800 font-semibold my-3 text-xl relative before:absolute before:h-[2px] before:w-[50%] before:bg-purple-800 before:bottom-[-8px] before:left-[50%] before:translate-x-[-50%] before:rounded-full"> Login as Team Membar </h1>
        <Link className=" border-2 border-purple-600 py-2 px-3 rounded-full  bg-gradient-to-tl from-indigo-600 hover:bg-indigo-700 to-fuchsia-600 hover:to-fuchsia-700 ">
          <button className=" flex justify-center items-center font-medium  text-white" >
            <FcGoogle className="mr-2 size-8  px-1 rounded-full bg-slate-50"/>
            Continue With Google
            </button>
        </Link>
      </div>
      </div>
    </div>
  );  
}

export default Login;
