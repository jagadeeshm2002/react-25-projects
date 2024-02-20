import React, { useState } from 'react';
import "./style.css"

export default function Tabs({ tabsContent, onChange }) {
    const[currentTabIndex,setCurrentTabIndex] = useState(0 )

    function handleOnclick(getCurrentIndex){
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }


    return (
        <div className="wrapper">
            <div className="heading">
                {tabsContent.map((tabItem,index)=> <div className={index === currentTabIndex ? 'active':""} key={tabItem.label} onClick={()=> handleOnclick(index)}> <span className='label' > {tabItem.label}</span></div>)}

                
            </div>
            <div className="content">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
                

            </div>
        </div>
    )
}
