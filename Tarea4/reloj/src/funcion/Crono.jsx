import React, {useEffect, useState } from 'react'

const Crono = () => {

    const [inicio, setInicio]=useState(null);
    const [diff, setDiff]=useState(null);

    const tiktok = () =>{setDiff(new Date(+new Date()-inicio))};

    const start = () => {setInicio(new Date())}

    useEffect(()=>{
        if(inicio){
            requestAnimationFrame(tiktok);
        }

    },[inicio]);

    useEffect(()=>{
        if(diff){
            requestAnimationFrame(tiktok)
        }
    },[diff]);
    
    return (
        <button onClick={start}><h1>{timeFormat(diff)}</h1></button>
        
    );
}

const timeFormat = (date) => {
    if(!date) return "00:00:00";
    let mm = date.getUTCMinutes();
    let ss = date.getSeconds();
    let cm = Match.round(date.getMilliseconds()/10);

    mm = mm<10 ? "0" + mm : mm;
    ss = ss<10 ? "0" + ss : ss;
    cm = cm<10 ? "0" + cm : cm;

    return `${mm}:${ss}:${cm}`;
};

  
export default Crono