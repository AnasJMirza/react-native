import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {
  return (
    <View>
      <Text style={styles.text}>Main</Text>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    text: {
        color: 'black',
    }
});