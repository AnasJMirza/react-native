import React, { useLayoutEffect } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets/images'
import * as Animatable from 'react-native-animatable';

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
            <Text  style={styles.logoAdjacentText}>Travel</Text>
        </View>


        <View style={styles.TextSection}>
            <Text style={styles.headingText} animation={"zoomInUp"}>Enjoy the trip</Text>
            <Text style={styles.subHeadingText}>With good moments</Text>
            <Text style={styles.paraText}>You are about to experience the best travel application. We hope you will like this application</Text>
        </View>


        <View style={styles.imageSection}>
            <View style={styles.circleDark}></View>
            <View style={styles.circleLight}></View>
            
            <Animatable.Image 
            source={HeroImage}
            style={styles.imageStyle}
            animation={'fadeIn'}
            easing={'ease-in-out'}
            />

            
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Main')}
                >
                    <Animatable.View 
                    style={styles.button}
                    animation={'pulse'}
                    iterationCount={'infinite'}
                    >
                        <Text>Anas</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </View>
            
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
        fontWeight: '900',
    },

    subHeadingText: {
        fontSize: 40,
        color: 'black',
        fontWeight: '900',
        color: '#E07C24',
    },

    paraText: {
        color: '#212121',
        fontSize: 16,
        marginVertical: 10,
    },

    imageSection: {
        // borderWidth: 3,
        flex: 1,
        position: 'relative',
    },

    circleDark: {
        width: 350,
        height: 350,
        backgroundColor: '#E07C24',
        borderRadius: 350/2,
        position: 'absolute',
        bottom: -60,
        left: -120,
    },

    circleLight: {
        width: 350,
        height: 350,
        backgroundColor: '#f39f55',
        borderRadius: 350/2,
        position: 'absolute',
        bottom: 60,
        right: -100,
    },

    imageStyle: {
        // resizeMode: 'contain',
        width: '100%',
        height: '100%',
        // position: 'relative',
        // bottom: 0,
        // zIndex: 1,
    },

    buttonWrapper: {
        height: 60,
        width: 60,
        // backgroundColor: '#E07C24',
        borderTopWidth: 4,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#E07C24',
        position: 'absolute',
        left: '50%',
        bottom: '20%',
        transform: 'translateX(-30px)',
        borderRadius: 60/2,

        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        height: 50,
        width: 50,
        backgroundColor: '#E07C24',
        borderRadius: 50/2,

        justifyContent: 'center',
        alignItems: 'center',
    }
})