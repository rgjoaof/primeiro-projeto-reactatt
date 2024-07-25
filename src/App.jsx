import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';



import { Container, ToDoList, Input, Button, ListItem, Trash, Check, MessageH3 } from './styles';



function App() {
  const [list, setList] = useState([])
  const [InputTask, setInputTask] = useState('')

  function inputChange(event) {
    setInputTask(event.target.value)
  }

  function buttonClick() {
    if (InputTask) {
      setList([...list, { id: uuid(), task: InputTask, finished: false }])
    }
    else {
      alert("Adicione ao menos uma tarefa para ser concluida !")
    }
  }


  function finishTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function trashItem(id) {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputChange} placeholder="O que tenho para fazer ... ?" />
        <Button onClick={buttonClick} >Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map(item => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finishTask(item.id)} />
                <li> {item.task} </li>
                <Trash onClick={() => trashItem(item.id)} />
              </ListItem>
            ))
          ) : (
            <MessageH3>Não há itens na lista.</MessageH3>
          )
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
