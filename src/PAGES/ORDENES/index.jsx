import React from 'react'
import { Link } from "react-router-dom"
import { useProductProvider } from '../../CONTEXT'
import { OrderCard } from '../../COMPONENTS/OrderCard'

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
      <div className="flex flex-col-reverse flex-1 justify-start items-center w-1/2 ">
        {
          orders.map((item,index)=>(
            item? 
              <OrderCard order={item} index={index} key={index}/>
            : null
            
          ))
        }
      </div>
    )
  }else{
    return(
      <p>No tienes ordenes</p>
    )
  }
 
}

export {Ordenes}