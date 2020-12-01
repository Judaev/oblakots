import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Title, RadioButton, Text } from 'react-native-paper';

interface Props {
  category: string
  id: number
}

const Category: React.FC<Props> = (props) => {

  const [checked, setChecked] = React.useState('first');

  return (
    <View style={styles.main}>
      <Text style={styles.text}>{props.category}</Text>
      <RadioButton
        color='#2b00ff'
        value="first"
        disabled={false}
        uncheckedColor='#000'
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => {
          if(checked === 'first') {
            setChecked('second')
            props.setCategory(props.id)
          } else {
            setChecked('first')
          }
        }
          }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 22,
    paddingVertical: 10,
    paddingHorizontal: 10
  }
})

export default Category