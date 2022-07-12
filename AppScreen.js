import HomePage from './Screens/HomePage';
import Search from './Screens/Search';


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
    <View style={{flex: 1,}}><HomePage /></View>
  )
}

const Live =()=>{
  return(
    <View style={{flex: 1,}}><Search /></View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1,}}>
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: '#0A0A0A', color: 'FFFFFF', },
        tabBarLabelStyle: { fontSize: 12, color: '#FFFFFF', },
        tabBarIndicatorStyle: {backgroundColor: '#FFFFFF',},
        headerShown: false
        
      }}
      
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="For-you" component={For_you} />
      <Tab.Screen name="Live" component={Live} />
    </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    
    
  }
})