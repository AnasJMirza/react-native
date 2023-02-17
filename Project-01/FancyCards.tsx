import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://images.unsplash.com/photo-1470756544705-1848092fbe5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.title}>The Faisal Mosque</Text>
            <Text style={styles.address}>Islamabad, Pakistan</Text>
            <Text style={styles.description}>The Faisal Mosque is the work of Turkish architect Vedat Dalokay, who won the Aga Khan Award for Architecture for the project. The mosque's architecture is modern and unique, lacking both the traditional domes and arches of most other mosques around the world.</Text>
            <Text style={styles.footer}>4 hourse away</Text>
        </View>
      </View>


      <View style={styles.card}>
        <Image 
        source={{
            uri: 'https://images.unsplash.com/photo-1617128072203-310a93722ad8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1237&q=80',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.title}>The Badshahi Mosque</Text>
            <Text style={styles.address}>Lahore, Pakistan</Text>
            <Text style={styles.description}>The Badshahi Mosque was constructed by the Mughal emperor Aurangzeb between 1671 and 1673. The mosque is an important example of Mughal architecture, with an exterior that is decorated with carved red sandstone with marble inlay.</Text>
            <Text style={styles.footer}>2.5 hourse away</Text>
        </View>
      </View>


      <View style={styles.card}>
        <Image 
        source={{
            uri: 'https://images.unsplash.com/photo-1622546758596-f1f06ba11f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=921&q=80',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.title}>Minar-e-Pakistan</Text>
            <Text style={styles.address}>Lahore, Pakistan</Text>
            <Text style={styles.description}>Naseer-Ud-Din Murat completed the design of Minar-e-Pakistan. It's a symbol of consummate architectural design, famous worldwide for its unique structure. Weeing from above, the form of the Minar-e-Pakistan symbolizes a star resting on the ground.</Text>
            <Text style={styles.footer}>2.5 hourse away</Text>
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

    card: {
        margin: 12,
        height: 370,
        width: 340,
        backgroundColor: '#ffffff',
        borderRadius: 4,
    },

    cardElevated: {
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#212121',
    },

    cardBody: {
        paddingHorizontal: 14,
        marginTop: 8,
    },

    cardImage: {
        height: 170,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },

    title: {
        color: '#000000',
        fontWeight: '900',
        fontSize: 22,
    },

    address: {
        color: '#585858',
        fontSize: 12,
    },

    description: {
        color: '#212121',
        fontSize: 13,
        marginVertical: 12,
    },

    footer: {
        color: '#585858',
    },


})