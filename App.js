import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { View, Button, Pressable,Text, ImageBackground } from 'react-native';
import React from 'react';



const image = {uri: "https://topnaija.ng/ayra-starr-in-legal-trouble-after-her-non-appearance-at-a-show"}

export default function AnimatedStyleUpdateExample(props) {
  

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#0A0A0A',
      }}>
      <ImageBackground
      source={image}
      >
  <Text>I</Text>
      </ImageBackground>
      
    </View>
  );
}