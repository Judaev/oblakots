import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Title } from 'react-native-paper'
import AddCategory from './AddCategory'


const HeaderTitle: React.FC = (props) => {
  return(
    <View>
      <Title style={styles.title}>
          Задачи
        </Title>
    </View>
      
  )  
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 40,
    paddingLeft: 60
  }
})

export default HeaderTitle