import React, { useState } from 'react';
import Tabs from './tabs';
import './style.css';



export default function CustomTab( ) {
    const tabs = [
        {
            label:'tab 1',
            content : <div>this is content for tab 1</div>
        },
        {
            label:'tab 2',
            content : <div>this is content for tab 2</div>
        },
        {
            label:'tab 3',
            content : <div>this is content for tab 3</div>
        }
    ]
    function handleChange(currentTabIndex){
        console.log(currentTabIndex)
    }
     
  return (
    <div className="container">
        <Tabs tabsContent={tabs} onChange={handleChange} > </Tabs>
    </div>
  )
}
