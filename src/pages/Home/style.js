import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center"
    },
    iconeAlerta:{
        width:48, 
        height:48,
        position: "absolute",
        bottom: 75,
        right: 13,
        zIndex: 999
    },
        modalContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf:'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContent: {
          backgroundColor: 'white',
          borderRadius: 10,
          alignSelf:'center',
          padding:10
        },
        imagem: {
          width: 25,
          height: 25,
          marginBottom: 10,
        },
        flexAlerta:{
            flexDirection: "row",

        },
        button:{   
            justifyContent: "center",
            alignItems: "center",
            width: '49.5%',
            height: 110,
            //borderStyle: 'solid',
            //borderWidth:1,
            marginBottom:3
        },

        buttonAcidente:{   
            justifyContent: "center",
            alignItems: "center",
            width: '49.5%',
            height: 130,
            //borderStyle: 'solid',
            //borderWidth:1,
        },

        buttonSOS:{   
            justifyContent: "center",
            alignItems: "center",
            width: '49.5%',
            height: 130,
            //borderStyle: 'solid',
            //borderWidth:1,
        },
    
        fundo_acidente:{
            backgroundColor: "#ff6868",
            padding: 5, 
            borderRadius: 60
        },
    
        fundo_eletricidade:{
            backgroundColor: "#ffdd70",
            padding:5, 
            borderRadius: 60
        },
    
        fundo_movimento:{
            backgroundColor: "#6295f1",
            padding:5, 
            borderRadius: 60
        },
    
        fundo_obras:{
            backgroundColor: "#ff9a61",
            padding:5, 
            borderRadius: 60
        },
    
        fundo_lentidao:{
            backgroundColor: "#ffdd70",
            padding:5, 
            borderRadius: 60
        },
    
        fundo_sos:{
            backgroundColor: "#ff003d",
            padding:5, 
            borderRadius: 60
        },

        fundo_opcao:{
            backgroundColor: "#ff6868",
            padding: 5, 
            borderRadius: 60
        },
    
        imageAlerta: {
            width: 60,
            height: 60, 
        },
    
        txtAlerta:{
            paddingTop: 6,
            fontWeight: "500",
            fontSize: 13,
        },
    
        txtAlertaSOS:{
            paddingTop: 6,
            fontWeight: "500",
            fontSize: 13,
            fontWeight: "bold"
        },

        txtOpcao:{
            paddingTop: 6,
            fontWeight: "500",
            fontSize: 13,
            textAlign:'center',
            width: 110
        },
    
        atualizacoes:{
            width: '100%',
        },
    
        txtAtualizacoes:{
            marginTop: '6%',
            textAlign: "center",
            fontWeight: "300"
        },
        titulo:{
            width: '100%',
        },
    
        txttitulo:{
            marginBottom: '4%',
            textAlign: "center",
            fontWeight: "500",
            fontSize:15,
            fontWeight: "bold",
        },
        fundoEnviar:{
            backgroundColor: "blue",
            width: 120,
            height: 40,
            borderRadius: 30,
            justifyContent:"center",
            alignItems: "center",
            alignSelf:'center',
            marginTop:20,
            backgroundColor:"#013eb0"
        },
        
        txtEnviar:{
            color: "#fff",
            fontSize: 18, 
            fontWeight: "bold",
        },
      });

export default style;