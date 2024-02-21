import React from 'react'

export default function Suggestions({data,onClick}) {
  return (
    <ul className='filteredDataul'>
        {data && data.length ?data.map((dataItem,index)=><li onClick={onClick} key={index} className='filteredData'>{dataItem}</li>):null}
    </ul>
  )
}
