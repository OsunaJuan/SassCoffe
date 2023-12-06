import React from 'react'
import { NavLink } from 'react-router-dom'
import { useProductProvider } from '../../CONTEXT'
import { ShoppingCartIcon, UserCircleIcon,BuildingStorefrontIcon } from '@heroicons/react/24/solid'


const activeStyle = ({isActive}) => {
    return (isActive ? 'underline underline-offset-4' : undefined)
}


function NavBar() {
    
    const {cartState,openCheckout} = useProductProvider()
    
  return (
    <nav className="flex md:justify-between items-center w-full h-[10%] fixed top-0 bg-black bg-opacity-50 z-30 text-white">
      <ul className="flex justify-start items-center w-auto md:w-1/2 ml-7 md:ml-3 text-5xl md:text-7xl tracking-widest  font-['Bebas_Neue'] ">
        <li>
          <NavLink to="/">Sass Coffee</NavLink>
        </li>
      </ul>
      <ul className="flex items-center w-full md:w-1/3 justify-around ">
        <li>
          <NavLink to="/store" className={activeStyle}>
            <div className="flex flex-col justify-center items-center">
              <BuildingStorefrontIcon className="w-8 md:w-10 h-auto" />
              <p className=' text-lg md:text-2xl'>Tienda</p>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink onClick={openCheckout}>
            <div className="flex flex-col justify-center items-center">
              <div className="flex relative">
                <ShoppingCartIcon className=" w-8 md:w-10 h-auto mr-2" />

                {cartState.length>0?<span className=" absolute top-[-7px] right-[-7px] px-2 rounded-full md:text-base bg-red-500">
                  {cartState.length}
                </span>:null}
                
              </div>
              <p className=' text-lg md:text-2xl'>Carrito</p>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/cuenta" className={activeStyle}>
            <div className="flex flex-col justify-center items-center">
              <UserCircleIcon className=" w-8 md:w-10 h-auto" />
              <p className=' text-lg md:text-2xl'>Cuenta</p>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export {NavBar}
