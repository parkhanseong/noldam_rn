import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { colors } from '../../lib/styleUtils'
import { createStackNavigator, StackNavigator } from "react-navigation";


// const secretNumLayout = () => {
//     return (
//     )
// }

// const txtVerifyLayout = () => (
// )

class SignScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: "",
            name: "",
            //p 소문자 수정
            phoneNum: "",
            secretNum: "",
            //(인증 체크)
            verified: null,
            verifiedHPNum_1: false, //
            verifiedHpNum_2: false,
        }
    }

    onChangeText = type => value => {

        if(type === 'phoneNum' && value.length === 11){
            this.setState({
                [type]: value,
                verified: true,

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
    
    handleGoMain = () => {
        this.props.navigation.navigate('Auth');
    }
    
    render() {
        const { value, name, phoneNum, secretNum, verified  } = this.state;
        const { onChangeText, handleAlert, onEndEditing, handleGoMain, onMoveScreen } = this;
        const remote = 'http://img.kormedi.com/news/article/__icsFiles/afieldfile/2012/05/29/0529childer_c.jpg';
        
        return (
            <View style={styles.container}>
                <View style={styles.parentView}>
                    <View>
                        <Text >이름</Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='이름을 입력해주세요'
                            value={name}
                            onChangeText={onChangeText('name')}
                            autoCorrect={false}
                            returnKeyType='done'
                            clearButtonMode="while-editing"
                        />
                    </View>    
                    <View>
                        <Text style={styles.marginTop_1}>휴대폰 번호</Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='휴대폰 번호를 입력해주세요'
                            keyboardType='number-pad'
                            value={phoneNum}
                            onChangeText={ onChangeText('phoneNum')}
                            clearButtonMode="while-editing"
                            onEndEditing={onEndEditing}
                        />
                        { verified ? ( 
                            <View style={styles.wholeBox}>
                                <View style={styles.txtVerifiedTop}>
                                    <Text style={{color: 'white'}}>
                                        인증번호 입력
                                    </Text>
                                </View>
                                <View style={styles.containerVeri}>
                                    <View style={styles.txtNoticeVerfi}>
                                        <Text style={{color: "#FF6E40"}}>
                                            * 5~10초만 기다려주세요.
                                        </Text>
                                        <Text style={{ textDecorationLine: 'underline', color: 'gray',}}>
                                            재발송
                                        </Text>
                                    </View>
                                    <View style={styles.inputVeriNum}>
                                        <TextInput 
                                        placeholder='인증번호 6자리 입력'
                                        keyboardType='number-pad'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        returnKeyType='done'
                                        clearButtonMode="while-editing"
                                        secureTextEntry={true}
                                        onEndEditing={onEndEditing}
                                        >
                                        </TextInput>
                                        <Text style={{color: "#FF6E40", fontSize:20}}>
                                            인증
                                        </Text>
                                    </View>
                                </View>
                        </View>  
                                        ) : (
                                        <Text style={styles.txtNoticePwd}>
                                        중복된 번호입니다. 다시 한번 확인해보세요.
                                        </Text> 
                                        )}  
                        { verified ? ( <View>
                                            <View>
                                                <Text style={styles.marginTop_1}>비밀번호 설정</Text>
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
                                            <View>
                                                <Text style={styles.marginTop_1}>비밀번호 재확인</Text>
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
                                        </View>  
                                        ) : (
                                        null
                                        )}  
                        {/* 인증번호 입력 Box */}
                    </View>    
                    
                    {/* <View
                        style={{
                            justifyContent: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 10,
                            paddingHorizontal: 70,
                        }}>
                    </View> */}
                </View>
                
                {/* Footer 다음 button */}
                <View >
                    <TouchableOpacity style={styles.footerBtn} onPress={handleGoMain}>
                        <Text style={styles.footerTxt} 
                        onPress={handleGoMain}
                        >
                        다음
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
    },
    parentView: {
        flex: 1,
        // justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 30,
        // backgroundColor: "yellow"
    },
    textInput: {
        height: 45,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 10
    },
    txtFindPwd: {
        
    },
    txtTitle: {

    },
    txtDesc: {
        
    },
    wholeBox: {
        marginTop: 10,
        borderColor: "#FF6E40",
        borderWidth: 1,
    },
    txtVerifiedTop: {
        backgroundColor:'#FF6E40',
        height: 30,
        justifyContent:'center',
        alignItems : 'center',
        borderColor: "#FF6E40"
    },
    txtNoticeVerfi: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    inputVeriNum: {
            justifyContent: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
            paddingHorizontal: 10,
    },
    containerVeri: {
            backgroundColor:'white',
            height: 70,
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
    txtNoticePwd: {
        marginTop: 20, 
        color: '#FF6E40',
        fontWeight: 'bold'
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
    }
})

export default SignScreen