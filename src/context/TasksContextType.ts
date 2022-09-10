export interface ITask {
  id: string
  title: string
}

export interface ITasksContext {
  tasksData: ITask[]
  addTask: (value: ITask) => void
  removeTask: (value: string) => void
}

export interface ChildrenProps {
  children: React.ReactNode
}
