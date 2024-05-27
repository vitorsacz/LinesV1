import React from "react";
import { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import iconeX from "./../../img/iconeX.png";
import iconePerfil from "./../../img/perfil.png";
import iconeNoticia from "./../../img/noticias.png";
import iconePassagens from "./../../img/passagens.png";
import iconeEstacoes from "./../../img/estacoes.png";
import iconeLocaisSalvos from "./../../img/locaisSalvosMenu.png";
import iconeConfiguracao from "./../../img/configuracoes.png";
import iconePoliticaPrivacidade from "./../../img/PoliticaPrivacidade.png";
import iconeAjuda from "./../../img/ajuda.png";
import iconeSobreNos from "./../../img/sobreNos.png";


class Menu extends Component{
    render() {
        return(

            <View style={styles.container}>
                <View style={styles.xMenu}>
                    <TouchableOpacity>
                        <Image source={iconeX} style={styles.xis} ></Image>
                    </TouchableOpacity>

                        <Text style={styles.Menu}>
                            Menu
                        </Text>
                </View>


                <View>
                
                    <View >
                        <TouchableOpacity style={styles.xPerfil}>
                            <Image source={iconePerfil} style={styles.perfil} ></Image>
                            <Text style={styles.txtPerfil}>Perfil</Text>
                            
                        </TouchableOpacity>

                    </View>


                    <View >
                        <TouchableOpacity style={styles.xNoticias}>
                            <Image source={iconeNoticia} style={styles.noticias} ></Image>
                            <Text style={styles.txtNoticia}>Notícias</Text>
    
                        </TouchableOpacity>

                    </View>


                    <View >
                        <TouchableOpacity style={styles.xPassagens}>
                            <Image source={iconePassagens} style={styles.passagens} ></Image>
                            <Text style={styles.txtPassagem}>Passagens</Text>

                        </TouchableOpacity>

                    </View>


                    <View >
                        <TouchableOpacity style={styles.xEstacoes}>
                            <Image source={iconeEstacoes} style={styles.estacoes} ></Image>
                            <Text style={styles.txtEstacoes}>Estações</Text>
                            
                        </TouchableOpacity>

                    </View>


                    <View >
                        <TouchableOpacity style={styles.xLocaisSalvos}>
                            <Image source={iconeLocaisSalvos} style={styles.locaisSalvos} ></Image>
                            <Text style={styles.txtLocaisSalvos}>Locais Salvos </Text>
                            
                        </TouchableOpacity>

                    </View>


                    <View >
                        <TouchableOpacity style={styles.xConfiguracoes}>
                            <Image source={iconeConfiguracao} style={styles.configuracoes} ></Image>
                            <Text style={styles.txtConfiguracao}>Configurações</Text>
                            
                        </TouchableOpacity>

                    </View>

                </View>


                    <TouchableOpacity style={styles.btnSairDaConta}>
                        
                        <Text style={styles.txtSairDaConta}>Sair da Conta</Text>

                    </TouchableOpacity>

                    <View style={styles.divider}></View>


                    <View>
                        <View >
                            <TouchableOpacity style={styles.xPoliticaPrivacidade}>
                                <Image source={iconePoliticaPrivacidade} style={styles.politicaPrivacidade} ></Image>
                                <Text style={styles.txtPoliticaPrivacidade}>Política de privacidade </Text>

                            </TouchableOpacity>
                        </View>


                        <View>
                            <TouchableOpacity  style={styles.xAjuda}>
                                <Image source={iconeAjuda} style={styles.ajuda} ></Image>     
                                <Text style={styles.txtAjuda}>Ajuda</Text>

                            </TouchableOpacity>
       
                        </View>


                        <View>
                            <TouchableOpacity  style={styles.SobreNos}>
                                <Image source={iconeSobreNos} style={styles.imgSN}></Image>
                                <Text style={styles.txtSobreNos}>Sobre Nós</Text>

                            </TouchableOpacity>
                        </View>
                    </View>


            </View>
        )
    }
}

export default Menu;