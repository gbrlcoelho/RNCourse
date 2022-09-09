import React from 'react'
import {FlatList} from 'react-native'
import {TaskButton, TasksListText} from '../TaskListBase'
import {TaskListProps} from './TaskListTypes'

export const TaskList = ({data}: TaskListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TaskButton>
          <TasksListText>{item.title}</TasksListText>
        </TaskButton>
      )}
    />
  )
}
