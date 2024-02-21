import React, { useEffect, useState } from 'react'
import './tictoctoe.css'

export default function TicTocToe() {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true)
  const[status,setStatus] = useState( "")
  console.log(squares)

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares]
    if(getWinner(cpySquares)|| cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? 'x' : 'o'
    setIsXTurn(!isXTurn)
    setSquares(cpySquares)
    
 
  }

  useEffect(()=>{
     if(!getWinner(squares) && squares.every(item=> item !== '') ){
      setStatus(`this is a draw! Please restart the game`)
     }else if(getWinner(squares)){
      setStatus(`winner is ${getWinner(squares)}`)
     }else if(squares.every(item=> item === '')){
      setStatus(`X has a first move`)
     }else{setStatus(`Next player is ${isXTurn? 'X':"O"}`)}
  },[squares,isXTurn])
  
  function getWinner(squares){
    const winningPartterns =[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];  
    for(let i=0; i<winningPartterns.length;i++){
       const[x,y,z]=winningPartterns[i];
       if(squares[x] && squares[x] === squares[y]&& squares[x] ===squares[z]){
        return squares[x];
       }
    }
    return null;
  }
  function handleRestart(){
    setSquares(Array(9).fill(''))
    setIsXTurn(true)
    setStatus("")
    
  }

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]}  onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
        <h1>{status ? status : null}</h1>
        <button onClick={handleRestart}>Restart</button>
    </div>
  )
}

function Square({ value, onClick }) {

  return <button onClick={onClick} className='square'>{value}</button>
}
