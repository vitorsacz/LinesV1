import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles'

import Seta from './../../../img/seta-clara.png'
import AcidenteImage from "./../../../img/trem.png"
import MovimentoImage from "./../../../img/movimento.png"
import Clima from './../../../img/chuvaT.png'
import Engrenagem from './../../../img/engrenagemT.png'
import Colisao from './../../../img/trem.png'
import Baixo from './../../../img/baixo.png'
import Medio from './../../../img/medio.png'
import Alto from './../../../img/alto.png'
import Muito from './../../../img/muito.png'


class Movimento extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedItem: null,
          isOptionSelected: false,
        };
      }
    
      handleItemClick = (item) => {
        this.setState((prevState) => ({
          selectedItem: prevState.selectedItem === item ? null : item,
          isOptionSelected: prevState.selectedItem === item ? false : true,
        }));
      };
    
      Alertas = () => {
        this.props.navigation.navigate('Alertas');
      };
    
      home = () => {
        this.props.navigation.navigate('home');
      };
    
      render() {
        const { selectedItem, isOptionSelected } = this.state;
    
        return (
            <View style={styles.container}>
                
                <View style={styles.containerHeader}>
                    <View style={styles.flexHeader}>
                        <TouchableOpacity style={styles.setaContainer} onPress={this.Alertas}>
                            <Image source={Seta}  resizeMode="contain"  style={styles.seta}/>
                        </TouchableOpacity>
                            
                        <Text style={styles.title}>Alertas</Text>
                    </View>  
                </View>

                <View  style={styles.buttonPrincipal}>
                        <View  style={styles.fundo_acidente}>
                            <View onPress={this.Acidente}>                         
                                    <Image source={MovimentoImage} style={styles.imageAlerta}/>   
                            </View>
                        </View>

                        <Text style={styles.txtAlerta}>Movimento</Text>
                    </View>
                
                    
                    <View style={styles.flexAlerta}>
                        <View  style={styles.button}>
                            <TouchableOpacity onPress={() => this.handleItemClick('Item1')}
                                style={[
                                styles.fundo_opcao,
                                selectedItem === 'Item1' ? styles.hoveredButton : isOptionSelected ? styles.unselectedButton : null,
                                ]}>                         
                                <Image source={Baixo} style={styles.imageAlerta}/>   
                            </TouchableOpacity>

                            <Text style={styles.txtOpcao}>Baixo movimento</Text>
                        </View>

                        <View  style={styles.button}>
                        <TouchableOpacity onPress={() => this.handleItemClick('Item2')}
                                style={[
                                styles.fundo_opcao,
                                selectedItem === 'Item2'? styles.hoveredButton : isOptionSelected ? styles.unselectedButton : null,
                                ]}>
                                <Image source={Medio} style={styles.imageAlerta}/>   
                            </TouchableOpacity>

                            <Text style={styles.txtOpcao}>Médio movimento</Text>
                        </View>                        
                    </View>

                    <View style={styles.flexAlerta}>
                        <View  style={styles.button}>
                        <TouchableOpacity onPress={() => this.handleItemClick('Item3')}
                                style={[
                                styles.fundo_opcao,
                                selectedItem === 'Item3' ? styles.hoveredButton : isOptionSelected ? styles.unselectedButton : null,
                                ]}>                        
                                <Image source={Alto} style={styles.imageAlerta}/>   
                            </TouchableOpacity>

                            <Text style={styles.txtOpcao}>Alto movimento</Text>
                        </View>

                        <View  style={styles.button}>
                        <TouchableOpacity onPress={() => this.handleItemClick('Item4')}
                                style={[
                                styles.fundo_opcao,
                                selectedItem === 'Item4' ? styles.hoveredButton : isOptionSelected ? styles.unselectedButton : null,
                                ]}>                     
                            <Image source={Muito} style={styles.imageAlerta}/>   
                            </TouchableOpacity>

                            <Text style={styles.txtOpcao}>Muito movimento</Text>
                        </View>                        
                    </View>

                    <View style={styles.flexButtons}>

                        <TouchableOpacity  style={styles.fundoEnviar} onPress={this.home}>
                            <Text style={styles.txtEnviar}>
                                Enviar
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.atualizacoes}>
                        <Text style={styles.txtAtualizacoes}> 
                            Todos os Alertas são públicos e podem sofrer atualizações
                        </Text>
                    </View>
            </View>
        )
    }
}

export default Movimento

/*Botão Voltar
<TouchableOpacity  style={styles.fundoVoltar}>
    <Text style={styles.txtVoltar}>
        voltar
    </Text>
</TouchableOpacity>*/