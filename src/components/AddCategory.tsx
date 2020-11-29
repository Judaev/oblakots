import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const AddCategory = () => {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <Image
        style={styles.logo}
        source={{
          uri:
            'https://www.flaticon.com/svg/static/icons/svg/392/392031.svg',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default AddCategory