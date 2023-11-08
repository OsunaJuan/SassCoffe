import React from 'react'
import { useProductProvider } from '../../CONTEXT';
import { useCart } from '../../HOOKS/useCart';

function ProductCard({product ,h,w}) {
  const {tittle, category,price,imgURL} = product; 
  const {openDetail,cartState,setCartState} = useProductProvider();
  const [addItem] = useCart()
  return (
    <div className={`flex flex-col items-center w-${w} h-${h} bg-zinc-100 border border-black  p-2 cursor-pointer`} onClick={()=> openDetail(product)}>
        <figure className='relative w-full h-3/4 m-2'>
            <span className='flex justify-center items-center absolute right-2 top-2 p-2 bg-white text-black z-10 rounded-full h-10 w-10 cursor-pointer' 
              onClick={(e)=>{
                addItem(product,cartState,setCartState)
                e.stopPropagation()
              }}
            >+</span>
            <img src={imgURL} alt="" className='w-full h-full' />
            <div className='flex items-center justify-center absolute left-2 bottom-1 px-1  bg-amber-200/50 rounded-md text-lg '>
                {category}
            </div>
        </figure>
        <div className='flex flex-col items-center'>
            <p className='text-xl'>{tittle}</p>
            <p className='font-bold '>${price}</p>
        </div>
    </div>
  )
}

export  {ProductCard}