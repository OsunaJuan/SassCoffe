import React from 'react'
import { Link } from "react-router-dom";
import { CheckoutItemCard } from '../CheckoutItemCard'
import { useProductProvider } from '../../CONTEXT'
import { useTotalBalance } from '../../HOOKS/useTotalBalance';
import './index.css'

function CheckoutSideMenu() {

  const
  { isCheckoutOpen,
    closeCheckout,
    cartState,
    setCartState,
    handleCheckOut
  } = useProductProvider()
  
  const calcTotalBalance = useTotalBalance()


  return (
    <aside
      className={` ${
        isCheckoutOpen ? "flex " : "hidden "
      } flex-col justify-between  items-start fixed top-[10%] right-0 w-[350px] h-[calc(100vh-10%)] border-black z-50 border rounded-lg bg-white`}
    >
      <div className="flex flex-col justify-start items-center h-full w-full overflow-y-scroll customBar">
        <div className="flex justify-between w-full mb-1 p-4 sticky top-0 left-0 bg-white z-10">
          <p>CheckOut</p>
          <button onClick={closeCheckout}>X</button>
        </div>

        <div className="flex flex-col w-11/12 h-auto mb-[70px]">
          {cartState.map((item) => (
            <CheckoutItemCard
              product={item}
              utils={[cartState, setCartState]}
              key={`item ${item.uniqueProduct.id}`}
            />
          ))}
        </div>

        <div className=" absolute  bottom-0 left-0 w-full h-[10%] min-h-[10%]">
          <Link to="/orden/last">
            <button
              className=" w-full h-full bg-black text-white font-semibold hover:bg-green-700"
              onClick={() =>{ 
                handleCheckOut(cartState)
              }}
            >
              Total: ${calcTotalBalance(cartState)}
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
}

export  {CheckoutSideMenu}

