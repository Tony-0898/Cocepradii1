// src/presentation/screens/RegistrosScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const RegistrosScreen = () => {
  const handleViewRecords = () => {
    Alert.alert("Visualización de Registros", "Aquí se mostrarían los registros almacenados.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registros</Text>
      <Text style={styles.description}>
        En esta pantalla puedes ver y gestionar tus registros anteriores.
      </Text>
      
      <Button
        title="Ver Registros"
        onPress={handleViewRecords}
        color="#3d8abe"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3d8abe',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
});

export default RegistrosScreen;
