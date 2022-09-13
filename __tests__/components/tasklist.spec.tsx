import {act, renderHook} from '@testing-library/react-hooks'
import {render} from '@testing-library/react-native'
import React from 'react'
import {TaskList} from '../../src/components/TaskList/TaskList'
import {TasksProvider} from '../../src/context/TasksContext'
import {useTasks} from '../../src/hooks/useTasks'

describe('TaskList Component', () => {
  test('Verifica se um item é removido da lista', async () => {
    render(<TaskList />, {
      wrapper: TasksProvider,
    })
    const {result} = renderHook(() => useTasks(), {
      wrapper: TasksProvider,
    })
    const data = {id: 'task01', title: 'Task01'}

    await act(() => {
      result.current.addTask(data)
    })

    expect(result.current.tasksData[0].title).toEqual('Task01')

    await act(() => {
      result.current.removeTask('task01')
    })

    expect(result.current.tasksData.length).toEqual(0)
  })
})
