import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.red]}>
            <Text>Red</Text>
        </View>

        <View style={[styles.box, styles.blue]}>
            <Text>Blue</Text>
        </View>

        <View style={[styles.box, styles.yellow]}>
            <Text>Yellow</Text>
        </View>
        <View style={[styles.box, styles.green]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontWeight: '900',
        fontSize: 24,
        marginHorizontal: 12,
        marginTop: 8,
    },

    boxContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        padding: 12,
    },

    box: {
        width: 100,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },

    red: {
        backgroundColor: '#db3434'
    },

    blue: {
        backgroundColor: '#3477db'
    },

    yellow: {
        backgroundColor: '#e9d07e'
    },

    green: {
        backgroundColor: '#70ac69'
    },
})