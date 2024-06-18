import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Botao from '@/components/Botao';
import Header from '@/components/Header';
import Input from '@/components/Inputs';

const Cadastro: React.FC = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = () => {
        // Lógica de cadastro
    };

    return (
        <View style={styles.container}>
            <Header cor="#FF0000" texto="Cadastro" />

            <View style={styles.formContainer}>
                <Input
                    text="Nome"
                    color="#000"
                    href="Digite seu nome"
                    value={nome}
                    onChangeText={setNome}
                />

                <Input
                    text="Email"
                    color="#000"
                    href="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Input
                    text="Senha"
                    color="#000"
                    href="Digite sua senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <Botao
                    text="Cadastrar"
                    color="#FF0000"
                    href=""
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