import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import styles from '../Login/style';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../Componentes/Firebase/Firebase';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Main');
    } catch (error) {
      alert("Algo deu errado, tente novamente!");
    }
  }

  const forgetPassword = () => {
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert("O e-mail para alterar senha foi enviado!")
    }).catch(() => {
      alert("Algo deu errado, tente novamente!")
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginTexto}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Informe seu e-mail'
          onChangeText={(email) => setEmail(email)}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <TextInput 
          style={styles.input}
          placeholder='Informe sua senha'
          onChangeText={(password) => setPassword(password)}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        onPress={() => loginUser(email, password)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.cadastroContainer}
      >
        <Text style={styles.cadastroTexto}>
          Não possui uma conta? Cadastre-se aqui.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {forgetPassword()}}
        style={styles.cadastroContainer}
      >
        <Text style={styles.esqueceuSenha}>
          Esqueceu sua senha? Clique aqui.
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
