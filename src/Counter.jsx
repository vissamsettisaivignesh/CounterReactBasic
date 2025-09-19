import React from "react";
import { useState } from "react";
import './Counter.css';

function Counter({name}){
    const[count,setCount]=useState(0);
    return(
        <>
          <div id="Counterid">
          <h3>{name} Counter</h3>
          <p>{name} you have {count}</p>
          <div id="btn">
            <button onClick={()=>setCount(count+1)}>+</button>
          <button onClick={()=>count>0 && setCount(count-1)} >-</button>
          <button onClick={()=>setCount(0)}>Reset</button>
          </div>
          
           </div>
        </>
    )
}

export default Counter