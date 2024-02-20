import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import "./style.css"

export default function QrCodeGen() {
    const[input,setInput] =useState('')
    const[qrCode,setQrCode] = useState('')


    function handleGenerate(){
        setQrCode(input)
        setInput('')

    }
  return (
    <div className="wrapper">
        <div className="container">
            <h1>QR Code Generator</h1>
            <label htmlFor="">
                <input className='text-enter' type="text" name="gen" id="gen" placeholder='enter the value' value={input}  onChange={(e)=>setInput(e.target.value)}/>
                <button className='btn-gen' onClick={()=>handleGenerate()} disabled={input && input.trim() !== ""? false : true}>Generate</button>
            </label>
            <div className="qr-image">
                <QRCode id="qr-code-value " value={qrCode} />
            </div>
        </div>
    </div>
  )
}
