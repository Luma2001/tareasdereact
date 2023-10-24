import React from 'react'
import { useCartContext } from '../../context/cart_context';


const Product = ({ product }) => {
    //uso mi customHook para tener referencia de todos los datos, y evita la importación del cmponente
    const { addProduct, removeProduct } = useCartContext(); //mi customHook que usa useContext, sólo llamo la info que neceisto

    return (
    <div 
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "150px",
            height: "200px",
            border: "2px solid blue",
            borderRadius:"20px"
        }}
    >
        <span>{product.title}</span>
        <div>
            <button onClick={()=>removeProduct()}>-</button>
            <button onClick={()=>addProduct()}>+</button>
        </div>
    </div>
  )
}

export default Product;