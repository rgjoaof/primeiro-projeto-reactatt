import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { FcFullTrash, FcCheckmark  } from "react-icons/fc";

import { Container, ToDoList, Input, Button, ListItem } from './styles';



function App() {
  const [list, setList] = useState([{ id: uuid(), task: 'event.target.value' }])
  const [InputTask, setInputTask] = useState('')

  function inputChange(event) {
    setInputTask(event.target.value)
  }

  function buttonClick() {
    setList([...list, { id: uuid(), task: InputTask }])
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputChange} placeholder="O que tenho para fazer ... ?" />
        <Button onClick={buttonClick} >Adicionar</Button>

        <ul>
          {
            list.map(item => (
              <ListItem>
              <FcCheckmark/>
              <li key={item.id}> {item.task} </li>
              <FcFullTrash/>
              </ListItem>
            ))
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
