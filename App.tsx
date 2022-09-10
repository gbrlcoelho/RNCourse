import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import {TasksProvider} from './src/context/TasksContext'
import {Home} from './src/views/Home/Home'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#121214'} />
      <SafeAreaView style={{flex: 1}}>
        <TasksProvider>
          <Home />
        </TasksProvider>
      </SafeAreaView>
    </>
  )
}

export default App
