
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Game3x3 from './src/screens/Game3x3';
import Game4x4 from './src/screens/Game4x4';
import Game5x5 from './src/screens/Game5x5'

export default function App() {
  
const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="3x3" component={Game3x3} />
        <Tab.Screen name="4x4" component={Game4x4} />
        <Tab.Screen name ="5x5" component={Game5x5}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
