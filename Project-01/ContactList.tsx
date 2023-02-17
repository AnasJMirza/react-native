import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
          uid: 1,
          name: 'Anas J Mirza',
          status: 'Coffee and Code ☕',
          imageUrl: 'https://avatars.githubusercontent.com/u/90819686?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
          uid: 5,
          name: 'Anas J Mirza',
          status: 'Coffee and Code ☕',
          imageUrl: 'https://avatars.githubusercontent.com/u/124073568?s=100&v=4',
        },
        {
          uid: 6,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/95042433?s=100&v=4',
        },
        {
          uid: 7,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/80899001?s=100&v=4',
        },
        {
          uid: 8,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/94473513?s=100&v=4',
        },
      ];
    
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>

      {
        contacts.map((item) => (
            <ScrollView key={item.uid}>
                <View style={styles.card}>
                    <Image 
                    source={{
                        uri: item.imageUrl
                    }}
                    style={styles.contactImage}
                    />

                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.status}>{item.status}</Text>
                    </View>
                </View>
            </ScrollView>
        ))
      }
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

    contactImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },

    card: {
        flexDirection: 'row',
        gap: 13,
        alignItems: 'center',
        marginHorizontal: 12,
        marginTop: 17,
    },

    name: {
        fontSize: 17,
        fontWeight: '900',
    },

    status: {},


})