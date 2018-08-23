import React from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { TextScreen } from '../../screens/Text'
import { ImageScreen } from '../../screens/Image'
// import { ImageScreen } from '../../screens/Image'
//import { TextInputScreen } from '../../screens/TextInput'
import { ButtonScreen, ButtonNextScreen, ButtonNavigator } from '../../screens/Button'
// import { LoginNavigator } from '../../screens/Login_'
import { colors } from '../../lib/styleUtils';

const MainTab = createBottomTabNavigator({
    Text: {
        screen: TextScreen,
        navigationOptions: {
            tabBarLabel: '텍스트',
            tabBarIcon: ({tintColor}) => (
                <Icon name="md-home" type="ionicon" size={28} color={tintColor}/>
            )
        }
    },
    Image: {
        screen: ImageScreen,
        navigationOptions: {
            tabBarLabel: '이미지',
            tabBarIcon: ({tintColor}) => (
                <Icon name="rainbow" type="entypo" size={28} color={tintColor}/>
            )
        }
    },
    Button: {
        screen: ButtonNavigator,
        navigationOptions: {
            tabBarLabel: '버튼',
            tabBarIcon: ({tintColor}) => (
                <Icon name="camera" type="entypo" size={28} color={tintColor}/>
            )
        }
    },
    // ButtonNext: {
    //     screen: ButtonNextScreen,
    //     navigationOptions: {
    //         tabBarLabel: '버튼--',
    //         tabBarIcon: ({tintColor}) => (
    //             <Icon name="camera" type="entypo" size={28} color={tintColor}/>
    //         )
    //     }
    // },

}, 
{
    tabBarOptions: {
        activeTintColor: colors.main,
        style: {
            backgroundColor: 'yellow',
        }
    },
    swipeEnabled:false
})

export default MainTab