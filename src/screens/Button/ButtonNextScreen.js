import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../lib/styleUtils";

class ButtonNextScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    // const name = navigation.getParam("name");
    // const age = navigation.getParam("age");
    //const value = navigation.getParam("phone");
    const { name } = this.props;
    console.log(">>>>>> Next Screen NAME : " + this.props.name);
    return (
      <View style={styles.container}>
        <Text>입력한 데이터 : {name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
});

export default ButtonNextScreen;
