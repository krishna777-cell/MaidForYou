import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from './config';

import Kris from "./components/Kris";
import Login from './components/Login';
import Registration from './components/Signup';
import Dashboard from './components/Dashboard';
import Header from './components/Headers';



const Stack = createStackNavigator();

function App() {
  const [initilizing, setInilizing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user){
    setUser(user);
    if(initilizing) setInilizing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber
  }, [])

  if(initilizing) return null;

  if(!user){
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            headerTitle: () => <Header name="Login" />,
            
            headerTitleAlign: 'center',
            headerBackground: null
            // headerTintColor: '#fff',
            }}
          />

        <Stack.Screen 
            name="Registration" 
            component={Registration}
            options={{
              headerTitle: () => <Header name="Kris" />,
              headerStyle: {
                backgroundColor: '#00e4d0',
                height: 100,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
  }}
/>

      </Stack.Navigator>
    );
  }


  return(
    
    <Stack.Navigator>
      <Stack.Screen 
            name = "Dashboard" 
            component = {Dashboard}
            options = {{
               headerTitle: () => <Header name="Dashboard" />,
               headerStyle: {
                height: 150,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: '#FFFFFF',
                shadowColor: '#000',
                elevation: 25
               }
            }}

        />
        
        <Stack.Screen name="Kris" component={Kris} />
    </Stack.Navigator>
    
  );

}




export default () => {
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}