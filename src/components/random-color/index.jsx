import React, { useEffect, useState } from 'react'
import './style.css'

export default function ColorGenerator() {
	const[typeOfColor,setTypeOfColor]=useState('HEX');
	const[color,setColor]=useState('#EDF044')

	function randomColorUtility(length){
		return Math.floor(Math.random()*length)
	}

	function handleRandomHexColor() {
		// #678765
		const hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
		let hexColor='#';

		for(let i=0;i<6;i++){
			hexColor += hex[randomColorUtility(hex.length)];
			setColor(hexColor)
			
		}


		  
		
	}
	function handleRandomRgbColor() {
		const r = randomColorUtility(256)
		const g = randomColorUtility(256)
		const b = randomColorUtility(256)
		setColor(`rgb(${r},${g},${b})`)
	 
	}
	useEffect(()=>{
		if (typeOfColor ==='rgb')handleRandomRgbColor()
		else handleRandomHexColor()

	},[typeOfColor])


    return (
        <div className="wrapper">

            <div className="container">
                <div className="color" style={{backgroundColor: color}}>
                    <h1>Random Color Generater</h1>
                    <h2>{typeOfColor} color <br />
										 {color}</h2>
                </div>
                <button onClick={typeOfColor === 'HEX'? handleRandomHexColor:handleRandomRgbColor}>Generate Random Color</button>
                <button onClick={()=> setTypeOfColor('HEX')}>Create HEX Color</button>
                <button onClick={()=> setTypeOfColor('RGB')}>Generate RGB Color</button>
            </div>
        </div>
    )
}
