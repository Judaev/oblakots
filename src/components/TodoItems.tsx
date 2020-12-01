import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Title, List } from 'react-native-paper'
import TodoItem from './TodoItem'

interface Todos {
  category: string
  title: string
  todos: []
  key: number
  id: number
  finished: []
  text: string
  completed: boolean
  setComp: boolean
}

const TodoItems: React.FC<Todos> = (props) => {
  return (
    <View style={styles.main}>
      <Title style={styles.category}>{props.category}</Title>
        <View style={styles.items}>{ props.todos.map( todos => <TodoItem key={todos.id} text={todos.title} setComp={todos.completed} /> ) }</View>
        <List.Section>
          <List.Accordion title="Завершенные">

            {
              props.todos.map( item => {
                if(item.completed = true) {
                  return <List.Item title={item.title} />  
                }
              })
            }
            
            
            {/* <List.Item title="Второе задание" /> */}
          </List.Accordion>
      </List.Section>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    padding: 15
  },
  category: {
    paddingLeft: 15,
    color: '#999999',
    textTransform: 'uppercase',
    fontSize: 16
  },
  items: {
    flexDirection: 'column',
    width: '100%',
  },
  list: {
    fontSize: 18
  },
  listItem: {
    textDecorationLine: 'line-through'
  }
})

export default TodoItems