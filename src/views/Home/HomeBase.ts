import {Platform} from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #121214;
  padding: 50px 30px 50px 30px;
`
export const HomeTitle = styled.Text`
  color: #f1f1f1;
  font-size: 24px;
  font-weight: bold;
`

export const Input = styled.TextInput`
  background-color: #29292e;
  color: #f1f1f1;
  font-size: 18px;
  padding: ${Platform.OS === 'ios' ? 15 : 12}px;
  margin-top: 30px;
  border-radius: 7px;
`
export const Button = styled.TouchableOpacity`
  background-color: #eba417;
  padding: ${Platform.OS === 'ios' ? 15 : 12}px;
  border-radius: 7px;
  align-items: center;
  margin-top: 20px;
`

export const ButtonText = styled.Text`
  color: #121214;
  font-size: 18px;
  font-weight: bold;
`
export const TasksTitle = styled(HomeTitle)`
  margin: 50px 0px 50px 0px;
`
export const TaskButton = styled.TouchableOpacity`
  background-color: #29292e;
  padding: 10px;
  margin-top: 10px;
  border-radius: 50px;
  align-items: center;
`
export const TasksListText = styled.Text`
  color: #f1f1f1;
  font-size: 20px;
  font-weight: bold;
`
