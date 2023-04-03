import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Login from './Login';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  function handleNavigateToKris() {
    navigation.navigate('Kris');
  }
  useEffect(() => {
    // Simulate fetching user data
    const timerId = setTimeout(() => {
      const data = {
        name: 'kris karpe',
        email: 'kris@example.com',
        role: 'Coach',
        rating: 4.5,
        jobsCompleted: 23,
      };
      setUserData(data);
    }, 1000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Services for you</Text>
      {userData ? (
        <>
          <Text style={styles.text}>Name: {userData.name}</Text>
          <Text style={styles.text}>Email: {userData.email}</Text>
          <Text style={styles.text}>Role: {userData.role}</Text>
          <Text style={styles.text}>Rating: {userData.rating}</Text>
          <Text style={styles.text}>Jobs Completed: {userData.jobsCompleted}</Text>
        </>
      ) : (
        <Text style={styles.text}>Loading data...</Text>
      )}
      <Button title="View Kris's Infox" onPress={handleNavigateToKris} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    position: 'relative',
    top: 10,
    left: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
