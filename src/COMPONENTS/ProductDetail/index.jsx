import React from 'react'
import { useProductProvider } from '../../CONTEXT'

function ProductDetail() {
  const{isDetailOpen,showedProduct, closeDetail} = useProductProvider()
  const {tittle, description,price,imgURL} = showedProduct
  return (
    <aside className={` ${isDetailOpen ? 'flex ' : 'hidden ' } justify-center  items-start fixed top-[10%] right-0 w-[350px] h-[calc(100vh-10%)] border-black z-50 border rounded-lg bg-white `}>
        <div className='flex flex-col justify-center items-center w-11/12'>
            <div className='flex justify-between w-full p-4'>
              <p>Detalle</p>
              <button onClick={closeDetail}>X</button> 
            </div>
            <h1 className='font-bold mb-4'>{tittle}</h1>
            <figure className='mb-4 ' >
                <img src={imgURL} className='w-full h-full rounded-2xl' />
            </figure>
            <p className='text-justify mb-4'>{description}</p>
            <h2 className='font-bold text-4xl'>${price}</h2>
        </div>
    </aside>
  )
}

export  {ProductDetail}