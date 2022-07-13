import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
    cancelAnimation,
  } from 'react-native-reanimated';
  import { View, Button, Pressable,Text, ImageBackground, SafeAreaView, StatusBar, StyleSheet  } from 'react-native';
  import React,{useEffect, useState} from 'react';
  import New from './assets/Images/New.jpeg'
  import { useFonts } from 'expo-font';
  import { TapGestureHandler } from "react-native-gesture-handler";
  
  
  const { Value, event } = Animated;
  
  export default function App(props) {
   //height: '100%',
  const [playloader, setPlayloader] = useState(true);
  const loaderWidth = useSharedValue('0%');
  
  
  
  
   const dudu = 40;
  
   const config = {
     duration: /*dudu*/ 5000,
     //easing: Easing.bezier(0.5, 0.01, 0, 1),
   };
  
   const style = useAnimatedStyle(() => {
     return {
       width: withTiming(loaderWidth.value, config),
     };
   });
  
   const toggleWidth = () => {
     loaderWidth.value === '0%' ?
     loaderWidth.value = '100%' :
     loaderWidth.value = '0%';
   };
  
   const ProgressBar = (props) => {
  
    return (
      <View
        style={[props.style, {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          marginHorizontal: 10,
        }]}>
          <View style={{
            flexDirection: 'column',
            width: '100%',  borderColor: '#FFFFFF50',
             borderWidth: 1, margin: 30, borderRadius: 6, }}>
        <Animated.View
          style={[{  height: 5, backgroundColor: '#FFFFFF',  borderRadius: 5, position:'relative',  zindex: -10, }, style]}
        />
        </View>
        
      </View>
    );
  }
  
  
    return (
      
      <SafeAreaView style={{flex: 1,  backgroundColor: '#0A0A0A',}}>
        <Pressable style={{flex: 1,}} onPress={() => {
              toggleWidth()
            }} onLongPress={() => {
              cancelAnimation(loaderWidth);
              console.log('Long press')
          }}> 
      <View
        style={[styles.container, {
          flexDirection: "column",
          backgroundColor: '#0A0A0A',
        }]}>
          <View style={{flex: 2, backgroundColor: 'white', }}>
        <ImageBackground
        source={New}
        style={{height: '100%',}}
        > 
          <View style={{paddingTop: StatusBar.height, backgroundColor: '#00000020', height: '20%', }}>
        <ProgressBar />
        </View>
        </ImageBackground>
        </View>
        <View style={{flex: 2, padding: 20,}}>
        <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold',}}>Ayra star on being signed by don jazzy
        the singer expressed  </Text>
        </View>
      </View>
      </Pressable>
      </SafeAreaView>
    );
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
  });
  