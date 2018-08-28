import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { colors, customStyle } from '../../lib/styleUtils';
import { Navigation, StackNavigator, createStackNavigator } from 'react-navigation';
import { MainTab } from '../../screens/base';
import { SignNavigator } from '../../screens/Sign';


class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            value: "",
            //p 소문자 수정
            PhoneNum: "",
            secretNum: "",
            //(인증 체크)
            verified: false 
        }
    }

    onChangeText = type => value => {

        if(type === 'phone' && value.length === 11){
            this.setState({
                [type]: value,
                verified: true
            });
        }else{
            this.setState({
                [type]: value,
                verified: false
            });
        }

        this.setState ({
            [type] : value
        })
    }

    handleAlert = () => {
        Alert.alert(null, "비밀번호 찾기");
    }

    onMoveScreen = (screen) => () => {
        this.props.navigation.navigate("SignUp");
    }
    
    // 필요 없음 > 삭제
    // onEndEditing = () => {
    //     //const { navigation } = this.props;
    //     const { navigation } = this.props.navigation;
    //     const { secretNum } = this.state;
    //     navigate("Next", { secretNum });
    // }
    
    handleGoMain = () => {
        //const { navigation } = this.props.navigation;
        // const { navigation } = this.props;
        // navigation.push('MainTab', { name: 'Home' })
        this.props.navigation.navigate('Auth');
    }
    
    render() {
        const { value, PhoneNum, secretNum, verified  } = this.state;
        const { onChangeText, handleAlert, onEndEditing, handleGoMain, onMoveScreen } = this;
        const remote = 'http://img.kormedi.com/news/article/__icsFiles/afieldfile/2012/05/29/0529childer_c.jpg';
        
        // StackNavigator({
        //     Home: {
        //       screen: MainTab
        //     }
        // });
        
        //const { navigate } = this.props.navigation;

        return (

            <View style={styles.container}>
            {/* <Image source={require('../../images/backimage_1.png')}
             style={styles.backgroundImage}>
            </Image>  */}
                <View style={styles.parentView}>
                    
                    {/* https: 사용해야 함 */}
                    {/* <Image
                        resizeMode="contain"
                        source={{ uri: remote }}
                        style={styles.imgBackground}
                    />  */}
                    <View>
                        <Text >휴대폰 번호</Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='휴대폰 번호를 입력해주세요'
                            keyboardType='number-pad'
                            value={PhoneNum}
                            onChangeText={onChangeText('phone')}
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
                    {/* <View style={{
                        flexWrap: 'wrap',
                        marginTop: 30,
                    }}>
                    </View>     */}
                    <View
                        style={{
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 10,
                            // backgroundColor: 'black',
                            paddingHorizontal: 70,
                        }}>
                        <Text 
                        style={{
                            textDecorationLine: 'underline', 
                            color: 'gray',
                        }}
                        onPress={handleAlert}
                        >
                        비밀번호 찾기
                        </Text>
                        <Text 
                        style={{
                            textDecorationLine: 'underline', 
                            color: 'gray',
                        }}
                        onPress={onMoveScreen("sign")}
                        >
                        회원가입
                        </Text>
                </View>
                </View>
                

                { !verified ? null : (
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
                )}  
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
        //justifyContent: 'space-between',
        //backgroundColor: 'green'
    },
    parentView: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        //alignItems: 'center',
        //marginTop: 100,
        //marginHorizontal: 30,
        //backgroundColor: 'yellow',
    },
    textInput: {
        height: 45,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 10
       // width: 300,
    },
    txtFindPwd: {
        
    },
    txtTitle: {

    },
    txtDesc: {
        
    },
    imgBackground:{
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        backgroundColor: 'yellow'
    },
    btnLogin:{

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
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        //resizeMode: 'cover', // or 'stretch'
    }
})

// const SignNavigator = StackNavigator({ SignOn: SignNavigator });

export default LoginScreen