import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Kris() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./krisss.jpg')} />
      <Text style={styles.name}>Kisan Rao</Text>
      <Text style={styles.description}>MindHunter, Overthinking World Champion, and Mindset Coach</Text>
      <Text style={styles.quote}>"APP is not given, it's Made. You have to work hard for it Day and night for it."</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 5,
  },
  quote: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
