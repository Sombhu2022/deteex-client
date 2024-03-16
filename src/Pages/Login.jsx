import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/background1.jpeg";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    // const dispatch = useDispatch();

    const logIn = () => {
        if (name && email && avatar) {
            console.log(name, email, avatar);
            // dispatch(googleSignUp({ name, email, avatar }));
        }
    };

    const handleSuccess = (credentialResponse) => {
        let decoded = jwtDecode(credentialResponse.credential);
        setAvatar(decoded.picture);
        setEmail(decoded.email);
        setName(`${decoded.given_name} ${decoded.family_name}`);
    };
    useEffect(() => {
        logIn();
    }, [avatar]);

    return (
        <div
            className={
                "flex flex-col justify-center items-center h-screen w-screen  bg-cover bg-top  "
            }
            style={{ backgroundImage: `url('${img}')` }}
        >
            <div className=" h-full w-full backdrop-blur-sm flex items-center justify-center">
                <div className=" bg-[#ffffffa3] border-2 border-purple-200 h-40 w-80 rounded-md flex justify-center items-center flex-col  z-10 backdrop-blur-sm gap-6">
                    <h1 className=" text-purple-800 font-semibold my-3 text-xl relative before:absolute before:h-[2px] before:w-[50%] before:bg-purple-800 before:bottom-[-8px] before:left-[50%] before:translate-x-[-50%] before:rounded-full">
                        {" "}
                        Login as Team Membar{" "}
                    </h1>
                    <Link className=" border-2 border-purple-600 py-2 px-3 rounded-r-[7px] rounded-l-full  bg-gradient-to-tl from-indigo-600 hover:bg-indigo-700 to-fuchsia-600 hover:to-fuchsia-700 ">
                        <button className=" flex justify-center items-center font-medium  text-white">
                            <FcGoogle className="mr-2 size-8  px-1 rounded-full bg-slate-50" />
                            <GoogleLogin
                                onSuccess={handleSuccess}
                                onError={() => {
                                    toast.error("Login Failed! Try again.");
                                }}
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
