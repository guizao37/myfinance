import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import styles from './styles'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nome, setNome] = useState('')
  const [cidade, setCidade] = useState('')
  const [strCPF, setCPF] = useState('')

  const navigation = useNavigation()

  function validaCPF(strCPF){
    var Soma = 0;
    var Resto;
    var isCpf = "true";

    if (strCPF.length != 10){
        isCpf = "false";
        return false;
    } else { isCpf = "true"; return true }

    }


  const backToHome = () => {
      navigation.replace("Login")
  }

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled
    >
      <View style={styles.inputContainer}>
      <TextInput
          placeholder="Nome"
          placeholderTextColor='#878787'
          value={nome}
          onChangeText={text => setNome(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor='#878787'
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="CPF"
          placeholderTextColor='#878787'
          maxLength={11}
          value={strCPF}
          onChangeText={text => setCPF(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Cidade"
          placeholderTextColor='#878787'
          value={cidade}
          onChangeText={text => setCidade(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor='#878787'
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.resetPassword}
        onPress={backToHome}>
          <Text style={styles.textResetPassword}>
            VOLTAR
          </Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen