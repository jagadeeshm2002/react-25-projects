import React from 'react';
import "./navbar.css";  

import MenuList from './menu-list.jsx';

export default function NavMenu({menus  = []}) { 
  return (
    <div className="tree-view-container">
      <MenuList list={menus}/>
        
    </div>
  )
}
