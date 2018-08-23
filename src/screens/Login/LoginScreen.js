import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { colors, customStyle } from '../../lib/styleUtils';
import { Navigation, StackNavigator, createStackNavigator } from 'react-navigation';
import { MainTab } from '../../screens/base';


// const LoginScreen = createStackNavigator({
//     MainTab: {
//         screen: MainTab,
//         navigationOptions: () => ({
//           title: `Home Screen 도착`,
//           headerBackTitle: null
//         }),
//       },
// });

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            value: "",
            PhoneNum: "",
            secretNum: "",
        }
    }

    onChangeText = type => value => {
        this.setState ({
            [type] : value
        })
    }

    handleAlert = () => {
        Alert.alert(null, "비밀번호 찾기");
    }
    
    onEndEditing = () => {
        //const { navigation } = this.props;
        const { navigation } = this.props.navigation;
        const { secretNum } = this.state;
        navigate("Next", { secretNum });
    }
    
    handleGoMain = () => {
        //const { navigation } = this.props.navigation;
        // const { navigation } = this.props;
        // navigation.push('MainTab', { name: 'Home' })
        this.props.navigation.navigate('Auth');
    }
    
    render() {
        const { value, PhoneNum, secretNum  } = this.state;
        const { onChangeText, handleAlert, onEndEditing, handleGoMain } = this;
        const remote = 'http://img.kormedi.com/news/article/__icsFiles/afieldfile/2012/05/29/0529childer_c.jpg';
        
        // StackNavigator({
        //     Home: {
        //       screen: MainTab
        //     }
        // });
        
        //const { navigate } = this.props.navigation;

        return (

            <View style={styles.container}>
            {/* <Image
                resizeMode="contain"
                source={{ uri: remote }}
            /> */}
            {/* <Image source={require('../../images/backimage_1.png')}
             style={styles.backgroundImage}>
            </Image>  */}
                <View style={styles.parentView}>
                    <View>
                        <Text >휴대폰 번호</Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='휴대폰 번호를 입력해주세요'
                            keyboardType='number-pad'
                            value={PhoneNum}
                            onChangeText={onChangeText}
                            autoCapitalize='none'
                            autoCorrect={false}
                            returnKeyType='done'
                            clearButtonMode="while-editing"
                        />
                    </View>    
                    <View>
                        <Text style={styles.marginTop_1}>비밀번호</Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='비밀번호를 입력해주세요'
                            keyboardType='number-pad'
                            value={secretNum}
                            onChangeText={ onChangeText('secretNum')}
                            autoCapitalize='none'
                            autoCorrect={false}
                            returnKeyType='done'
                            clearButtonMode="while-editing"
                            secureTextEntry={true}
                            onEndEditing={onEndEditing}
                        />
                    </View>    
                    <Text 
                    style={{
                        marginTop: 30, 
                        textDecorationLine: 'underline', 
                        color: 'gray'
                    }}
                    onPress={handleAlert}
                    >
                    비밀번호 찾기
                    </Text>
                </View>
                <View >
                    <TouchableOpacity style={styles.footerBtn} onPress={handleGoMain}>
                        <Text style={styles.footerTxt} 
                        onPress={handleGoMain}
                        >
                        로그인하기
                        </Text>
                    </TouchableOpacity>
                </View>    
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    parentView: {
        alignItems: 'center',
        marginTop: 100
    },
    textInput: {
        width: 300,
        height: 45,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 10
    },
    marginTop_1: {
        marginTop: 20, 
        textAlign: 'left'
    },
    footerBtn: {
        height: 70,
        backgroundColor: '#FF6E40',
        alignItems : 'center',
        justifyContent : 'center'
    },
    footerTxt: {
        fontSize: 20,
        color: 'white',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    }
})



export default LoginScreen