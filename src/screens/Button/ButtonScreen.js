import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Alert, TextInput } from 'react-native'
import { colors, customStyle } from '../../lib/styleUtils'
import * as buttonActions from "../../redux/modules/button";

class ButtonScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };
    }

    onChangeText = type => value => {
        this.setState({
          [type]: value
        });
      };

    onPress = () => {
        //const { navigation } = this.props;
        //Alert.alert(null, "hihihi");
        //const { phone } = this.state;
        // console.log(">>>>>>>>>navi : " + this.props.navigation );
        // //navigation.push("ButtonNext");
        const { value } = this.state;

        const { BaseActions } = this.props;
        buttonActions.transportAction({ value : { value } });

        //this.props.navigation.navigate('ButtonNext', { value });
        this.setState({
            value: ""
        });
    }

    render() {
    const { onPress, onChangeText } = this;
    const { value } = this.state;

        return (
            <View style={styles.container}>
                
                <TextInput
                style={styles.textInput}
                placeholder="입력하세요"
                //keyboardType="number-pad"
                value={value}
                onChangeText={onChangeText("value")}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                clearButtonMode="while-editing"
                //onEndEditing={onEndEditing}
                />
                <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={onPress}
                >
                    <Text>완료</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        ...customStyle.center
    },
    button: {
        width: 100,
        height : 45,
        backgroundColor: '#bbb',
        ...customStyle.center
    },
    textInput: {
        width: 200,
        height: 45,
        borderColor: colors.border,
        borderWidth: 1,
        paddingHorizontal: 10
      },
})

export default ButtonScreen