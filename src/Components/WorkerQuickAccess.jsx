import React, { useState } from "react";

import icon1 from "../assets/workers/icon1.svg";
import icon2 from "../assets/workers/icon2.svg";
import icon3 from "../assets/workers/icon3.svg";
import icon4 from "../assets/workers/icon4.svg";

function WorkerQuickAccess({ icon, heading, ammount, onClick ,index }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={() => {
        onClick();
        setIsActive(!isActive);
        console.log("ok click");
      }}
      // onFocus={()=>{setIsActive(true);
      //   console.log("ok focus");
      // }}
      onBlur={()=>{setIsActive(false);
        console.log("blur");
      }}
      className={`flex gap-2 justify-start items-center p-3 w-[25%] border rounded-[10px] bg-purple-100 shadow-md cursor-pointer ${isActive? "bg-purple-200":"bg-purple-100"}`}
      tabIndex={index}
    >
      <div>
        <img src={icon} alt="" />
      </div>
      <div>
        <p className=" font-medium">{heading}</p>
        <p className="text-gray-500 ">{ammount}</p>
      </div>
    </div>
  );
}

export default WorkerQuickAccess;
