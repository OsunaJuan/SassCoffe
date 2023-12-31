import React from 'react'
import { useProductProvider } from '../../CONTEXT'
import { useCart } from '../../HOOKS/useCart'
import { XCircleIcon } from '@heroicons/react/24/outline'


function CheckoutItemCard({product, utils}) {
    const {uniqueProduct, quantity} = product
    const{tittle,imgURL,price} = uniqueProduct
    const [utilsArray,utilSetter] = utils
    const [addItem,decItem,delItem] = useCart()

    
    return (
        <div className=' relative flex justify-around items-center w-full h-[7rem] m-4 border border-black rounded-lg mx-1  '>
            <div
             className='absolute top-[-13px] right-[-10px] flex items-center justify-center  p-2 rounded-full cursor-pointer ' 
             onClick={()=>delItem(uniqueProduct,utilsArray,utilSetter,"CART")}
            >
                <XCircleIcon className=' w-10 bg-red-500 rounded-full'/>
            </div>
            <figure className=' flex justify-center w-1/4 h-5/6'>
                <img src={imgURL} className='object-cover  rounded-xl' />
            </figure>
            <div className='flex flex-col justify-center items-center h-full w-1/4'>
                <h1 className='font-light text-base text-center w-full'>{tittle}</h1>
                <p>${price}</p>
            </div>
            <div  className='flex  justify-around items-center h-full w-2/4'>
                <button onClick={()=> decItem(uniqueProduct,utilsArray,utilSetter,"CART")}>-</button>
                <p>{quantity}</p>
                <button onClick={()=> addItem(uniqueProduct,utilsArray,utilSetter,"CART")}>+</button>
            </div>
        </div>
  )
}

export {CheckoutItemCard}