import React, { useLayoutEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.logoSection}>
            <View style={styles.logo}>
                <Text style={styles.logoText}>Go</Text>
            </View>
            <Text style={styles.logoAdjacentText}>Travel</Text>
        </View>


        <View style={styles.TextSection}>
            <Text style={styles.headingText}>Enjoy the trip</Text>
            <Text style={styles.subHeadingText}>With good moments</Text>
            <Text style={styles.paraText}>You are about to experience the best travel application. We hope you will like this application</Text>
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4CE6A',
    },

    logoSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 16,
        marginTop: 20,
    },

    logo: {
        backgroundColor: '#E07C24',
        width: 50,
        height: 50,
        borderRadius: 50/2,

        justifyContent: 'center',
        alignItems: 'center',

    },

    logoText: {
        fontSize: 20,
        fontWeight: '900',
        color: 'white',
    },

    logoAdjacentText: {
        fontSize: 30,
        fontWeight: '900',
        color: '#E07C24',
    },

    TextSection: {
        paddingHorizontal: 16,
        marginTop: 20,
    },

    headingText: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
    },

    subHeadingText: {
        fontSize: 40,
        color: 'black',
        fontWeight: '900',
    },

    paraText: {
        color: '#212121',
        fontSize: 14,
    },
})