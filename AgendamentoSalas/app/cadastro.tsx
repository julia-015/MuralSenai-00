import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

const cadastro:
return (

  <View style={
    {backgroundColor: cores.bgPrimary, height: '100%'}
  }>
    <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
    <Logo text="Cadastre-se" color={backgroundColor} />
    <InputField label="Nome" placeholder="Digite o nome" secureTextEntry={false} />
    <InputField label="Username" placeholder="Digite o Username" secureTextEntry={false} />
    <InputField label="Senha" placeholder="Digite a senha" secureTextEntry={true} />
    <InputField label="Confirme a senha" placeholder="Digite a senha novamente" secureTextEntry={true}/>
    <Botao text="Cadastrar" color={corbotoes} href='.' />
  </View>)





