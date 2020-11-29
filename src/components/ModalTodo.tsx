import React from 'react'
import AddTodo from './AddTodo'
import { FlatList, ScrollView, StyleSheet, Modal, View } from 'react-native'
import { Text, Appbar } from 'react-native-paper'

const ModalTodo: React.FC = () => {
  return (
    <Modal animationType="slide" visible={visible}>
      <Text>
        <Appbar.Header>
          <Appbar.BackAction onPress={hideModal} />
        </Appbar.Header>
        <AddTodo />
      </Text>
    </Modal>
  )
}

export default ModalTodo