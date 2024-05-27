import React, { useState } from "react";
import { View, Text, TextInput, Alert} from 'react-native';
import styles from '../Login/style';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Componentes/Firebase/Firebase';
import { Button } from "react-native-elements";

export function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function login() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
      console.log('Logado com sucesso! \n' + userCredential.user.email);
      Alert.alert('Sucesso', 'Logado com sucesso, bem-vindo!');
    } catch (error) {
      Alert.alert("Erro ao realizar o login")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginTexto}>Login</Text>

      <TextInput 
        placeholder="Usuário"
        placeholderTextColor='#6d6d6d'
        value={email}
        onChangeText={value => setEmail(value)}
        style={styles.input}
      />

      <TextInput 
        placeholder="Senha"
        placeholderTextColor='#6d6d6d'
        value={password}
        onChangeText={value => setPassword(value)}
        style={styles.input2}
        maxLength={12}
        secureTextEntry={true}
      />

      <Button 
        buttonStyle={styles.button}
        title="Entrar"
        onPress={() => navigation.navigate('Home')}
      />

      <Text
        style={styles.cadastroTexto}
        onPress={() => navigation.navigate('Cadastro')}>
        Não possui conta?
        <Text style={styles.cadastro}> Cadastre-se</Text>
      </Text>
    </View>
  )
}