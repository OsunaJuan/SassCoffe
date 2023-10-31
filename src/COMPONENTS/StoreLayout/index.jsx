import React from 'react'
import { useProductProvider } from '../../CONTEXT'

function StoreLayout({children}) {
  const {isDetailOpen,isCheckoutOpen} = useProductProvider()
  return (
    <section className= {`${isDetailOpen ? 'mr-[300px]' : isCheckoutOpen ? 'mr-[300px]' : 'mr-0'} grid grid-cols-4 grid-flow-row gap-40`}>
        {children}
    </section>
  )
}

export  {StoreLayout}