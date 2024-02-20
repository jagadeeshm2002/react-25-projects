import { React, useState } from 'react';

import data from './data.js'
import './style.css'

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);


  function handleSingleSelection(getCurrentId) {

    setSelected(getCurrentId === selected ? null : getCurrentId);

  }
  function handleMultiSelection(getCurrentId) {
    console.log(getCurrentId)
    let newList = [...multiple];
    const findIndexOfCurrentId = newList.indexOf(getCurrentId)
    if (findIndexOfCurrentId === -1) newList.push(getCurrentId)
    else newList.splice(findIndexOfCurrentId,1)
    setMultiple(newList)


  }
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi accordian</button>
      <div className="accordian">
        {
          data && data.length > 0 ? data.map(dataItem =>
            <div className="item">
              <div className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)}>
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && <div className='content'> {dataItem.answer}</div>:selected === dataItem.id && <div className="content">{dataItem.answer}</div>
              }
              
            </div>  

          ) :
            <div>no data found</div>}
      </div>
    </div>
  )
}
