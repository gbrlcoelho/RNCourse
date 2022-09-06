import React, {useState} from 'react'
import {Button, ButtonText, Container, HomeTitle, Input, TasksTitle} from './HomeBase'

export const Home = () => {
  const [newTask, setNewTask] = useState('')

  return (
    <Container>
      <HomeTitle>Hello Dev!</HomeTitle>
      <Input placeholder='Nova Tarefa' placeholderTextColor='#555' onChangeText={setNewTask} />
      <Button activeOpacity={0.7}>
        <ButtonText>Adicionar</ButtonText>
      </Button>
      <TasksTitle>Minhas Tarefas</TasksTitle>
    </Container>
  )
}
