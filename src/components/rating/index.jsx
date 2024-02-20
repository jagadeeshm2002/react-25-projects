import React, { useState } from 'react';
import './style.css';
import {FaStar} from 'react-icons/fa';

export default function Rating({noOfStars = 5}) {
  const text=['🥶','😭',"😞",'😋','🤩','🥳','🥰']

  const [rating,setRating]=useState(0);
  const[hover,setHover]=useState(0);
  

  function handleClick(getCurrentIndex){
    setRating(getCurrentIndex)
  }
  function handleMouseEnter(getCurrentIndex){
    setHover(getCurrentIndex )
  }
  function handleMouseLeave(){
    setHover(rating)
  }
  return (
    <div className="wrapper">
        <div className="container">
            <p>{text[hover]}</p>
            <div>{
                [...Array(noOfStars)].map((_,index)=>{
                    index +=1

                    return <FaStar
                    key={index}
                    className={index <= (hover||rating)? 'active':'inactive'}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave}
                    size={40  }
                    />
                })
            }</div>

        </div>
    </div>
  )
}
