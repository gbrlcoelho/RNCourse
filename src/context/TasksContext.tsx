import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {createContext, useEffect, useState} from 'react'
import {ChildrenProps, ITask, ITasksContext} from './TasksContextType'

export const TasksContext = createContext<ITasksContext>({} as ITasksContext)

export const TasksProvider: React.FC<ChildrenProps> = ({children}) => {
  const [tasksData, setTasksData] = useState<ITask[]>([])

  async function loadFromStorage() {
    const tasks = await AsyncStorage.getItem('@TasksData')
    if (tasks) {
      setTasksData(JSON.parse(tasks))
    }
  }

  const addTask = async (task: ITask) => {
    try {
      const newTaskList = [...tasksData, task]
      setTasksData(newTaskList)
      await AsyncStorage.setItem('@TasksData', JSON.stringify(newTaskList))
    } catch (error) {
      throw new Error(error as string)
    }
  }

  const removeTask = async (id: string) => {
    const newTaskList = tasksData.filter((task) => task.id !== id)
    setTasksData(newTaskList)
    await AsyncStorage.setItem('@TasksData', JSON.stringify(newTaskList))
  }

  useEffect(() => {
    loadFromStorage()
  }, [])

  return <TasksContext.Provider value={{tasksData, addTask, removeTask}}>{children}</TasksContext.Provider>
}
