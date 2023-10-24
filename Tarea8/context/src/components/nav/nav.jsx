import React from 'react'
import { useCartContext } from '../../context/cart_context'


const Nav = () => {
    const { cart } = useCartContext();//customHook para usar el useContext. Solo llamo la info que necesito
    
  return (
    
    <nav>
        <div>
            <span
                    style={{
                        color:"black",
                    }}>
                Carrito: {cart}
            </span>
        </div>
    </nav>
  );
};

export default Nav