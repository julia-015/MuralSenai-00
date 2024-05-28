import { View, Text, StyleSheet, Image} from "react-native"
import React from 'react';

type HeaderProps = {
  texto: string,
  cor: string
}

function Header({cor, texto}: HeaderProps){
    return (
      
      <View style={{...styles.container, backgroundColor: cor}}>
          <Image style={styles.logo} source={require('@assets/LogoSenai.png')}/>
          <Text style={styles.text}>{texto}</Text>
      </View>
        
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    fontFamily: 'Roboto',
    height: 200,
    width: "100%",
    justifyContent: "center",
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    gap: 10
  },
  logo:{
    width: 181,
    height: 39,
    marginHorizontal: 73,
  },
  text:{
    fontSize: 20,
    color: '#fff'
  },
})

export default Header