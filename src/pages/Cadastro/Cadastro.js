import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../Componentes/Firebase/Firebase';
import styles from './style'; 

const Cadastro = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');

    const registerUser = async (email, password, firstName, lastName) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            await firebase.auth().currentUser.sendEmailVerification({
                handleCodeInApp: true,
                url:'https://lines-22bea.firebaseapp.com',
            });
            await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
                firstName,
                lastName,
                email,
            });
            alert('E-mail de verificação enviado!');
            navigation.navigate('Login');
        } catch (error) {
            alert("Algo deu errado, tente novamente!");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.cadastroTexto}>Cadastro</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Primeiro nome'
                    onChangeText={(firstName) => setFirstName(firstName)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Último nome'
                    onChangeText={(lastName) => setLastName(lastName)}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Informe seu e-mai'
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Crie uma senha'
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={() => registerUser(email, password, firstName, lastName)}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.loginTexto}>
                    Já possui uma conta? Entre aqui.
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Cadastro;
