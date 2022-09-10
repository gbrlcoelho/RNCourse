import {useContext} from 'react'
import {TasksContext} from '../context/TasksContext'

export const useTasks = () => {
  const context = useContext(TasksContext)
  return context
}
