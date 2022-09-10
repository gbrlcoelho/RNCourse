import React from 'react'
import {Alert, FlatList} from 'react-native'
import {useTasks} from '../../hooks/useTasks'
import {TaskButton, TasksListText} from '../TaskListBase'

export const TaskList = () => {
  const {tasksData, removeTask} = useTasks()

  const handleRemoveTask = (id: string) => {
    Alert.alert('Tem certeza?', 'Deseja excluir a tarefa?', [
      {text: 'Cancelar', onPress: () => {}},
      {
        text: 'Excluir',
        onPress: () => {
          removeTask(id)
        },
      },
    ])
  }

  return (
    <FlatList
      data={tasksData}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TaskButton onPress={() => handleRemoveTask(item.id)}>
          <TasksListText>{item.title}</TasksListText>
        </TaskButton>
      )}
    />
  )
}
