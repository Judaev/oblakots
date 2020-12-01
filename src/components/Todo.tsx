import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Todo: React.FC = () => {
  return (
    <View style={styles.main}>
      <View style={styles.text}>
        <Text >

        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => {}} >
          <Text>Text</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles =StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    flex: 1,
  },
  button: {
    
  }
})

export default Todo