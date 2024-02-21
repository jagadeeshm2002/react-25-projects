import React, { useState } from 'react';
import './lightdark.css'
import useLocalStorage from './useLocalStorage';

export default function LightDark() {

    const[theme,setTheme] =useLocalStorage('theme',"dark")

    function handleToggleTheme(){
        setTheme(theme === 'white'?'dark': 'white')
    }
  return (
    <div className="container" data-theme={theme}>
        <h1 >{theme ==='dark'?'You are developer 😎': `too bright! why using light mode , are you real developer🤧`}</h1>
        <button onClick={()=>handleToggleTheme()}>{theme ==="dark"?'Dark Mode':'Light Mode'}</button>
    </div>
  )
}

  

// style={{backgroundColor:theme ==="white"? "white":"#050505" }}