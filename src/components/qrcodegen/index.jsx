import React, { useState } from 'react';
import "./style.css"

export default function QrCodeGen() {
    const[input,setInput] =useState('')


    function handleGenerate(){
        
    }
  return (
    <div className="wrapper">
        <div className="container">
            <h2>QR Code Generator</h2>
            <label htmlFor="">
                <input type="text" name="gen" id="gen" placeholder='enter the value' value={input}  onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={()=>handleGenerate()}>Generate</button>
            </label>
        </div>
    </div>
  )
}
