import React, { useEffect } from 'react';
import { useState } from 'react';
import './counter.css'

export default function Counter() {
    const[count,setCount]=useState(0)
    const increment = () =>setCount(count+1)
    const decrement = ()=>setCount(count-1)

    useEffect(()=>{console.log(count)},[count])
    
  return (
    <>
    <div className="container">
        <h1 className="number">{count}</h1>
        <div>

        <button className='increase btn' onClick={increment}>+1</button>
        <button className='decrease btn'onClick={decrement}>-1</button>
        </div>
    </div>
    </>
  )
}
