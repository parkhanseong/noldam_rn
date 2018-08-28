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
            phoneNum: "",
            verifyNum: "",
            secretNum: "",
            secretNumCheck: "",
            verifiedHPNum_1: false, 
            verifiedHpNum_2: false,
            verifiedPwd: null,
            phoneNumLength: "",
            verifiedDone: false
        }
    }

    GetValueLengthFunction = (ValueHolder) => {
    // GetValueFunction = type => (ValueHolder) => {
        // console.log(">> type : " + type);
        //console.log(">> type : " + value);

        //이름
        // if(type === name){
        //     phoneNumLength = nameLengt
        // }
        //폰번호

        //비번

        // console.log(">>> phoneNumLength ceck : " + phoneNumLength);

        var Value = ValueHolder.length;
        this.setState({
                phoneNumLength : Value
        })
    }

    _onChangeText = type => value => {

        const { name, phoneNum, verifyNum, secretNum, secretNumCheck, phoneNumLength } = this.state;
        const text = this.state[type]

        console.log(">>>>> this.state[tyep] :" + text);
        console.log(">>>>> [tyep] :" + type);
        console.log(">>>>> [value] :" + value);

        if(type === "phoneNum"){
            this.GetValueLengthFunction(value);
        }
        
        this.setState({
            [type]: value,
        });

        //이름 입력, 휴대폰번호 11자리 입력 완료되면 인증 Box 노출
        if( name !== null && value.length === 11 ){
            this.setState({
                [type]: value,
                verifiedHPNum_2: true,
            });
        }

        if( type === "secretNum" || type === "secretNumCheck"){
            this.setState({
                [type]: value,
            });
        }
        
        //회원가입 조건 완료시 '다음'버튼 활성화
        if(this.btnNextcheckValidation(value)){
            this.setState({
                verifiedDone : true
            })
        }else{
            console.log(">> false");
        }
    }

    onPress = () => {
        
        const { verifyNum } = this.state;

        if( verifyNum.length === 6 ){
            this.setState({
                verifiedPwd: true,
                verifiedHPNum_2: false
            });
        }else{
            Alert.alert(null, "인증번호 6자리를 입력해주세요.");
        }

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
    
    // btnNextcheckValidation = type => (value) => {
     btnNextcheckValidation = (type, value) => {
        const { name, phoneNum, secretNum, secretNumCheck } = this.state;

        // const value_ = this.state[type]
        // console.log(">>> btnNext Vali : " + value_);
        
        // if(  ){
                    
        // }   

            if( name.length < 2 || name.length > 6 ){
                console.log("1");
                return false;
            }else if ( phoneNum.length !== 11 ){
                console.log("2");
                return false;
            }else if ( secretNum.length < 8 || secretNum.length > 20 ){
                console.log("3");
                return false;
            }else if ( secretNum !== secretNumCheck ){
                console.log("4");
                return false;
            }

        return true;

    }

    checkValidation = () => {
        const { name, phoneNum, secretNum, secretNumCheck } = this.state;
        
        if( name.length < 2 || name.length > 6 ){
            Alert.alert("이름은 2~6자리만 가능합니다.");
            return false;
        }else if ( phoneNum.length !== 11 ){
            Alert.alert("핸드폰 번호는 11자리만 가능합니다.");
            return false;
        }else if ( secretNum.length < 8 || secretNum.length > 20 ){
            Alert.alert("비밀번호는 8~20자리만 가능합니다.");
            return false;
        }else if ( secretNum !== secretNumCheck ){
            Alert.alert("입력한 비밀번호가 일치하지 않습니다.");
            return false;
        }
        return true;
    }

    handleGoNextscreen = () => {
        // const { checkValidation } = this;
        if(this.checkValidation()){
            this.props.navigation.navigate('Introduce');
        };
        
    }
    
    render() {
        const { value, name, phoneNum, secretNum, verifyNum, verifiedHPNum_1, verifiedHPNum_2, verifiedPwd, phoneNumLength, verifiedDone } = this.state;
        const { _onChangeText, handleAlert, onEndEditing, handleGoMain, onMoveScreen, onPress, handleGoNextscreen } = this;
        const remote = 'http://img.kormedi.com/news/article/__icsFiles/afieldfile/2012/05/29/0529childer_c.jpg';
        
        return (
            <View style={styles.container}>
                <View style={styles.parentView}>
                    <View>
                        <Text >이름 </Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='이름을 입력해주세요'
                            /* value={name} */
                            onChangeText={
                                _onChangeText('name')
                                // (ValueHolder) => (this.GetValueFunction(ValueHolder))
                                // () = onChangeText('name')
                            }
                            autoCorrect={false}
                            returnKeyType='done'
                            clearButtonMode="while-editing"
                        />
                    </View>    
                    <View>
                        <Text style={styles.marginTop_1}>휴대폰 번호 / 글자수({this.state.phoneNumLength})</Text>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='휴대폰 번호를 입력해주세요'
                            keyboardType='number-pad'
                            value={phoneNum}
                            onChangeText={ 
                                _onChangeText('phoneNum')
                                
                            }
                            clearButtonMode="while-editing"
                            onEndEditing={onEndEditing}
                        />

                        {/* 인증번호 중복 */}
                        { !verifiedHPNum_1 ? ( 
                                        null  
                                        ) : (
                                        <Text style={styles.txtNoticeNum}>
                                        중복된 번호입니다. 다시 한번 확인해보세요.
                                        </Text> 
                                        )}
                        {/* 인증번호 입력 */}
                        { !verifiedHPNum_2 ? ( 
                                        null  
                                        ) : (
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
                                                        style={styles.textInputVeri} 
                                                        placeholder='인증번호 6자리 입력'
                                                        keyboardType='number-pad'
                                                        autoCapitalize='none'
                                                        autoCorrect={false}
                                                        onChangeText={ _onChangeText('verifyNum')}
                                                        returnKeyType='done'
                                                        clearButtonMode="while-editing"
                                                        /* secureTextEntry={true} */
                                                        /* onEndEditing={onEndEditing} */
                                                        >
                                                        </TextInput>
                                                        <Text 
                                                        style={{color: "#FF6E40", fontSize:20}}
                                                        onPress={onPress}
                                                        >
                                                            인증
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )}
                        {/* 비밀번호 */}
                        { !verifiedPwd ? ( null  ) : (
                                            <View>
                                            <View>
                                                <Text style={styles.marginTop_1}>비밀번호 설정</Text>
                                                <TextInput 
                                                    style={styles.textInput}
                                                    placeholder='비밀번호를 입력해주세요'
                                                    keyboardType='number-pad'
                                                    /* value={secretNum} */
                                                    onChangeText={ _onChangeText('secretNum')}
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
                                                    /* value={secretNum} */
                                                    onChangeText={ _onChangeText('secretNumCheck')}
                                                    autoCapitalize='none'
                                                    autoCorrect={false}
                                                    returnKeyType='done'
                                                    clearButtonMode="while-editing"
                                                    secureTextEntry={true}
                                                    onEndEditing={onEndEditing}
                                                />
                                            </View>
                                        </View>
                                        )}  
                    </View>    
                </View>
                
                {/* Footer / '다음' button */}
                <View >
                { verifiedDone ?     
                    (<TouchableOpacity style={styles.btnVeriNext} onPress={handleGoNextscreen}>
                        <Text style={styles.footerTxt}>
                        다음
                        </Text>
                    </TouchableOpacity>)
                    :
                    (<TouchableOpacity style={styles.btnNotVeriNext} onPress={handleGoNextscreen}>
                        <Text style={styles.footerTxt}>
                        다음
                        </Text>
                    </TouchableOpacity>)
                }    
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
    textInputVeri: {
        height: 40,
        width: 150,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        // marginTop: 10
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
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 10,
            // backgroundColor: 'yellow'
    },
    containerVeri: {
            backgroundColor:'white',
            height: 100,
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
    txtNoticeNum: {
        marginTop: 20, 
        color: '#FF6E40',
        fontWeight: 'bold'
    },
    btnVeriNext: {
        height: 70,
        backgroundColor: '#FF6E40',
        alignItems : 'center',
        justifyContent : 'center'
    },
    btnNotVeriNext: {
        height: 70,
        backgroundColor: 'gray',
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