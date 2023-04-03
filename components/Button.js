import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('MyComponent'); // Replace 'MyComponent' with the name of your component page
  };

  return (
    <Button title="Go to My Component" onPress={handlePress} />
  );
};

export default MyButton;
