import React from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { colors } from '../../lib/styleUtils'
import { Icon } from 'react-native-elements';
import { createStackNavigator, StackNavigator } from "react-navigation";

class SignScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: "",
            name: "",
            phoneNum: "",
            verifyNum: "",
            secretNum: "",
            secretNum2: "",
            isNullSecret: false,
            verifiedHPNum_1: false, 
            verifiedHpNum_2: false,
            verifiedPwd: null,
            //비밀번호 일치 여부 체크
            compareSecretNum: false,
            //인증번호 길이 체크
            checkVerifyNum: false,
            //다음 버튼 활성화 위한 체크 조건
            checkName: false,
            checkPhoneNum: false,
            checkSecretNum: false,
            checkSecretNum2: false,
            //다음 버튼 최종 활성화 조건
            verifiedDone: false,
        }
    }

    _onChangeText = type => value => {
        this.setState({
            [type]: value,
        });
        //Layout 컨트롤
        this._handleLayout(type, value);
        //버튼 활성화 여부
        this.btnNextAvailable(type, value);
    }

    _handleLayout = (type, value) => {
        const { name } = this.state;

        //이름 입력, 휴대폰번호 11자리 입력 완료되면 인증 Box 노출
        if( name !== "" && type === "phoneNum" && value.length === 11 ){
            this.setState({ verifiedHPNum_2: true });
        }
    }
    // 인증 버튼 클릭시
    _onPress = () => {
        
        const { verifyNum } = this.state;
        if( verifyNum.length === 6 ){
            this.setState({
                verifiedPwd: true,
                verifiedHPNum_2: false
            });
        }else{
            Alert.alert("인증번호 6자리를 입력해주세요.");
        }

    }

    handleAlert = () => {
        Alert.alert("비밀번호 찾기");
    }

     // 버튼 활성화 Method
     btnNextAvailable = (type, value) => {
        const { checkName, checkPhoneNum, checkSecretNum, checkSecretNum2 } = this.state;

        //이름
        if(type === "name" && value !== "" ){ 
            this.setState({ checkName : true });
        }else if(type === "name" && value !== "" ){ 
            this.setState({ checkName : false });
        }
        //인증 버튼
        if( type === "verifyNum" && value.length === 6 ){
            this.setState({ checkVerifyNum : true })
        }else if( type === "verifyNum" && value.length === 6 ){
            this.setState({ checkVerifyNum : false })
        }
        //핸드폰 번호 
        if(type === "phoneNum" && value !== "" ){
            this.setState({ checkPhoneNum : true });
        }else if(type === "phoneNum" && value !== "" ){
            this.setState({ checkPhoneNum : false });
        }
        //비번 설정
        if(type === "secretNum" && value !== "" ){
            this.setState({ checkSecretNum : true });
        }else if(type === "secretNum" && value !== "" ){
            this.setState({ checkSecretNum : false });
        }
        //비번 재확인
        if(type === "secretNum2" && value !== "" ){
            this.setState({ checkSecretNum2 : true });
        }else if(type === "secretNum2" && value !== "" ){
            this.setState({ checkSecretNum2 : false });
        }

        //다음 버튼
        if( checkName === true && checkPhoneNum === true && 
            checkSecretNum === true && checkSecretNum2 === true ){
                this.setState({ verifiedDone : true })
        }
        //비번 일치여부 텍스트 노출
        if(type === "secretNum"){
            //텍스트 영역 노출 조건
            if(value !== ""){
                this.setState({ isNullSecret: true }) 
            }else{
                this.setState({ isNullSecret: false }) 
            }
            //텍스트 문구 조건
            if( value === this.state.secretNum2 ){
                this.setState({ compareSecretNum: true }) 
            }else{
                this.setState({ compareSecretNum: false }) 
            }
        }else if(type === "secretNum2"){
            //텍스트 문구 조건
            if( value === this.state.secretNum ){
                this.setState({ compareSecretNum: true }) 
            }else{
                this.setState({ compareSecretNum: false }) 
            }
        }

    }
    // '다음' 탭시 벨리데이션 실행
    checkValidation = () => {
        const { name, phoneNum, secretNum, secretNum2 } = this.state;
        
        if( name.length < 2 || name.length > 6 ){
            Alert.alert("이름은 2~6자리만 가능합니다.");
            return false;
        }else if ( phoneNum.length !== 11 ){
            Alert.alert("핸드폰 번호는 11자리만 가능합니다.");
            return false;
        }else if ( secretNum.length < 8 || secretNum.length > 20 ){
            Alert.alert("비밀번호는 8~20자리만 가능합니다.");
            return false;
        }else if ( secretNum !== secretNum2 ){
            Alert.alert("입력한 비밀번호가 일치하지 않습니다.");
            return false;
        }
        return true;
    }

    //다음 버튼 클릭시 > 로그인 화면으로 이동
    handleGoNextscreen = () => {
        if(this.checkValidation()){
            this.props.navigation.navigate('Login');
        };
    }
    
    render() {
        const { value, name, phoneNum, secretNum, verifyNum, verifiedHPNum_1, verifiedHPNum_2, verifiedPwd, 
            phoneNumLength, verifiedDone, checkVerifyNum, txtSecretNumNotice, compareSecretNum, isNullSecret } = this.state;
        const { _onChangeText, handleAlert, onEndEditing, onMoveScreen, _onPress, handleGoNextscreen } = this;
        const remote = 'http://img.kormedi.com/news/article/__icsFiles/afieldfile/2012/05/29/0529childer_c.jpg';
        
        return (
            <View style={styles.container}>
                <View style={styles.parentView}>
                    <View>
                        <Text >이름</Text>
                            {/* <View style={[styles.nameContainer, 
                                style={ postion:'absolute', justifyContent:'flex-start'}]}> */}
                                <TextInput 
                                    style={styles.textInput}
                                    maxLength={6}
                                    placeholder='이름을 입력해주세요'
                                    onChangeText={_onChangeText('name')}
                                    autoCorrect={false}
                                    returnKeyType='done'
                                    clearButtonMode="while-editing"
                                />
                                {/* <Icon name="rainbow" type="entypo" size={20} style={{postiotn:'absolute'}}/> */}
                            {/* </View>     */}
                    </View>    
                    <View>
                        <Text style={styles.marginTop_1}>휴대폰 번호 </Text>
                        {/* / 글자수({this.state.phoneNumLength}) */}
                        <TextInput 
                            style={styles.textInput}
                            maxLength={11}
                            placeholder='휴대폰 번호를 입력해주세요'
                            keyboardType='number-pad'
                            value={phoneNum}
                            onChangeText={_onChangeText('phoneNum')}
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
                                                        maxLength={6}
                                                        placeholder='인증번호 6자리 입력'
                                                        keyboardType='number-pad'
                                                        autoCapitalize='none'
                                                        autoCorrect={false}
                                                        onChangeText={ _onChangeText('verifyNum')}
                                                        returnKeyType='done'
                                                        clearButtonMode="while-editing"
                                                        >
                                                        </TextInput>
                                                        { checkVerifyNum ?
                                                        (<Text 
                                                        style={{color: "#FF6E40", fontSize:20}}
                                                        onPress={_onPress}
                                                        >
                                                        인증
                                                        </Text>) : (<Text 
                                                        style={{color: "gray", fontSize:20}}
                                                        onPress={_onPress}
                                                        >
                                                        인증
                                                        </Text>   
                                                        )}
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
                                                    maxLength={20}
                                                    placeholder='비밀번호를 입력해주세요'
                                                    keyboardType='number-pad'
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
                                                    maxLength={20}
                                                    placeholder='비밀번호를 입력해주세요'
                                                    keyboardType='number-pad'
                                                    onChangeText={ _onChangeText('secretNum2')}
                                                    autoCapitalize='none'
                                                    autoCorrect={false}
                                                    returnKeyType='done'
                                                    clearButtonMode="while-editing"
                                                    secureTextEntry={true}
                                                    onEndEditing={onEndEditing}
                                                />
                                            </View>
                                                <View style={{marginTop: 10}}>
                                                { !isNullSecret ? (
                                                    null
                                                ) : (
                                                    compareSecretNum ?
                                                   (<Text style={{color: "#FF6E40"}}>비밀번호가 일치합니다.</Text>) :
                                                   (<Text style={{color: "#FF6E40"}}>비밀번호가 일치하지 않습니다.</Text>) 
                                                )
                                                }
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
                    (<TouchableOpacity style={styles.btnNotVeriNext} onPress={handleGoNextscreen} disabled={true}>
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
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    textInput: {
        height: 45,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 10
    },
    nameContainer: {
        flexDirection: 'row',
        // borderBottomWidth: 1,
        borderColor: '#000',
        // position:"absolute"
        // paddingBottom: 10,
    },
    inputStyle: {
        flex: 1,
    },
    textInputVeri: {
        height: 40,
        width: 150,
        // borderWidth: 1,
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