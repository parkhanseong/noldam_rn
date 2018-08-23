import React from 'react'
import { StyleSheet, View } from 'react-native'
//import { MainTab } from './src/screens/base'
import { LoginScreen, LoginNavigator } from './src/screens/Login';
//import { MainTab } from './src/screens/base'

const App = () => {
    
    return (
      <LoginNavigator/>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})

export default App