import React from 'react'
import { useProductProvider } from '../../CONTEXT';
import { useCart } from '../../HOOKS/useCart';
import './index.css'
import {ChevronRightIcon}  from '@heroicons/react/24/solid'

function ProductCard({product}) {
  const {tittle, category,price,imgURL,description} = product; 
  const {openDetail,cartState,setCartState} = useProductProvider();
  const [addItem] = useCart()
  return (
    <article className='flex flex-col w-full h-full rounded-t-3xl  rounded-b-3xl border border-gray-300 sombra  '>

      <figure className='relative '>
        <img src={imgURL} alt={`imagen del Producto ${tittle}`}  className=' rounded-t-3xl' />
        <button 
          className=' absolute top-5 right-6 bg-black opacity-80  py-1 px-4 border border-orange-500  rounded-full text-xl font-semibold text-orange-500'
          onClick={()=> openDetail(product)}
        >
          Ver más
        </button>
      </figure>

      <div className='flex flex-col flex-grow justify-between '>
        <div className=' px-4 mb-2'>
          <h3 className=' font-bold'>{tittle}</h3>
          <div className='h-1/6 w-11/12'>
          <div className=''>
           <p className='truncate text-base'>{description}</p>
          </div>
         
          </div>
          
        </div>

        <button 
          className='flex justify-around items-center w-10/12 p-3 mb-5 mx-auto bg-orange-500 bg-opacity-95 rounded-2xl text-white'
          onClick={
            (e) => {addItem(product, cartState, setCartState)}
          }
        
        >
          <span className=' p-2 rounded-2xl bg-black bg-opacity-80  '>
            {`$${price}`}
          </span>

          <p>Añadir</p>

          <ChevronRightIcon className=' w-8'/>
        </button>

      </div>

    </article>

    // <div
    //   className={`flex flex-col items-center w-${w} h-${h} bg-zinc-100 border border-black  p-2 cursor-pointer`}
    //   onClick={() => openDetail(product)}
    // >
    //   <figure className="relative w-full h-3/4 m-2">
    //     <span
    //       className="flex justify-center items-center absolute right-2 top-2 p-2 bg-white text-black z-10 rounded-full h-10 w-10 cursor-pointer"
    //       onClick={
    //         e.stopPropagation();
    //       }}
    //     >
    //       +
    //     </span>
    //     <img src={imgURL} alt="" className="w-full h-full" />
    //     <div className="flex items-center justify-center absolute left-2 bottom-1 px-1  bg-amber-200/50 rounded-md text-lg ">
    //       {category}
    //     </div>
    //   </figure>
    //   <div className="flex flex-col items-center">
    //     <p className="text-xl">{tittle}</p>
    //     <p className="font-bold ">${price}</p>
    //   </div>
    // </div>
  );
}

export  {ProductCard}