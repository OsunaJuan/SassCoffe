import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import { Store } from '../STORE'
import { MiCuenta } from '../MI_CUENTA'
import {Orden} from '../ORDEN'
import {Ordenes} from '../ORDENES'
import {Home } from '../HOME'
import {NotFound} from '../NOT_FOUND'
import { Layout } from '../../COMPONENTS/Layout'
import { NavBar } from '../../COMPONENTS/Navbar'
import { ProductProvider } from '../../CONTEXT'

import './App.css'

function App() {
  return (
    <HashRouter>
      <ProductProvider>
        <NavBar/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route element= {<Layout/>}>
            <Route path='/store' element = {<Store/>}/>
            <Route path = '/cuenta' element = {<MiCuenta/>}/>
            <Route path = '/orden/:id' element = {<Orden/>}/>
            <Route path = '/ordenes' element = {<Ordenes/>}/>
            <Route path = '*' element = {<NotFound/>}/>
          </Route>
        </Routes>
      </ProductProvider>
    </HashRouter>
  )
}

export default App