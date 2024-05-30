import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import Home from "../pages/Home";
import Operacao from "../pages/Operacao";
import Noticias from "../pages/noticias";
import Perfil from './../pages/perfil';
import { Platform } from 'react-native'; 

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                ...Platform.select({
                    ios: {
                        maxHeight: 120,
                        minHeight: 100
                    },
                    android: {
                        maxHeight: 75,
                        minHeight: 75
                    }
                }),
                backgroundColor: "#013eb0" 
            },
            tabBarLabelStyle: {
                color: "#fff",
                marginBottom: 15,
            },
            tabBarIconStyle: {
                marginTop: 8,
                marginBottom: 0
            }
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return <Ionicons name='home' size={size} color={"#fff"} />
                        }
                        return <Ionicons name='home-outline' size={size} color={"#fff"} />
                    }
                }}
            >
            </Tab.Screen>

            <Tab.Screen
                name="Operações"
                component={Operacao}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return <Ionicons name="train" size={24} color="white" />
                        }
                        return <Ionicons name="train-outline" size={24} color="white" />
                    }
                }}
            >
            </Tab.Screen>

            <Tab.Screen
                name="Noticias"
                component={Noticias}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return <MaterialCommunityIcons name="newspaper-variant" size={size} color="#fff" />
                        }
                        return <MaterialCommunityIcons name="newspaper-variant-outline" size={size} color="#fff" />
                    }
                }}
            >
            </Tab.Screen>

            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <FontAwesome name="user" size={25} color="#fff" />
                        }
                        return <FontAwesome name="user-o" size={24} color="#fff" />
                    }
                }}
            >
            </Tab.Screen>
        </Tab.Navigator>
    )
}
