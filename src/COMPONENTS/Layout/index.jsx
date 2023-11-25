import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className='flex flex-col flex-grow items-center mt-[6%] mb-16 w-4/5 '>
        <Outlet/>
    </div>
  )
}

export {Layout}