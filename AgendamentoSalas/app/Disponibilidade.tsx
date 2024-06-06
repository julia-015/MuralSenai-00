import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Gallery, { GalleryRef } from 'react-native-awesome-gallery';
import salas from './Salas';

const Salas: React.FC = () => {
  const [Salas, setSalas] = useState(salas);

  const galleryRef = useRef<GalleryRef>(null);

  const identificador = (index: number) => {
    galleryRef.current?.setIndex(index);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.Container}>
        <Gallery
          ref={galleryRef}
          data={salas.map((im) => im.image)}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => identificador(index)}>
              <View style={styles.Container}>
                <Text style={styles.Name}>{salas[index].name}</Text>
                <Text
                  style={[
                    styles.availabilityText,
                    salas[index].available ? styles.available : styles.unavailable
                  ]}
                >
                  {salas[index].available ? 'Disponível' : 'Indisponível'}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
          initialIndex={0}
          onIndexChange={(newIndex) => console.log(`Índice atual: ${newIndex}`)}
          numToRender={3}
          emptySpaceWidth={20}
        />
      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginVertical: 8,
  },
  Name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  availabilityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  available: {
    color: 'green',
  },
  unavailable: {
    color: 'red',
  },
});

export default Salas;