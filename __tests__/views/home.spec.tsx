import {act, renderHook} from '@testing-library/react-hooks'
import {fireEvent, render} from '@testing-library/react-native'
import React from 'react'
import {TasksProvider} from '../../src/context/TasksContext'
import {useTasks} from '../../src/hooks/useTasks'
import {Home} from '../../src/views/Home/Home'

describe('Home Page', () => {
  test('renders correctly', () => {
    const {getByPlaceholderText} = render(<Home />)
    const inputNewTask = getByPlaceholderText('Nova Tarefa')
    expect(inputNewTask).toBeDefined()
    expect(inputNewTask.props.placeholder).toBeTruthy()
  })
  test('Verifica a inserção de um item na lista de tarefas', async () => {
    const {result} = renderHook(() => useTasks(), {
      wrapper: TasksProvider,
    })
    const data = {id: 'task01', title: 'Task01'}
    await act(() => {
      result.current.addTask(data)
    })
    expect(result.current.addTask).toBeTruthy()
  })
  test('Verifica se o click no botão insere um item na lista', async () => {
    const {getByPlaceholderText, getByTestId} = render(<Home />, {
      wrapper: TasksProvider,
    })

    const {result} = renderHook(() => useTasks(), {
      wrapper: TasksProvider,
    })

    const inputNewTask = getByPlaceholderText('Nova Tarefa')
    const button = getByTestId('addButton')
    const data = {id: 'task01', title: 'Task01'}

    act(() => {
      fireEvent.changeText(inputNewTask, data.title)
    })

    await act(async () => {
      await fireEvent.press(button)
    })
    expect(result.current.addTask).toBeTruthy()
  })
})
