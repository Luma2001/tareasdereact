import { useState } from "react";

export const useCount= (initialValue)=>{

        const [count, setCount]= useState(initialValue);
    
        const handleClickRestar =()=>{
        setCount((count) => count-1);
        }
        
        const handleClickSumar =() =>{
            setCount((count) => count+1);
        };
   
    return {
        count,
        handleClickRestar,
        handleClickSumar,
    }




}
