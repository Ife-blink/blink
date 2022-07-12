import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
  import { View, Button, Pressable,Text } from 'react-native';
  import React from 'react';
  
  export default function AnimatedStyleUpdateExample(props) {
    const loaderWidth = useSharedValue(0);
  
    const dudu = 40;
  
    const config = {
      duration: /*dudu*/ 300,
      //easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
  
    const style = useAnimatedStyle(() => {
      return {
        width: withTiming(loaderWidth.value, config),
      };
    });
  
    function toggleWidth() {
      loaderWidth.value === 0 ?
      loaderWidth.value = 200 :
      loaderWidth.value = 0;
    };
  
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: '#0A0A0A',
        }}>
          <View style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',
            width: 200,  borderColor: '#FFFFFF50',
             borderWidth: 1, margin: 30, borderRadius: 6, }}>
        <Animated.View
          style={[{  height: 10, backgroundColor: '#FFFFFF',  borderRadius: 5, position:'relative',  zindex: -10, }, style]}
        />
        </View>
        <Pressable  onPress={() => {
            toggleWidth()
          }} >
          <Text style={{color: 'white', fontSize: 20, backgroundColor: '#FFFFFF60', borderRadius: 10, padding: 20,}}>Tap to load</Text>
          </Pressable>
        
      </View>
    );
  }