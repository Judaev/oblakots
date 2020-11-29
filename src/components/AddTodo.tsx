import React, { useState } from 'react'
import { Alert, View, StyleSheet } from 'react-native'
import { Button, TextInput  } from 'react-native-paper';

const AddTodo: React.FC = (props) => {

  const [valuee, setValue] = useState<string>('')

  let value: string = ''

  let newTodo: string = ''

  let onChangeText = () => {
    newTodo = value
  }

  let addTodo = (message: string) => {
    let newTodoItem = {
      title: newTodo,
      completed: false
    }
  }

  return (
    <View style={styles.main}>
      <TextInput style={styles.input} onChangeText={setValue} value={value} placeholder='Введите задачу...' autoCorrect={false} autoCapitalize='none' />
      <Button  mode="contained" onPress={addTodo}>
        Press me
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '70%',
    height: 40,
    padding: 5,
    borderColor: 'grey',
    borderWidth: 1
  },
  button: {
    width: '30%',
  }
})

export default AddTodo