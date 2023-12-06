import React from 'react'
import { Link } from 'react-router-dom'
import {ChevronLeftIcon}  from '@heroicons/react/24/solid'


function OrderLayout({children,date,totalOrderBalance}) {
  return (
    <div className="flex flex-1 flex-col items-center md:items-start w-11/12 h-[90%]">
      <div className="flex items-center">
        <Link to="/ordenes">
          <ChevronLeftIcon className=" w-8 h-8 mr-4" />
        </Link>
        <h1>Orden del dia: {date} </h1>
      </div>
      <p>Monto total de la orden: {totalOrderBalance}</p>
      <div className=" flex-1 w-11/12 h-5/6">{children}</div>
    </div>
  );
}

export  {OrderLayout}

