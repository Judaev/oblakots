import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Title, Text, Button } from 'react-native-paper'
import AddCategory from './AddCategory'


const HeaderTitle: React.FC = (props) => {
  return(
    <View style={styles.main} >
      <Title style={styles.title}>
          Задачи
        </Title>
      <Button icon='expand-all' style={styles.add} onPress={props.showModal2} />
    </View>
      
  )  
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingLeft: 60,
  },
  add: {
    width: 70,
    height: 70,
    color: 'blue',
  }
})

export default HeaderTitle