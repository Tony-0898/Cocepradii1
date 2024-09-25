// src/presentation/screens/MantenimientoScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const MantenimientoScreen = () => {
  const handleReporte = () => {
    Alert.alert("Reporte enviado", "Tu reporte de mantenimiento ha sido enviado con éxito.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mantenimiento</Text>
      <Text style={styles.description}>
        Aquí puedes realizar y enviar un reporte de mantenimiento de tu vehículo.
      </Text>
      
      <Button
        title="Enviar Reporte de Mantenimiento"
        onPress={handleReporte}
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

export default MantenimientoScreen;
