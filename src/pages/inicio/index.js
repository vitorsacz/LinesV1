import { View, Text, Pressable, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  const COLORS = {
    amarelo:"#fbaf03",
    white: "#FFFFFF",
    black: "#222222",
    primary: "#013eb0",
    secondary: "#0143be",
    grey: "#CCCCCC"
}
const Button = (props) => {
  const filledBgColor = props.color || COLORS.primary;
  const outlinedColor = COLORS.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? COLORS.white : COLORS.primary;

  return (
      <TouchableOpacity
          style={{
              ...styles.button,
              ...{ backgroundColor: bgColor },
              ...props.style
          }}
          onPress={props.onPress}
      >
          <Text style={{ fontSize: 18, ... { color: textColor } }}>{props.title}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
      paddingBottom: 16,
      paddingVertical: 10,
      borderColor: COLORS.primary,
      borderWidth: 2,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center'
  }
})

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../../img/hero2.png")}
                        style={{
                            height: 120,
                            width: 120,
                            borderRadius: 60,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />
                    <Image
                        source={require("../../img/hero3.png")}
                        style={{
                            height: 70,
                            width: 70,
                            borderRadius: 60,
                            position: "absolute",
                            top: -60,
                            left:-40,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../../img/hero1.png")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 60,
                            position: "absolute",
                            top: -35,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />
                    <Image
                        source={require("../../img/hero2.png")}
                        style={{
                            height: 65,
                            width: 65,
                            borderRadius: 60,
                            position: "absolute",
                            top: -85,
                            left:55,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-40deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../../img/hero3.png")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 60,
                            position: "absolute",
                            top: 140,
                            left: -65,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../../img/hero4.png")}
                        style={{
                            height: 230,
                            width: 230,
                            borderRadius: 150,
                            position: "absolute",
                            top: 90,
                            left: 70,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Vamos</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Começar <Text style={{
                      fontSize: 46,
                      fontWeight: 800,
                      color: COLORS.amarelo
                  }}>.</Text></Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4
                        }}>Veja tudo das linhas de trem e metrô</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                        }}>da cidade de São Paulo em um só lugar!</Text>
                    </View>

                    <Button
                        title="Entre agora!"
                        onPress={() => navigation.navigate('Login')}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Não possui conta ainda?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Cadastro")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Cadastre-se</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Home