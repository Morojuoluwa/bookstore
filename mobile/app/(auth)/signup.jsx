import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from "../../assets/styles/signup.styles"
import COLORS from '../../constants/colors'
import { Ionicons } from "@expo/vector-icons"
import { useRouter} from "expo-router"
import { useAuthStore } from '../../store/authStore'

export default function signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  const { user, isLoading,register} = useAuthStore()
  const router = useRouter()

  const handleSignup = async() =>{
    const result = await register(username, email, password)
    if(!result.success) Alert.alert("Error",result.error)
  }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS==='ios'?"padding":'height'}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>Bookworm</Text>
            <Text style={styles.subtitle}>Share your favorite reads</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}> Username</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color={COLORS.primary} style={styles.inputIcon}/>
                <TextInput style={styles.input} placeholder='JohnDoe' placeholderTextColor={COLORS.placeholderText} value={username} onChangeText={setUsername} autoCapitalize='none'/>
              </View>
            </View>


            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} color={COLORS.primary} style={styles.inputIcon}/>
                <TextInput style={styles.input} placeholder='Johndoe@gmail.com' placeholderTextColor={COLORS.placeholderText} value={email} onChangeText={setEmail} autoCapitalize='none' keyboardType='email-address'/>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <Ionicons name='lock-closed-button' size={20} color={COLORS.primary} style={styles.inputIcon}/>
                <TextInput style={styles.input} placeholder='******' placeholderTextColor={COLORS.placeholderText} value={password} onChangeText={setPassword} secureTextEntry={!showPassword}/>
                <TouchableOpacity onPress={()=>setShowPassword(!showPassword)} style={styles.eyeIcon}>
                  <Ionicons name={showPassword?"eye-outline":"eye-off-outlie"}/>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={isLoading}>
              {isLoading? (
                <ActivityIndicator color="#fff"/>
              ):(
                <Text style={styles.buttonText}>Sign Up</Text>
              )}
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account</Text>
              <TouchableOpacity onPress={()=>router.back()}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>

      </View>
    </KeyboardAvoidingView>
  )
}