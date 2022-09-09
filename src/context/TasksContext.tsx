import React, {createContext} from 'react'
import {ChildrenProps, ITasksContext} from './TasksContextType'

export const TasksContext = createContext<ITasksContext>({} as ITasksContext)

export const TasksProvider: React.FC<ChildrenProps> = ({children}) => {
  return <TasksContext.Provider value={{id: '1', title: 'Task-01'}}>{children}</TasksContext.Provider>
}
