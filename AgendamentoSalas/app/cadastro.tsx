import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

return (
<KeyboardAwareScrollView
  resetScrollToCoords={{ x: 0, y: 0 }}
  contentContainerStyle={{ flexGrow: 1 }}
  scrollEnabled={false}
>
  <View style={
    {backgroundColor: cores.bgPrimary, height: '100%'}
  }>
    <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
    <Logo text="Cadastre-se" color={backgroundColor} />
    <InputField label="Nome" placeholder="Digite seu nome" secureTextEntry={false} />
    <InputField label="Sobrenome" placeholder="Digite seu Sobrenome" secureTextEntry={false} />
    <InputField label="Email" placeholder="Digite seu Email" secureTextEntry={false} />
    <InputField label="Telefone" placeholder="Digite seu Telefone" secureTextEntry={false} />
    <InputField label="Senha" placeholder="Digite sua Senha" secureTextEntry={true} />
    <InputField label="Confirme sua Senha" placeholder="Confirme sua Senha" secureTextEntry={true}/>
    <Botao text="Cadastrar" color={corbotoes} href='.' />
  </View>
</KeyboardAwareScrollView>)





