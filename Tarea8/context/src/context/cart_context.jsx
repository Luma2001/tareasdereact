import { createContext, useContext, useState } from "react";

//1° creamos context
//para crear un contexto utilizo la funcion
//createContext() que me devuelve un componente

export const CartContext = createContext();  


//2° voy a crear la lógica de mi repositorio PROVIDER
//context tiene dos propiedades: PROVIDER y CONSUMER
//Provider tiene la propiedad: value.
//En value es donde debo colocar lo que quiero compartir
//Creo un componente que retorna CartContext.Provider  

export const CartProvider = ({ children }) =>{
    const [cart, setCart]=useState(0); //creo hook useState
    const addProduct =  () => {setCart(cart+1)};
    const removeProduct = () => {setCart(cart-1)};
    
    return  (
        <CartContext.Provider
            value={{
                cart,
                addProduct,
                removeProduct,
            }}>

            { children }
        </CartContext.Provider>

    );
};

//3° Creamos otro componente que llame a useContext para facilitarnos su uso.
//Creo un customHook. 
//Recordar que los customHooks son funciones que llaman otros hooks
//devuelve todo lo que usa
    //Así puede tener una referencia de todo lo que puedo usar


export const useCartContext = () => {
    const{cart, addProduct, removeProduct} = useContext(CartContext);//llamamos al context creado para usarlo, es como si estuvieramos desestructrurando

    return {
        cart,
        addProduct,
        removeProduct,
    };
        
};

/*
En resumen useContext es una de las formas 
para compartir estados, funciones, datos, etc.
Son tres pasos:
1)Creo componente que me crea el context con la 
función: createContext();
2)Creo componente que contendrá la lógica y será 
el contenedor de la info que deseo compartir PROVIDER.
3)Creo componente customHook para usar mi useContext.
Acá paso los datos que quiero compartir y los retorno
*/