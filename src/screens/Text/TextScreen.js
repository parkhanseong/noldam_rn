import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors } from '../../lib/styleUtils'

class TextScreen extends React.Component {
    render() {
        const laText = 'Last text';
        return (
            <View style={styles.container}>
                <Text> 알파카파카 </Text>
                <Text style={styles.text}>가나다라마
                <Text style={ { color: colors.main} }>바사아자차카</Text>
                </Text>
                <Text>this is {laText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    text: {
        fontSize: 20
    }
})

export default TextScreen