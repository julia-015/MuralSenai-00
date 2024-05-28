import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Botao from '@/components/botao';
import LinkBtn from '@/components/LinkBtn';
import { Link } from 'expo-router';
import { useColor } from '@/Temas/Temas'; 

function Cadastro(){
    
  const cores = useColor()
  
  return(
      <ScrollView>
           <Header texto="Cadastre-se" cor={cores.cadastroHeader}/>
          <View style={styles.form}>
              <Input label="Nome" placeholder={"Insira seu nome:"} />
              <Input label="Sobrenome" placeholder={"Insira seu sobrenome:"} />
              <Input label="E-mail" placeholder={"Insira seu email:"}/>
              <Input label="Telefone" placeholder={"Insira seu telefone:"}/>
              <Input label="Senha" placeholder={"Insira sua senha:"} secureTextEntry={true} />
              <Input label="Confirmar Senha" placeholder={"Insira sua senha:"} secureTextEntry={true} />
              <LinkBtn title="Cadastre-se" href="./login.tsx"/>
                         
          </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  form:{
      backgroundColor: "#fff",
      height: '100%',
      paddingTop: 45,
      paddingHorizontal: 20,
      paddingBottom: 45,
      width: "100%"
  },
  container: {
      backgroundColor: "#FFFFFF",
      flex: 1
  },
})
export default Cadastro