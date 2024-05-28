import { View, TextInput, Text, StyleSheet, TextInputProps } from "react-native"
import { useState } from "react";
import { useColor } from "@/Temas/Temas";

import React from 'react';

interface InputProps extends TextInputProps{
    label:string

}

function Input({label, ...props}: InputProps){
    const cores = useColor()

    const[hover, setHover] = useState(cores.inputBgPrimary)

    const styles = StyleSheet.create({

        label:{
            color: cores.textColorPrimary
        },

        inputContainer: {
            marginTop:55,
            width: 320,
            height: 74,
            left: 23,
        },
        
        fontE:{
            fontSize:16,
            color: cores.textColorSecundary
        },
    
        input: {
            height: 40,
            backgroundColor: cores.inputBgPrimary,
            borderRadius: 5,
            padding: 10,
            marginTop:15,
            marginBottom:30,
            borderWidth:1,
            borderColor: hover

        },
    
    
    })

    return(
        <View>
            <View style={styles.inputContainer}>
            <Text style={styles.fontE}>{label}</Text>
        <TextInput {...props}
            style={styles.input} onFocus={()=>{
                setHover(cores.bgHover)
            }} onBlur={()=>{
                setHover(cores.inputBgPrimary)
            }}

            placeholderTextColor={cores.inputTextPrimary}
            {...props}
      
        />
            </View>
        </View>
    

    )
}

export default Input


