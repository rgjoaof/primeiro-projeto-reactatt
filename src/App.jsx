import React , { useState } from 'react';
import { v4 as uuid } from 'uuid';



function App() {
  const [list, setList] = useState([{ id: uuid(), task : 'event.target.value'}])
  const [InputTask, setInputTask] = useState('')
    
  function inputChange(event){
    setInputTask(event.target.value)
    }

    function buttonClick(){
      setList([ ...list, { id: uuid() , task:InputTask }])
    }

  return (
    <div>
      <input onChange={inputChange} placeholder="O que tenho para fazer ... ?" />
      <button onClick={buttonClick} >Adicionar</button>

      <ul>
        {
          list.map( item => (
            <li key={item.id}> {item.task} </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
