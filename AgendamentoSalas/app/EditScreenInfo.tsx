import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

type EditScreenInfoProps = {
  initialData: {
    name: string;
    email: string;
  };
  onSave: (data: { name: string; email: string }) => void;
};

const EditScreenInfo: React.FC<EditScreenInfoProps> = ({ initialData, onSave }) => {
  const [name, setName] = React.useState(initialData.name);
  const [email, setEmail] = React.useState(initialData.email);

  const handleSave = () => {
    onSave({ name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default EditScreenInfo;