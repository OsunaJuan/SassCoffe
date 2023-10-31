import React from 'react'
import igIcon from'../../resources/icon-ig.png'
import {MapPinIcon,PhoneIcon} from '@heroicons/react/24/solid'
 

function Footer() {
  return (
    <footer className='flex justify-around w-full h-auto text-white bg-black p-8 z-20'>
        <div className='flex flex-col justify-center items-center w-1/2 h-full '>
            <div>Sass Coffe</div>
            <figure>
              <img src={igIcon} alt="" />
            </figure>
        </div>
        <div className='flex flex-col justify-center items-center w-1/2 h-full'>
            <div className='flex justify-between w-1/3 p-4'>
              <MapPinIcon className=' w-10'/>
              <p>Av. Triunvirato 890</p>
            </div>
            <div className='flex justify-between w-1/4 p-4'>
              <PhoneIcon className='w-9'/>
              <p className=' text-center'>1136815282</p>
            </div>
        </div>
    </footer>
  )
}

export  {Footer}