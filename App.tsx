import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, ScrollView, StyleSheet, Modal, View } from 'react-native'
import { Text, Appbar } from 'react-native-paper'
import AddTodo from './src/components/AddTodo'
import Fab from './src/components/Fab'
import HeaderTitle from './src/components/HeaderTitle'
import TodoItems from './src/components/TodoItems'
import TodoList from './src/components/TodoList'
import state from './src/redux/state'

interface State {
  state: object
  category: string
  todos: []
  key: number
  finished: []
}

const App: React.FC<State> = (props) => {

  const [visible, setVisible] = React.useState<boolean>(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)
  const containerStyle = { backgroundColor: 'white', padding: 20 }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <HeaderTitle />
        <Modal animationType="slide" visible={visible}>
          <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={hideModal} />
              </Appbar.Header>
              <AddTodo state={state} />  
          </View>
        </Modal>
        { state.map( item => <TodoItems id={item.id} category={item.category} todos={item.todos} key={item.id} finished={item.finished} /> )}
      </ScrollView>
      <Fab onModal={showModal} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default App

{/* <FlatList
          data={state}
          keyExtractor={(item) => item.category}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <TodoList list={item} />}
        /> */}