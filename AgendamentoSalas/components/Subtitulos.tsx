import { useColor } from "@/Temas/Temas";
import { View, Text, StyleSheet } from "react-native";

function Subtitulos({textoS}){
    return(
        <View>
            <Text style={styles.text}>{textoS}</Text>
        </View>
    )
}

const cores = useColor()
const styles = StyleSheet.create({
    text:{
        fontFamily: 'Inter',
        fontSize: 18,
        color: cores.textColorPrimary,
        fontWeight: '500',
        lineHeight: 19.36,
        justifyContent:'center',
        width:320,
        height:50,
        top: 40,
        left:20,
        textAlign:'center'
        
    
    },
})

export default Subtitulos

