import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Title, List, Text } from 'react-native-paper'
import TodoItem from './TodoItem'

interface Todos {
  category: string
  title: string
  todos: []
  key: number
  id: number
  finished: []
  text: string
}

const TodoItems: React.FC<Todos> = (props) => {
  return (
    <View style={styles.main}>
      <Title style={styles.category}>{props.category}</Title>
        <View style={styles.items}>{ props.todos.map( todos => <TodoItem text={todos.title} key={todos.id} /> ) }</View>
        <List.Section>
          <List.Accordion
            title="Завершенные задачи">
              {/* <Text>{ props.finished.map( f => <List.Item title={f.text} /> )}</Text> */}
            <List.Item title="First item" />
            <List.Item title="Second item" />
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
    color: '#999999'
  },
  items: {
    flexDirection: 'column',
    width: '100%',

  }
})

export default TodoItems