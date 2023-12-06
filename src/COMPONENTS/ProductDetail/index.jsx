import React from 'react'
import { useProductProvider } from '../../CONTEXT'
import { useCart } from '../../HOOKS/useCart';
import { XCircleIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import './index.css'

function ProductDetail() {
  const{isDetailOpen,showedProduct, closeDetail,cartState,setCartState} = useProductProvider()
  const [addItem] = useCart()
  const {tittle, description,price,imgURL} = showedProduct
  return (
    <aside
      className={`${isDetailOpen ? " right-0 " : " right-[-100%] md:right-[-25%] "}  
      flex flex-col justify-start  items-center fixed top-[10%]  w-full md:w-1/4 h-[calc(100vh-10%)] border-black z-50 border-2 rounded-lg bg-white overflow-y-scroll  duration-500 customBar `}
    >
      <div className="flex justify-between w-full p-4">
        <p>Detalle</p>
        <button onClick={closeDetail}>
          <XCircleIcon className=" w-12" />
        </button>
      </div>

      <div className="flex flex-col justify-center items-center w-11/12 p-2 h-full mb-4">
        <h1 className=" text-4xl mb-4 font-bold ">{tittle}</h1>
        <figure className=" flex justify-center mb-4">
          <img src={imgURL} className=" w-3/4 h-auto rounded-2xl" />
        </figure>
        <p className=" text-justify mb-4">{description}</p>
      </div>

      <div className='flex flex-col items-center w-full mb-4'>
      <button 
          className='flex justify-around items-center w-10/12 p-3 mb-5 mx-auto bg-orange-500 bg-opacity-95 rounded-2xl text-white'
          onClick={
            () => {addItem(showedProduct, cartState, setCartState)}
          }
        
        >
          <span className=' p-2 rounded-2xl bg-black bg-opacity-80  '>
            {`$${price}`}
          </span>

          <p>Añadir</p>

          <ChevronRightIcon className=' w-8'/>
        </button>
      </div>

    </aside>
  );
}

export  {ProductDetail}