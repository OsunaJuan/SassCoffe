import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className='flex flex-col flex-grow items-center mt-[20%]  md:mt-[9%] lg:mt-[6%] mb-16 w-11/12 md:w-4/5 '>
        <Outlet/>
    </div>
  )
}

export {Layout}