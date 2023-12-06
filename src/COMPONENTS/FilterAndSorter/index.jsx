import React from 'react'
import { useProductProvider } from '../../CONTEXT';


function FilterAndSorter() {
    const {
        sorter,
        setSorter,
        filter,
        setFilter
    } = useProductProvider()

    const setStatus = (newStatus,oldStatus,statuSetter) => {
        if(newStatus == oldStatus) statuSetter(undefined)
        else if( newStatus != oldStatus) statuSetter(newStatus)
    }

    const setClass = (compValue,stateValue)=>{
        if(compValue == stateValue) return "bg-orange-500 text-white"
    }

    const buttonClass = "border border-gray-300 py-2 px-4 rounded-2xl font-semibold transition duration-300"

  return (
    <div className="flex flex-col md:flex-row max-sm:items-center  md:justify-between w-4/5 mb-14">

      <div className="flex flex-col justify-around items-center w-full md:w-1/2">
        <p className=" text-center mb-4">Filtrar por categoria</p>
        <div className="flex justify-around w-full md:w-3/4">
          <button
            className={`${buttonClass} ${setClass("Coffe Beans", filter)}`}
            onClick={() => setStatus("Coffe Beans", filter, setFilter)}
          >
            Coffe Beans
          </button>
          <button
            className={`${buttonClass} ${setClass("Coffe Pods", filter)}`}
            onClick={() => setStatus("Coffe Pods", filter, setFilter)}
          >
            Coffe Pods
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-around items-center w-full md:w-1/2">
        <p className=" text-center mb-4">Sortear Precios</p>
        <div className="flex justify-around w-full md:w-3/4">
          <button
            className={`${buttonClass} ${setClass(1, sorter)}`}
            onClick={() => setStatus(1, sorter, setSorter)}
          >
            Ascendente
          </button>
          <button
            className={`${buttonClass} ${setClass(2, sorter)}`}
            onClick={() => setStatus(2, sorter, setSorter)}
          >
            Descendente
          </button>
        </div>
      </div>
    </div>
  );
}

export  {FilterAndSorter}