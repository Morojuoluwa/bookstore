import { Link } from "expo-router";
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.container}>

      <Text>index</Text>
    <Link href="/(auth)/signup">SignUp</Link>
    <Link href="/(auth)">Login</Link>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    color:"blue"
  }
})