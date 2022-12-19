import React from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
const MainScreen = props => {
  //   alert(props.msg);
  const handleClick = () => {
    alert(props.msg);
    console.log(props.msg);
  };
  return (
    <View>
      <Text style={styles.textColor}>{props.msg}</Text>
      <Button onPress={handleClick} title="Click me" />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  textColor: {
    color: 'red',
    fontSize: 20,
  },
});
