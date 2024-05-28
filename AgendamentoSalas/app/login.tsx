import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { Link } from "expo-router";
import { useColorScheme } from "react-native";
import Header from "@/components/Header";
import Input from "@/components/Input"
import Buttons from "@/components/Buttons";
import { useColor } from "@/Temas/Temas";
import Subtitulos from "@/components/Subtitulos";

import React from 'react';

const colorSheme = useColorScheme()

function Login(){
    const cores = useColor()
    return(
        <View style={styles.container}>
            <Header texto="Login" cor={cores.loginHeader}/>
            <Subtitulos texto="Faça Login para Acessar o Sistema!"/>
            <Input label="Email:" placeholder="Insira seu email" secureTextEntry={false} />
            <Input label="Senha:" placeholder="Insira sua senha" secureTextEntry={true} />
            <Link href="TabNav" asChild>
                <Buttons title="Entrar"/>
            </Link>
            
                <View style={styles.linksB}>
                    <Link href="/Cadastro" asChild>
                            <TouchableOpacity>
                                <Text style={styles.text}>Cadastre-se</Text>
                            </TouchableOpacity>
                    </Link>

                    <Link href="/RecupSenha" asChild>
                        <TouchableOpacity>
                            <Text style={styles.text}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
    )
}

const cores = useColor()
const styles = StyleSheet.create({
    container:{
        backgroundColor: cores.bgPrimary,
        flex: 1

    },

    linksB:{
        flexDirection: 'row', 
        justifyContent: "space-between", 
        paddingHorizontal: 20
    },
    text:{
        fontFamily:'Inter',
        fontWeight:'400',
        fontSize:14,
        lineHeight:19.94,
        color: cores.colorLinks
    }
})



export default Login