import React from 'react'
import Root_layout from './components/layouts/root_layouts/root_layout'
import List_products from './components/list_products/list_products'
import { CartProvider } from './context/cart_context'


//Mi moc para probar
const products= [
  {id:crypto.randomUUID(),
    title: "PAN"},
  {id:crypto.randomUUID(),
    title: "MEDIALUNAS"},
  {id:crypto.randomUUID(),
    title: "TORTITAS"}    
    
]

const App = () => {
  return (
    <>
      <CartProvider>
          <Root_layout>
            <List_products products={products}/>
          </Root_layout>
      </CartProvider>
    </>
  )
}

export default App