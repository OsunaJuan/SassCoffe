import React from 'react'


function StoreLayout({children}) {
  
  return (
    <section className= {`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  auto-rows-fr gap-8 md:gap-28 w-full h-full `}>
        {children}
    </section>
  )
}

export  {StoreLayout}