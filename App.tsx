import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import {Home} from './src/views/Home/Home'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#121214'} />
      <SafeAreaView style={{flex: 1}}>
        <Home />
      </SafeAreaView>
    </>
  )
}

export default App
