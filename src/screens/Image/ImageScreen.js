import React from 'react'
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import { colors } from '../../lib/styleUtils';

const ImageScreen = () => {
    const urlString = 
    "http://img.kormedi.com/news/article/__icsFiles/afieldfile/2012/05/29/0529childer_c.jpg";
    return (
        <View style={styles.container}>
            {/* <Image source={require('../../images/iconCreditCard.png')}></Image> */}
         {/* <Image style={styles.image} source={{ uri: urlString }}
            resizeMode="contain"
            /> */}
            <ImageBackground source={{uri: 'https://facebook.github.io/react/logo-og.png'}}></ImageBackground>
            <Text>test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: Image.resizeMode,
        backgroundColor: "black"
    }

})

export default ImageScreen