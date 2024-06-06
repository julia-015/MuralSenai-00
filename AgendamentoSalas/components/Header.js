import React from 'react-native';
import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles'; 

function Header({ texto, cor }) {
  return (
    <View style={{...styles.container, backgroundColor: cor}}>
      <StatusBar style="light"/>
      <Image style={styles.logo} source={require('../assets/image.png')} />
      <Text style={styles.text}>{texto}</Text>
    </View>
  );
}

export default Header;
