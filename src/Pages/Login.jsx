import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className={'flex flex-col justify-center items-center h-screen w-screen border border-red-500 '}>
        <div className=' bg-fuchsia-100 border-2 border-x-white-400 h-40 w-80 rounded-md flex justify-center items-center flex-col '>

        <h2 className=' text-red-700 my-3 '> Login as Team Membar  </h2>
       <Link className=' border-2 border-red-200 p-2 rounded-full '>
          <button>
            Continue With Google
          </button>
       </Link>
    </div>
        </div>
  )
}

export default Login