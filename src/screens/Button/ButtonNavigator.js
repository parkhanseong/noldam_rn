import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator, StackNavigator, createDrawerNavigator } from "react-navigation";
import { ButtonScreen, ButtonNextScreen } from "../../screens/Button";
//import { colors } from '../../lib/styleUtils'

//const ButtonNavigator = createDrawerNavigator(
const ButtonNavigator = createStackNavigator(
    {
        Button: {
            screen: ButtonScreen,
            navigationOptions: {
                title: "버튼 탭 화면",
                headerBackTitle: " header "
            }
        },
        ButtonNext: {
            screen: ButtonNextScreen,
            navigationOptions: {
            title: "다음 화면"
            }
        }
    },
    {}
  );
  

export default ButtonNavigator 