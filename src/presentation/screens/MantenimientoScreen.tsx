import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa la librería de íconos

const MantenimientoScreen = () => {
  // Ejemplo de datos estáticos para el formulario
  const form = {
    nombreConductor: 'Juan Pérez',
  };

  const handleReporte = () => {
    Alert.alert("Reporte enviado", "Tu reporte de mantenimiento ha sido enviado con éxito.");
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        
        {/* Cabecera con la información estática */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Control de Kilometraje de Combustible Mensual</Text>
          <Text>Nombre Conductor: {form.nombreConductor}</Text>
          <Text>Tipo de Vehículo: Camioneta</Text>
          <Text>Placa: ABC-1234</Text>
        </View>
        
        <Text style={styles.title}>Mantenimiento</Text>

        {/* Campos de información del activo */}
        <Text style={styles.label}>Descripción del Problema:</Text>
        <TextInput 
          style={styles.textArea} 
          placeholder="Describe el problema o el mantenimiento requerido" 
          multiline 
        />

        {/* Botones para capturar imágenes */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
            <Icon name="camera" size={30} color="#fff" />
            <Text style={styles.buttonText}>Tomar Foto</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
            <Icon name="images" size={30} color="#fff" />
            <Text style={styles.buttonText}>Galería</Text>
          </TouchableOpacity>
        </View>

        {/* Botón para enviar reporte */}
        <TouchableOpacity style={styles.submitButton} onPress={handleReporte}>
          <Text style={styles.submitButtonText}>Enviar Reporte de Mantenimiento</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#bed5e7',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#e8f4fa',
    borderRadius: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3d8abe',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3d8abe',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  textArea: {
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',  // Centra y distribuye los botones de manera uniforme
    marginBottom: 20,
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: '#3d8abe',
    padding: 10,
    borderRadius: 5,
    width: 120,
  },
  buttonText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
  },
  submitButton: {
    backgroundColor: '#3d8abe',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MantenimientoScreen;
