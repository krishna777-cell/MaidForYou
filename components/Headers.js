import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Headers = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Maid for You</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00bfff',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Headers;
