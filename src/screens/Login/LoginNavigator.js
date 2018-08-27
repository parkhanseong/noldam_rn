import React from 'react'
//import { createStackNavigator } from 'react-navigation';
import { LoginScreen } from '../../screens/Login';
import { MainTab } from '../../screens/base';

import { createStackNavigator, StackNavigator, SwitchNavigator } from 'react-navigation'; 

// const LoginNavigator = createStackNavigator({

//     Login: {
//         screen : LoginScreen,
//         navigationOptions: {
//             title: "로그인",
//             headerBackTitle: " "
//         }
//     },
//     MainTab: {
//         screen : MainTab,
//         navigationOptions: {
//             title: "다음화면"
//         }
//     }
// },
// {

// })

//export default LoginNavigator

const AppStack = StackNavigator({ Home: LoginScreen });
const AuthStack = StackNavigator({ Login: LoginScreen });

export default SwitchNavigator(
    {
      //AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: MainTab,
    },
    // {
    //   initialRouteName: 'AuthLoading',
    // }
  );
  

