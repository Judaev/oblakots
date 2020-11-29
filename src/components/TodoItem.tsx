import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { RadioButton, Text } from 'react-native-paper'

interface Todo {
  text: string
  key: number
}

const TodoItem: React.FC<Todo> = (props) => {
  const [expanded, setExpanded] = React.useState(true)

  const [checked, setChecked] = React.useState('first')

  return (
    <TouchableOpacity style={styles.main}>
      <RadioButton
        color='#2b00ff'
        value="first"
        disabled={false}
        uncheckedColor='#000'
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => {
          if(checked === 'first') {
            setChecked('second')
          } else {
            setChecked('first')
          }
        }
          }
      />
        <Text>{props.text}</Text>
      </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10,
    padding: 15,
    alignItems: 'center',
    fontSize: 20,
    width: '100%',
  }
})

export default TodoItem
