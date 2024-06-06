
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColor } from '@/Temas/Temas';

interface SubtitulosProps {
    texto: string;
}

const Subtitulos: React.FC<SubtitulosProps> = ({ texto }) => {
    const cores = useColor(); 
    const styles = StyleSheet.create({
        text: {
            fontFamily: 'Inter',
            fontSize: 18,
            color: cores.textColorPrimary,
            fontWeight: '500',
            lineHeight: 19.36,
            justifyContent: 'center',
            width: 320,
            height: 50,
            top: 40,
            left: 20,
            textAlign: 'center'
        },
    });

    return (
        <View>
            <Text style={styles.text}>{texto}</Text>
        </View>
    );
}

export default Subtitulos;
