import React, {useState} from 'react'
import {TaskList} from '../../components/TaskList/TaskList'
import {Button, ButtonText, Container, HomeTitle, Input, TasksTitle} from './HomeBase'
import {TaskListState} from './HomeTypes'

export const Home = () => {
  const [newTask, setNewTask] = useState('')
  const [taskList, setTaskList] = useState<TaskListState[]>([])

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Empty task!',
    }
    setTaskList([...taskList, data])
  }

  return (
    <Container>
      <HomeTitle>Hello Dev!</HomeTitle>
      <Input placeholder='Nova Tarefa' placeholderTextColor='#555' onChangeText={setNewTask} />
      <Button activeOpacity={0.7}>
        <ButtonText onPress={handleAddNewTask}>Adicionar</ButtonText>
      </Button>
      <TasksTitle>Minhas Tarefas</TasksTitle>
      <TaskList data={taskList} />
    </Container>
  )
}
