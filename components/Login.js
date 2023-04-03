import { View, Text, TouchableOpacity,TextInput,StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config'

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  loginUser = async (email, password) => {
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error){
      alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log In</Text>
      <TextInput 
        style={styles.input}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
        // value={email}
      />
      <TextInput 
        style={styles.input}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        // value={email}
      />
      <TouchableOpacity 
         onPress={() => loginUser(email, password)}
          
        style={styles.button} >
        <Text style={{fontSize: 22}}>Login b</Text>
      </TouchableOpacity>
      <TouchableOpacity 
         onPress={() => navigation.navigate('Registration')}
          
        style={{marginTop:20}} >
        <Text style={{fontSize: 16}}>No acoount register it</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Login