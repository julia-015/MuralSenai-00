import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Gallery, { GalleryRef } from 'react-native-awesome-gallery';

interface Task {
  id: string;
  name: string;
  available: boolean;
  image: string;
}

const Salas: React.FC = () => {
  const [salas, setSalas] = useState<Task[]>([
    { id: '1', name: 'Sala 1', available: true, image: 'https://example.com/room1.jpg' },
    { id: '2', name: 'Sala 2', available: false, image: 'https://example.com/room2.jpg' },
    { id: '3', name: 'Sala 3', available: true, image: 'https://example.com/room3.jpg' },
  ]);

  const galleryRef = useRef<GalleryRef>(null);

  const identificador = (index: number) => {
    galleryRef.current?.setIndex(index);
  };

  return (
    <View style={{ flex: 1 }}>
    <View style={styles.container}>
      <Gallery
        ref={galleryRef}
        data={salas.map((im) => im.image)}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => identificador(index)}>
            <View style={styles.container}>
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
