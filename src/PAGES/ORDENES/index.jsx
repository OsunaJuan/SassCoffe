import React from 'react'
import { useProductProvider } from '../../CONTEXT'
import { OrderCard } from '../../COMPONENTS/OrderCard'
import { CheckoutSideMenu } from '../../COMPONENTS/CheckoutSideMenu'

 function Ordenes() {
  const {orders,setOrders} = useProductProvider()

  const clearOrders = ()=>{
    if(orders.includes(undefined)){
      const newOrderState = orders.filter(item=> item!=undefined)
      setOrders(newOrderState)
    }
  }

  clearOrders()


  if(orders.length > 0){
    return (
      <>
       <div className="flex flex-col-reverse justify-start items-center w-11/12 md:w-1/2 ">
        {
          orders.map((item,index)=>(
            item? 
              <OrderCard order={item} index={index} key={index}/>
            : null
            
          ))
        }
        </div>
        <CheckoutSideMenu />
      </>
     
    )
  }else{
    return(
      <>
      <p>No tienes ordenes</p>
      <CheckoutSideMenu />
      </>
    )
  }
 
}

export {Ordenes}