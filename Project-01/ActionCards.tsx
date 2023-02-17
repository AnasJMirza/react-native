import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ActionCards() {

  const openUrl = (link: string) => {
    Linking.openURL(link);
  }

  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.heading}>Free Website Hosting 101</Text>
        </View>
        <Image 
        source={{
          uri: 'https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/9d1bc0e6ad28c03954c425341bd741b7.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3} style={styles.cardDescription}>As a web developer, you have a wide range of options for hosting your websites and web applications. While many hosting services require a fee, there are also a number of free hosting options available that can be a great choice for personal projects, small businesses, or anyone looking to get a website up and running without breaking the bank.</Text>
        </View>

        <View style={styles.cardFooter}>
          <TouchableOpacity
          onPress={()=> openUrl('https://anasjmirza.hashnode.dev/free-website-hosting-101')}
          >
            <Text style={styles.cardButton}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=> openUrl('https://instagram.com/anas.codes')}
          >
            <Text style={styles.cardButton}>Follow me</Text>
          </TouchableOpacity>
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

  card:{
    margin: 12,
    backgroundColor: '#5654af',
    height: 300,
    borderRadius: 5,
  },

  cardHeader:{
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading:{
    fontSize: 16,
    fontWeight: '800',
    color: '#ffffff',
    textDecorationLine: 'underline',
  },

  cardBody: {
    paddingHorizontal: 12,
  },

  cardDescription: {
    fontSize: 13,
    marginVertical: 12,
  },

  cardFooter: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  cardButton: {
    backgroundColor: 'crimson',
    padding: 6,
    borderRadius: 4,
    paddingHorizontal: 10,
  },

  cardImage: {
    height: 160,
  },

})