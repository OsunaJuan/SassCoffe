import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import {MapPinIcon,PhoneIcon} from '@heroicons/react/24/solid'
 

function Footer() {
  return (
    <footer className='flex flex-col items-center md:flex-row md:justify-around w-full h-auto text-white bg-black p-8 z-20'>
        <div className='flex flex-col justify-center items-center w-1/2 h-full '>
            <span className="flex justify-start items-center text-5xl md:text-7xl tracking-widest  font-['Bebas_Neue'] ">
              <Link to={"/#hero"}>Sass Coffe</Link>
            </span>
            
        </div>
        <div className='flex flex-col justify-center items-center w-full md:w-1/2 h-full'>
            <div className='flex justify-between w-fit md:w-1/2 p-4'>

              <figure className='w-1/12'>
              <MapPinIcon className='w-9'/>
              </figure>

              <span className='pl-6 md:pl-4 w-11/12'>
                <p>Av.Triunvirato 890</p>
              </span>
              
            </div>

            <div className='flex justify-between w-fit md:w-1/2 p-4'>
              <figure className='w-1/12'>
                <PhoneIcon className='w-9'/>  
              </figure>

              <span className=' pl-8 md:pl-4 w-11/12'>
                <p>1136815282</p>
              </span>
              
            </div>
        </div>
    </footer>
  )
}

export  {Footer}