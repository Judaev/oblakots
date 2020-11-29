import * as React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { FAB } from 'react-native-paper';

interface IModal {
  onModal(): void
}

const Fab: React.FC<IModal> = ({onModal}) => (
    <FAB
      style={styles.fab}
      icon="plus"
      onPress={ onModal }
    />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default Fab;