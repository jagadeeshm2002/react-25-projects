import React from 'react';
import './style.css';


export default function Model({id,header,body,footer,onClose}) {
  return (
    <div className="modal" id={id || 'Modal'}>
      <div className="modal-content">
        <div className="header">
          <span className='close-modal-icon' onClick={onClose}> &times;</span>
          <h2>{header?header:(<div><p>Header</p></div>)}</h2>
        </div>
        <div className="body"> {body?body:(<div><p>this is our modal body</p></div>)}</div>
        <div className="footer">{footer?footer:(<div><p>Footer</p></div>)}</div>
      </div>

    </div>
  )
}
