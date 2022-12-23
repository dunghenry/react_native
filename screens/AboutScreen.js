import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>About Screen</Text>
      <Button title="Go to Main" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

export default AboutScreen;
