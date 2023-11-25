import React from 'react'
import { useProductProvider } from '../../CONTEXT'

function StoreLayout({children}) {
  const {isDetailOpen,isCheckoutOpen} = useProductProvider()
  return (
    <section className= {`grid grid-cols-4 grid-flow-row gap-40 flex-grow `}>
        {children}
    </section>
  )
}

export  {StoreLayout}