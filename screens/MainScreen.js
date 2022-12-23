import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MainScreen = props => {
  const navigation = useNavigation();
  //   alert(props.msg);
  const handleClick = () => {
    // alert(props?.msg);
    // console.log(props.msg);
    alert('Xin chao');
  };
  return (
    <View>
      <Text style={styles.textColor}>Main Screen</Text>
      <Button onPress={handleClick} title="Click me" />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
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
