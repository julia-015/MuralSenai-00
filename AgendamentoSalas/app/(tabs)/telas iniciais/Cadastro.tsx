import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Botao from '@/components/Botao';
import Header from '@/components/Header';
import Input from '@/components/Inputs';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Lógica para cadastrar o usuário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <View style={styles.container}>
      <Header cor="#FF0000" texto="Cadastro" />

      <View style={styles.formContainer}>
        <Input
          label="Nome"
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
        />

        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        <Input
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <Botao
          text="Cadastrar"
          color="#FF0000"
          onPress={handleCadastro}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cadastro;
