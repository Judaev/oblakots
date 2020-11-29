import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

const TodoList: React.FC = (props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.item} >
        {props.list.category}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  item: {
    fontSize: 20,
    fontWeight: '400',
  }
})

export default TodoList