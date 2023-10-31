import React from 'react'
import { Link } from 'react-router-dom';
import {CalendarDaysIcon,ShoppingCartIcon,BanknotesIcon,ChevronRightIcon}  from '@heroicons/react/24/solid'




function OrderCard({order,index}) {
    const { date, totalProducts, totalOrderBalance } = order;

    return(
        <div className='flex justify-between items-center w-full my-6 p-4 border border-black'>
            <div className='flex flex-col justify-center w-2/5'>
                <div className='flex justify-start' >
                    <CalendarDaysIcon className='w-8 h-8 mr-4'/>
                    <p>{date}</p>
                </div>
                <div className='flex justify-start'>
                    <ShoppingCartIcon  className='w-8 h-8 mr-4'/>
                    <p>{totalProducts} {totalProducts>1?'Productos':'Producto'}</p>
                </div>
            </div>
            <div className='flex justify-center items-center w-2/5 mr-4'>
                <div className='flex justify-around'>
                    <BanknotesIcon  className='w-12 h-12'/>
                    <p className=' text-5xl'>${totalOrderBalance}</p>
                </div>
            </div>

            <Link to={`/orden/${index}`} className=' flex justify-end w-1/5'>
                <ChevronRightIcon  className='w-8 h-8 mr-4'/>
            </Link>

        </div>
    ) 
}

export  {OrderCard}