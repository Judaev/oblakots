import React, { useState } from 'react'
import {  View, StyleSheet } from 'react-native'
import { Button, TextInput, Appbar } from 'react-native-paper';

const AddTodo: React.FC = (props) => {

  const [value, setValue] = useState<string>('')

  let onChange = (text: string) => {
    setValue(text)
  }

  const pressButton = () => {
    props.addTodo(value)
    setValue('')
  }

  return (
    <View style={styles.main}>

      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={props.hideModal} />
        <Button icon='check-bold'  mode="contained" onPress={pressButton} />
      </Appbar.Header>
      
      <View>
        <TextInput mode='outlined' style={styles.input} onChangeText={ text => onChange(text) } value={value} placeholder='Название задачи' autoCorrect={false} autoCapitalize='none' />  
      </View>
         
        
      {/* <View style={styles.category}>
        <Title>Категории</Title>
        { props.state.map( item => <Category category={item.category} /> ) }
      </View> */}

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
  },
  input: {
    paddingTop: 10,
    fontSize: 20,
    borderColor: '#fff'
  },
  button: {
    width: '30%',
  },
  header: {
    justifyContent: 'space-between',
  }
})

export default AddTodo