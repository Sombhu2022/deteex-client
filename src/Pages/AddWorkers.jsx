import React, { useEffect, useState } from "react";

import { FiArrowRight } from "react-icons/fi";

import BasicInformation from "../Components/AddWorkers/BasicInformation";
import PersonalInformation from "../Components/AddWorkers/PersonalInformation";
import { useDispatch, useSelector } from "react-redux";
import {
    addEmployee,
    clearError,
    selectEmployee,
} from "../redux/slices/employeeSlice";
import { toast } from "react-toastify";
import { getAllCompany, selectCompany } from "../redux/slices/companySlice";

const AddWorkers = () => {
    const dispatch = useDispatch();
    const { empStatus } = useSelector(selectEmployee);
    const { allCompany } = useSelector(selectCompany);

    const [empName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [avatar, setAvatar] = useState("");
    const [address, setAddress] = useState("");
    const [location, setLocation] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [jobRole, setJobRole] = useState("");
    const [previousCMP, setPreviousCMP] = useState("");
    const [andharNo, setAndharNo] = useState("");
    const [panNo, setPanNo] = useState("");
    const [grantedAmount, setGrantedAmount] = useState();
    const [paybleAmount, setPaybleAmount] = useState();
    const [dateOfJoin, setDateOfJoin] = useState(new Date("2024-03-21"));
    const [bankDetails, setBankDetails] = useState({
        accountNo: "",
        IFSC: "",
        MICR: "",
        branchCode: "",
        branchName: "",
        bankName: "",
    });
    const [PFaccountNo, setPFaccountNo] = useState("");
    const [ESIaccountNo, setESIaccountNo] = useState("");
    const [UANno, setUANno] = useState("");
    const [statusOfWorker, setStatusOfWorker] = useState("reserved");
    const [reservedFor, setReservedFor] = useState("");

    const handleAddWorker = (e) => {
        console.log("submit");
        e.preventDefault();
        if (phoneNo.length !== 10) {
            toast.error("Number must be 10 digits.");
            return;
        }
        if (andharNo.length !== 12) {
            toast.error("Number must be 10 digits.");
            return;
        }
        dispatch(
            addEmployee({
                empName,
                email,
                birthDay,
                avatar,
                address,
                location,
                phoneNo,
                jobRole,
                previousCMP,
                andharNo,
                panNo,
                grantedAmount,
                paybleAmount,
                dateOfJoin,
                bankDetails,
                PFaccountNo,
                ESIaccountNo,
                UANno,
                statusOfWorker,
                reservedFor,
            })
        );
    };

    useEffect(() => {
        dispatch(getAllCompany());
        if (empStatus.createEmp == "succeeded") {
            toast.success("employee Added");
            dispatch(clearError());
        }
    }, [empStatus.createEmp]);

    console.log(reservedFor);

    return (
        <section id="addWorkers" className="w-full">
            <header className="w-full flex items-center sticky top-0 left-0 bg-purple-50 h-14 z-50">
                <div className="flex">
                    <h1 className="text-purple-800 font-semibold text-xl relative after:absolute after:h-[3px] after:w-[40%] after:rounded-full after:bg-purple-400 after:left-0 after:bottom-0">
                        Add Workers
                    </h1>
                </div>
            </header>

            <form className="pt-5 pl-16">
                <PersonalInformation
                    setName={setName}
                    setEmail={setEmail}
                    setBirthDay={setBirthDay}
                    setAvatar={setAvatar}
                    setAddress={setAddress}
                    setLocation={setLocation}
                />
                <BasicInformation
                    setPhoneNo={setPhoneNo}
                    setJobRole={setJobRole}
                    setPreviousCMP={setPreviousCMP}
                    setAndharNo={setAndharNo}
                    setPanNo={setPanNo}
                    setGrantedAmount={setGrantedAmount}
                    setPaybleAmount={setPaybleAmount}
                    setDateOfJoin={setDateOfJoin}
                    setBankDetails={setBankDetails}
                    setPFaccountNo={setPFaccountNo}
                    setESIaccountNo={setESIaccountNo}
                    setUANno={setUANno}
                />

                <div className="flex my-3 mb-7 justify-between items-center container w-[610px]">
                    <div className="flex gap-2">
                        <select
                            name="status"
                            id="status"
                            className="h-10 outline-none bg-fuchsia-100 px-3 py-2 rounded-md border border-purple-200 w-40 text-purple-800 font-medium"
                            onChange={(e) => setStatusOfWorker(e.target.value)}
                            defaultValue="reserved"
                        >
                            <option value="active">Active</option>
                            <option value="ictive">Inactive</option>
                            <option value="reserved">Reserved</option>
                        </select>
                        {statusOfWorker === "reserved" ? (
                            // <input
                            //     onChange={(e) => setReservedFor(e.target.value)}
                            //     type="text"
                            //     placeholder="Reserved for which company?"
                            //     className="h-10 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                            // />

                            <select
                                name="company"
                                className="h-10 outline-none bg-fuchsia-100 px-3 py-2 rounded-md border border-purple-200 w-48 text-purple-800 font-medium"
                                onChange={(e) => {
                                    console.log(
                                        "Selected value:",
                                        e.target.value
                                    );
                                    setReservedFor(e.target.value);
                                }}
                            >
                                <option value="">Select Company</option>
                                {allCompany &&
                                    allCompany.map((cmp) => {
                                        return (
                                            <option
                                                value={cmp._id}
                                                key={cmp._id}
                                            >
                                                {cmp.cmpName}
                                            </option>
                                        );
                                    })}
                            </select>
                        ) : (
                            ""
                        )}
                    </div>
                    <button
                        onClick={handleAddWorker}
                        className="flex flex-row items-center justify-center bg-gradient-to-tl from-indigo-600 hover:bg-indigo-700 to-fuchsia-600 hover:to-fuchsia-700 py-2 px-4 rounded-md text-white gap-2 font-medium transition-all"
                    >
                        {" "}
                        Add User <FiArrowRight />
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddWorkers;
