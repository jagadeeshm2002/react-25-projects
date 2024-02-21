import React, { useState } from 'react';
import MenuList from './menu-list';
import "./navbar.css";   

export default function MenuItem({item}) {
    const[displayCurrentChildren,setDisplayCurrentChildren]=useState({})


    function handleToggleChildren(getLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,[getLabel]:!displayCurrentChildren[getLabel],
            
        });
      
    }

  return (
    <li className="menu-item-container">
        <div>
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? <span onClick={()=>handleToggleChildren(item.label)}>{displayCurrentChildren[item.label]?"-":"+"}</span>:null
            }
        </div>
        {
            item&& item.children && item.children.length >0 && displayCurrentChildren[item.label] ? <MenuList list={item.children}/>:null
        }
    </li>
  )
}
 