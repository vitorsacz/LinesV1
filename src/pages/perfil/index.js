import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import imgUser from "./../../img/iconeUser.png";
import imgEdit from "./../../img/iconeEditar.png";
import imgLocaisSalvos from "./../../img/LocaisSalvos.png";
import imgConfiguracoes from "./../../img/configuracoes.png";
import styles from "./style.js";
import { firebase } from "../../Componentes/Firebase/Firebase";

const Perfil = ({ navigation }) => {
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const snapshot = await firebase.firestore().collection('users')
                    .doc(firebase.auth().currentUser.uid).get();
                if (snapshot.exists) {
                    setName(snapshot.data());
                } else {
                    console.log('User does not exist');
                }
            } catch (error) {
                console.log('Error fetching user data: ', error);
            }
        };

        fetchUserData();
    }, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.imgSetaContainer}>
                    </TouchableOpacity>
                    <View style={styles.txtHeaderContainer}>
                    </View>
                </View>
                <View style={styles.imgUserContainer}>
                    <Image source={imgUser} style={styles.imgUser} />
                    <View style={styles.txtOlaContainer}>
                        <Text style={styles.txtOla}>Olá,</Text>
                        <View style={styles.imgEditar}>
                            <Text style={styles.txtNome}>{name.firstName} {name.lastName}</Text>
                            <TouchableOpacity>
                                <Image source={imgEdit} style={styles.imgEdit} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.botaoContainer}>
                <TouchableOpacity>
                    <View style={styles.opcoesBotao}>
                        <Image source={imgLocaisSalvos} style={styles.imgBotoes} />
                    </View>
                    <Text style={styles.txtBotao}>Locais salvos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
                    <View style={styles.opcoesBotao}>
                        <Image source={imgConfiguracoes} style={styles.imgBotoes} />
                    </View>
                    <Text style={styles.txtBotao}>Configurações</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.LinhaMaior}></View>
            {['Instruções', 'Notificações', 'Minha conta', 'Suporte'].map((item, index) => (
                <React.Fragment key={index}>
                    <TouchableOpacity>
                        <View style={styles.opcoes}>
                            <Text style={styles.txtOpcoes}>{item}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.Linha}></View>
                </React.Fragment>
            ))}
            <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                <View style={styles.opcoes}>
                    <Text style={styles.txtOpcaoSair}>Sair da conta</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.LinhaMaior}></View>
        </View>
    );
};

export default Perfil;
