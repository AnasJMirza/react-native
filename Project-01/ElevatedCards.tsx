import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>

      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.box, styles.green]}>
            <Text>Green</Text>
        </View>
        
        <View style={[styles.box, styles.red]}>
            <Text>Red</Text>
        </View>

        <View style={[styles.box, styles.blue]}>
            <Text>blue</Text>
        </View>

        <View style={[styles.box, styles.yellow]}>
            <Text>Yellow</Text>
        </View>

        <View style={[styles.box, styles.green]}>
            <Text>Green</Text>
        </View>

        <View style={[styles.box, styles.red]}>
            <Text>Red</Text>
        </View>

        <View style={[styles.box, styles.blue]}>
            <Text>Blue</Text>
        </View>

        <View style={[styles.box, styles.yellow]}>
            <Text>Yellow</Text>
        </View>
      </ScrollView>
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

    container: {
        margin: 12,
    },

    box: {
        width: 100,
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginRight: 8,

        elevation: 4,
        shadowOffset: {
            width: 1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
        
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