import React, {useState} from 'react'
import {TaskList} from '../../components/TaskList/TaskList'
import {useTasks} from '../../hooks/useTasks'
import {Button, ButtonText, Container, HomeTitle, Input, TasksTitle} from './HomeBase'

export const Home = () => {
  const [newTask, setNewTask] = useState('')
  const {addTask} = useTasks()

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Empty task!',
    }
    addTask(data)
  }

  return (
    <Container>
      <HomeTitle>Hello Dev!</HomeTitle>
      <Input placeholder='Nova Tarefa' placeholderTextColor='#555' onChangeText={setNewTask} />
      <Button activeOpacity={0.7}>
        <ButtonText onPress={handleAddNewTask}>Adicionar</ButtonText>
      </Button>
      <TasksTitle>Minhas Tarefas</TasksTitle>
      <TaskList />
    </Container>
  )
}
