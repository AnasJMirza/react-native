import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from '../assets/images';
import { article1, article2, article3, article4, article5,} from '../assets/images';


export const images = [
  {
      image: article1,
      text: 'Africa'
  },
  {
      image: article2,
      text: 'Europe'
  },
  {
      image: article3,
      text: 'Pakistan'
  },
  {
      image: article4,
      text: 'Sydney'
  },
  {
      image: article5,
      text: 'Iran'
  },

  {
      image: article2,
      text: 'Europe'
  },
  {
      image: article3,
      text: 'Pakistan'
  },
  {
      image: article4,
      text: 'Sydney'
  },
  {
      image: article5,
      text: 'Iran'
  },

]

const Main = () => {

  const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileSection}>
        <View>
          <Image 
          source={Avatar}
          style={styles.avatar}
          />
        </View>

        <View>
          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.userName}>Anas J Mirza</Text>
        </View>
      </View>

      <View style={styles.articleSection}>
        <Text style={styles.articleHeading}>Explore</Text>
        
        <ScrollView style={styles.articleImageSection} horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            images.map((item) => (
              <View>
                <Image
                source={item.image}
                style={styles.articleImage}
                />
                <Text style={styles.articleImageText}>{item.text}</Text>
              </View>
            ))
          }
          
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAE5D2',
    },

    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7,
      paddingHorizontal: 25,
      marginVertical: 20,
    },

    avatar: {
      width: 60,
      height: 60,
      borderRadius: 60/2,
    },

    welcome: {
      fontSize: 14,
      fontWeight: '900',
    },

    userName: {
      fontSize: 18,
      fontWeight: '900',
      color: 'black',
    },

    // Article Section

    articleSection: {
      
    },

    articleImageSection: {
      paddingHorizontal: 12,
    },

    articleHeading: {
      marginHorizontal: 25,
      marginBottom: 20,
      fontWeight: '900',
      fontSize: 24,
      color: 'black'
    },

    articleImage: {
      marginHorizontal: 4,
    },

    articleImageText: {
      marginHorizontal: 13,
      color: 'white',
      fontWeight: '900',
      fontSize: 15,
      position: 'absolute',
      bottom: 13,
    }
});