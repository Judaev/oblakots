import React from 'react'
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { RadioButton, Text } from 'react-native-paper'
import { deleteTodo, onCompleted } from '../redux/state'
// import { RectButton } from 'react-native-gesture-handler';
// import Swipeable from 'react-native-gesture-handler';


interface Todo {
  text: string
  key: number
  id: number
  onCompleted: boolean
  completed: boolean
}

const TodoItem: React.FC<Todo> = (props) => {
  const [expanded, setExpanded] = React.useState(true)

  const [checked, setChecked] = React.useState('first')

  // const rightAction = (dragX: any, index: any) => {
  //   <TouchableOpacity>
  //     <Animated.View>
  //       <Animated.Text>
  //         Delete
  //       </Animated.Text>
  //     </Animated.View>
  //   </TouchableOpacity>
  // }

  return (
      <TouchableOpacity style={styles.main} activeOpacity={0.5} >
          <RadioButton
            color='#2b00ff'
            value="first"
            disabled={false}
            uncheckedColor='#000'
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={ () => {
              if(checked === 'first') {
                setChecked('second')
              } else {
                setChecked('first')
              }
            }
              }
          />
          <View style={styles.item}>
            <Text style={styles.text}>{props.text}</Text>
            <Button  title='delete' mode="contained" onPress={() => deleteTodo(props.key)}/>
          </View>
          
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignContent: 'center',
    textAlignVertical: 'center',
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 18,
    paddingLeft: 20
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  delete: {
    color: 'red',
    marginRight: 30,
  }
})

export default TodoItem
