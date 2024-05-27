import React, { useState } from "react";
import { View, Text, TextInput, Alert} from 'react-native';
import styles from "./style";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Componentes/Firebase/Firebase';
import { Button } from "react-native-elements";

export default function Cadastro({ navigation }) {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    async function createUser() {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert('Senha de segurança forte!');
            Alert.alert('Cadastro criado com sucesso!');
            setNomeCompleto('');
            setEmail('');
            setPassword('');
            setConfirmarSenha('');
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            Alert.alert('Erro ao criar usuário:', error.message);
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.tituCadastro}>Cadastro</Text>

            <TextInput 
                placeholder="E-mail"
                placeholderTextColor='#6d6d6d'
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.inputEmail}
            />
            
            <TextInput 
                placeholder="Senha"
                placeholderTextColor='#6d6d6d'
                value={password}
                onChangeText={value => setPassword(value)}
                style={styles.inputSenha}
                maxLength={12}
                secureTextEntry={true}

            />

            <TextInput 
                placeholder="Confirmar Senha"
                placeholderTextColor='#6d6d6d'
                value={confirmarSenha}
                onChangeText={value => setConfirmarSenha(value)}
                style={styles.inputConfirmar}
                maxLength={12} 
                secureTextEntry={true}
            />
            
            <Button
                buttonStyle={styles.button} 
                title="Cadastrar"
                onPress={() => createUser()}
            />

            <Text
                style={styles.loginTexto}
                onPress={() => navigation.navigate('Login')}>
                Já possui conta?
                <Text style={styles.login}> Login</Text>
            </Text> 
            
        </View>
    )
}