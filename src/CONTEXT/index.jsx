import React, { useState } from "react"
import { createContext, useContext } from "react"
import { Products } from "./Products"
import { useTotalBalance } from "../HOOKS/useTotalBalance"
import { useLocalStorage } from "../HOOKS/useLocalStorage"

const productContext = createContext([])

//Nos brinda un "hook" para usar el contexto
const useProductProvider =  ()=>{return useContext(productContext) }
const calcTotalBalance = useTotalBalance()
const [setLocalStorage, getLocalStorage] = useLocalStorage()


function ProductProvider({children}){
    //Estado usado en el carrito
    const [cartState, setCartState] = useState(getLocalStorage("CART", []))   
    
    //Estado y funciones que establecen el producto a mostrarse en el detalle
    const [showedProduct, setshowedProduct] = useState({})

    //Estado y funciones utilizadas en la apertura y cierre del  detalle del producto
    const [isDetailOpen, setisDetailOpen] = useState(false)
    const openDetail = (product)=>{
        setshowedProduct(product)
        closeCheckout()
        setisDetailOpen(true)
    }
    const closeDetail = ()=>{
        setisDetailOpen(false)
    }

    //Estado y funciones usadas en el side Checkout del carrito: 
    const [isCheckoutOpen, setisCheckoutOpen] = useState(false)
    const openCheckout = ()=>{
        closeDetail()
        setisCheckoutOpen(true)
    }
    const closeCheckout = ()=>{
        setisCheckoutOpen(false)
    }


    //Estado y funciones usadas en el manejo de las ordenes. 
    const [orders, setOrders] = useState(getLocalStorage("ORDERS", []))
    const handleCheckOut  = (newOrder)=>{

        const orderToAdd = {
            products : [...newOrder],
            date: new Date().toLocaleDateString("es"),
            totalProducts : newOrder.length,
            totalOrderBalance: calcTotalBalance(newOrder)
        }

        setOrders((prevstate)=>{
            setLocalStorage("ORDERS", [...prevstate, orderToAdd])
            return [...prevstate, orderToAdd]
        })
        setCartState([])
        closeCheckout() 
    }

    const [filter, setFilter] = useState(undefined)

    const [sorter,setSorter] = useState(0)




   return( 
    <productContext.Provider 
        value={{
            Products,
            cartState,
            setCartState,
            isDetailOpen,
            openDetail,
            closeDetail,
            showedProduct,
            isCheckoutOpen,
            openCheckout,
            closeCheckout,
            handleCheckOut,
            orders,
            setOrders,
            filter,
            setFilter,
            sorter,
            setSorter
        }}
    >

        {children}
    </productContext.Provider>)
}


      


export{
    ProductProvider,
    useProductProvider,
    }