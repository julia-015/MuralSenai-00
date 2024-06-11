import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import  CustomHeader  from '@/components/Header';
import { useColor } from '@/Temas/Temas';

const App = () => {
  const theme = useColor();

  return (
    <View style={styles.container}>
      <CustomHeader cor={theme.bgPrimary} texto="Meu Aplicativo" />
      <View style={styles.content}>
        <Text>Este é o conteúdo da aplicação.</Text>
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
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;