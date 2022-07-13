import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
  import { View, Button, Pressable,Text } from 'react-native';
  import React from 'react';
  



  
  const ProgressBar = (props) => {
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
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',  borderColor: '#FFFFFF50',
             borderWidth: 1, margin: 30, borderRadius: 6, }}>
        <Animated.View
          style={[{  height: 5, backgroundColor: '#FFFFFF',  borderRadius: 5, position:'relative',  zindex: -10, }, style]}
        />
        </View>
        <Pressable  >
          <Text style={{color: 'white', fontSize: 20, backgroundColor: '#FFFFFF60', borderRadius: 10, padding: 20,}}>Tap to load</Text>
          </Pressable>
        
      </View>
    );
  }

  export default ProgressBar
  