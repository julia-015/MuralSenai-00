import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { useColor } from "../Temas/Temas";


  type InputProps = {
    text: string,
    color: string,
    href: string,
}


const Input = ({text, color, href}: InputProps) => {

const cores = useColor()
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        height:"90%",
        width:"90%",
        gap:5,
    },

    text:{
        fontFamily: 'Inter',
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '200',
        lineHeight: 24.2
      },

    })}
    