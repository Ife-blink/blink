import { View, Text, StyleSheet, SafeAreaView, } from 'react-native'
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


const For_you =()=>{
  return(
    <View><Text>For you</Text></View>
  )
}

const Home =()=>{
  return(
    <View><Text>Home</Text></View>
  )
}

const Live =()=>{
  return(
    <View><Text>Live</Text></View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: '#0A0A0A', color: 'FFFFFF', },
        tabBarLabelStyle: { fontSize: 12, color: '#FFFFFF', },
        tabBarIndicatorStyle: {backgroundColor: '#FFFFFF',},
        
        
      }}
      
      >
      <Tab.Screen name="For you" component={For_you} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Live" component={Live} />
    </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    paddingTop: 40,
    
  }
})