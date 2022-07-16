import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <View  style={styles.container}></View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: "center",
 },
 imagebox: {
  flex: 1,
  alignItems: 'center',
  justifyContent: "center",
  backgroundColor: '#0A0A0A'
 },
})