import React, {useState} from 'react'
import {FlatList} from 'react-native'
import {Button, ButtonText, Container, HomeTitle, Input, TaskButton, TasksListText, TasksTitle} from './HomeBase'
import {TaskList} from './HomeTypes'

export const Home = () => {
  const [newTask, setNewTask] = useState('')
  const [taskList, setTaskList] = useState<TaskList[]>([])

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
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TaskButton>
            <TasksListText>{item.title}</TasksListText>
          </TaskButton>
        )}
      />
    </Container>
  )
}
