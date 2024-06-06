import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { useColor } from "../Temas/Temas";


interface Header {
  cor: string;
  texto: string;
}

const Header: React.FC<Header> = ({ cor, texto }) => { 
  return(
    <View style={{...styles.container,backgroundColor: cor}}>
        <StatusBar style="light"/>
        <Text style={styles.text}>{texto}</Text>
    </View>
  )
}


const cores = useColor()
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    height:250,
    width:"100%",
    gap:10,
    borderBottomEndRadius:9,
    borderBottomStartRadius:9,
  
  },
  logo:{
    width: 181,
    height: 39,
    marginBottom: 20,
    marginTop: 40
  },
  text:{
    fontFamily: 'Inter',
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '400',
    lineHeight: 24.2
  },

})

export default Header