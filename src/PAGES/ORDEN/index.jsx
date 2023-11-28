import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { CheckoutItemCard } from '../../COMPONENTS/CheckoutItemCard'
import { OrderLayout } from '../../COMPONENTS/OrderLayout'
import { useProductProvider } from '../../CONTEXT'
import { useTotalBalance } from '../../HOOKS/useTotalBalance'
import { useLocalStorage } from '../../HOOKS/useLocalStorage'

 function Orden() {

  const { orders, setOrders } = useProductProvider();
  const [setLocalStorage, getLocalStorage] = useLocalStorage()


  const getOrderId = () => {
    let { id } = useParams();
    if (id == "last") {
      return orders.length - 1;
    } else {
      return id;
    }
  };
  const orderId = getOrderId();
  const {
    products: orderProducts,
    date,
    totalOrderBalance,
  } = orders[orderId]
    ? orders[orderId]
    : { products: [], date: undefined, totalOrderBalance: 0 };

  const calcTotalBalance = useTotalBalance();

  const setOrdersFunction = (modifiedProducts) => {
    const modifiedOrder = {
      ...orders[orderId],
      totalProducts: modifiedProducts.length,
      products: modifiedProducts,
      totalOrderBalance: calcTotalBalance(modifiedProducts),
    };

    const newState = [...orders];
    newState[orderId] = modifiedOrder;

    if (newState[orderId].totalProducts == 0) {
      newState.splice(orderId, 1, undefined);
    }

    setOrders(newState);
    setLocalStorage("ORDERS",newState)
  }; 

  return (
    <>
      {orderProducts.length > 0 ? (
        <OrderLayout date={date} totalOrderBalance={totalOrderBalance}>
          {orderProducts.map((item) => (
            <CheckoutItemCard
              product={item}
              utils={[orderProducts, setOrdersFunction]}
              key={item.uniqueProduct.id}
            />
          ))}
        </OrderLayout>
      ) : (
        <>
          <p>Orden Vacia :( </p>
          <Link className=' flex-grow' to={"/ordenes"}>Volver a todas las ordenes</Link>
        </>
      )}
    </>
  );


}

export {Orden}