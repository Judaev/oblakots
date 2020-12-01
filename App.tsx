import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, StyleSheet, Modal, View, TouchableHighlight, FlatList } from 'react-native'
import { Title, Text, Button, TextInput } from 'react-native-paper'
import AddTodo from './src/components/AddTodo'
import Category from './src/components/Category'
import Fab from './src/components/Fab'
import HeaderTitle from './src/components/HeaderTitle'
import Todo from './src/components/Todo'
import TodoItems from './src/components/TodoItems'
import state, { addTodo, setCategory, addNewCategory } from './src/redux/state'

interface State {
  state: object
  category: string
  todos: []
  key: number
  finished: []
}

const App: React.FC<State> = () => {

  const [visible, setVisible] = React.useState<boolean>(false)
  
  const [visible2, setVisible2] = React.useState<boolean>(false)
  
  const [textInput, setTextInput] = React.useState<string>('')

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const showModal2 = () => setVisible2(true)
  const hideModal2 = () => setVisible2(false)

  const onChangeCategory = (text: string) => {
    setTextInput(text)
  }

  const createCategory = () => {
    addNewCategory(textInput)
    setTextInput('')
  }

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <ScrollView>

        <HeaderTitle showModal2={showModal2} />

        <Modal animationType="slide" visible={visible}>
          <View>
              <AddTodo hideModal={hideModal} addTodo={addTodo} newTodo={state.newTodo} />
            <View style={styles.category}>
            <Title style={ {color: '#999999'} }>Категории</Title>
            { state.todoList.map( item => <Category category={item.category} id={item.id} setCategory={setCategory} /> ) }  
            </View>
          </View>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={visible2} >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalItem}>
                { state.todoList.map( item => <View style={styles.modalText}>
                  <Text id={item.id} style={styles.categoryTitle}> {item.category} </Text>
                  <Text>Delete</Text>
                  </View> ) 
                }
              </View>

              <View style={styles.createCategory}>
                <TextInput mode='outlined' onChangeText={ text => onChangeCategory(text) } value={textInput} placeholder='Название задачи' autoCorrect={false} autoCapitalize='none' style={styles.inputCategory} /> 
                <Button mode="contained" onPress={createCategory} icon='plus' />
              </View>
              
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={hideModal2}
              >
                <Text style={styles.textStyle}>Скрыть</Text>

              </TouchableHighlight>
              
            </View>
          </View>
        </Modal>

        { state.todoList.map( item => <TodoItems id={item.id} category={item.category} todos={item.todos} key={item.id} /> )}

        
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
  row: {
    flexDirection: 'row'
  },
  category: {
    paddingTop: 50,
    paddingHorizontal: 10,
    fontSize: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalItem: {
    marginVertical: 20
  },
  modalText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 8
  },
  categoryTitle: {
    fontSize: 20,
  },
  createCategory: {
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  inputCategory: {
    width: '80%',
    height: 40,
  },
  buttonCategory: {
    width: '20%',
    height: 40,
  }
})

export default App

{/* <FlatList
          data={state.todoList}
          keyExtractor={ item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <TodoItems list={item} />}
        /> */}



        {/* {state.map( item => <AddTodo category={item.category} /> )} */}
              

              {/* <AddTodo state={state} />   */}


              {/* <Modal animationType='slide' visible={visible2} style={styles.addCategory} >
          <View >
            <Appbar.Header>
              <Appbar.BackAction onPress={hideModal2} />
            </Appbar.Header>
            <Text>Modal its me!</Text>
          </View>
        </Modal> */}