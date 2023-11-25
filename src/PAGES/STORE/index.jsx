import React from 'react'
import { ProductCard } from '../../COMPONENTS/ProductCard'
import { StoreLayout } from '../../COMPONENTS/StoreLayout'
import { ProductDetail } from '../../COMPONENTS/ProductDetail'
import { CheckoutSideMenu } from '../../COMPONENTS/CheckoutSideMenu'
import { FilterAndSorter } from '../../COMPONENTS/FilterAndSorter'
import { useProductProvider } from '../../CONTEXT'
import { useFiltersAndSorters } from '../../HOOKS/useFiltersAndSorters'

function Store() {

  const { 
    Products,
    filter,
    sorter
  } = useProductProvider();

  const [sorterByPrice,filterByCategory] = useFiltersAndSorters()

  const calculateProductsToDisplay = (array,category,sorterType)=>{
    let arrayToDisplay = [...array]
    arrayToDisplay = filterByCategory(arrayToDisplay,category)
    arrayToDisplay = sorterByPrice(arrayToDisplay,sorterType)
    return arrayToDisplay
  }

  const productsToDisplay = calculateProductsToDisplay(Products,filter,sorter)

   
  return (
    <>
      <FilterAndSorter/>
      
      <StoreLayout>
        {
        productsToDisplay.map((item)=>(<ProductCard product={item}  key={item.id}/>))
        }
      </StoreLayout>

      <ProductDetail/>

      <CheckoutSideMenu/>


    </>
  )
}

export {Store}
