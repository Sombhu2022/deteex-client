import React from 'react'
import Profile from '../Components/profile/Profile'
import { useParams } from 'react-router-dom'
import WorkerMails from '../Components/profile/WorkerMails'
import { data } from "../json/worker.js";


function ProfileSection() {
    const { id } = useParams()
    const item = data[id]
  return (
    <>
    <div>
        <h1 className="font-semibold mt-2">{item?.name}</h1>
        <div className="flex gap-1 ">
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
        </div>
      </div>
    <div className='ml-10 '>
        <Profile  item={item}/>
        <WorkerMails item={item}/>
    </div>
    </>
  )
}

export default ProfileSection