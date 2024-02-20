import React, { useState } from 'react';
import './style.css';
import Modal from './model.jsx'

export default function ModelTest() {
    const[showModalPopup,setShowModalPopup] = useState(false)

    function handleToggleModelPopup(){
        setShowModalPopup(!showModalPopup)
        console.log(showModalPopup)

    }
    function onClose(){
        setShowModalPopup(false)
    }
  return (
    <div className='wrapper'>
        <button onClick={handleToggleModelPopup}>open model</button>
        {
            showModalPopup && <Modal onClose={onClose} body={<div>jagadeesh</div>} />
        }
    </div>
  )
}
