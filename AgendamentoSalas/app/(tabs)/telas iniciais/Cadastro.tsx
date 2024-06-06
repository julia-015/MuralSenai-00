import { ScrollView } from "react-native"
import Header from "@/components/Header";
import { Link } from "expo-router";
import { useColor } from "@/Temas/Temas";
import { StyleSheet } from "react-native";
import React from "react";


function Cadastro(){

    const cores = useColor()

    return(
        <ScrollView style={styles.container}>
            <Header texto="Cadastre - se" cor={cores.cadastroHeader}/>
        </ScrollView>
    )
}

const cores = useColor()
const styles = StyleSheet.create({
    container:{
        backgroundColor: cores.bgPrimary,
        flex: 1
    }

    })

 export default Cadastro